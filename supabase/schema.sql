-- ============================================================
-- Solentra House — Supabase schema
-- Run this in Supabase Dashboard → SQL Editor → New query
--   https://supabase.com/dashboard/project/eczsdmdulyntnspmwvdi/sql/new
-- ============================================================

-- ---------------------------------------------------------------
-- 1. purchases
--    Synced from Gumroad webhook after each completed transaction.
--    user_id links to auth.users via the customer's purchase email.
-- ---------------------------------------------------------------
create table if not exists public.purchases (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  service_id text,                       -- e.g. "solentra-scan"
  gumroad_sale_id text unique,           -- Gumroad sale ID for idempotency
  gumroad_product_id text,
  gumroad_permalink text,
  product_name text,
  price text,                            -- raw value from Gumroad (cents or formatted)
  currency text,
  customer_email text,
  sale_timestamp timestamptz default now(),
  raw_payload jsonb,                     -- full Gumroad ping for audit
  created_at timestamptz default now()
);

create index if not exists purchases_user_id_idx on public.purchases (user_id);
create index if not exists purchases_customer_email_idx on public.purchases (customer_email);
create index if not exists purchases_sale_timestamp_idx on public.purchases (sale_timestamp desc);

-- Row Level Security
alter table public.purchases enable row level security;

-- Authenticated users can read only their own purchases
drop policy if exists "purchases_select_own" on public.purchases;
create policy "purchases_select_own"
  on public.purchases
  for select
  using (auth.uid() = user_id);

-- Inserts only via service role (Gumroad webhook). No anon/auth insert.
-- (No insert policy means anon/auth cannot insert; service_role bypasses RLS.)


-- ---------------------------------------------------------------
-- 1B. purchase_intents
--    Recorded when a user clicks "Pay" on the checkout form,
--    just before redirecting to Gumroad. Allows admin to see
--    abandoned checkouts and ties customer notes / company to the
--    sale once Gumroad webhook confirms.
-- ---------------------------------------------------------------
create table if not exists public.purchase_intents (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  service_id text not null,
  customer_name text,
  customer_email text,
  company text,
  notes text,
  amount integer,                        -- in major units (EUR)
  currency text default 'EUR',
  status text default 'pending',         -- pending / completed / abandoned
  gumroad_sale_id text,                  -- linked when webhook arrives
  created_at timestamptz default now()
);

create index if not exists purchase_intents_user_id_idx on public.purchase_intents (user_id);
create index if not exists purchase_intents_status_idx on public.purchase_intents (status);
create index if not exists purchase_intents_created_at_idx on public.purchase_intents (created_at desc);

alter table public.purchase_intents enable row level security;

drop policy if exists "intents_select_own" on public.purchase_intents;
create policy "intents_select_own"
  on public.purchase_intents
  for select
  using (auth.uid() = user_id);


-- ---------------------------------------------------------------
-- 2. contact_requests
--    Optional persistence of inbound contact form submissions
--    (also sent by email via Resend).
-- ---------------------------------------------------------------
create table if not exists public.contact_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  topic text,                            -- "Digital strategy" / "Audit" / etc.
  message text,
  ip text,
  user_agent text,
  created_at timestamptz default now()
);

create index if not exists contact_requests_email_idx on public.contact_requests (email);
create index if not exists contact_requests_created_at_idx on public.contact_requests (created_at desc);

alter table public.contact_requests enable row level security;

-- Only service role can read (used for internal admin).
-- No public read or anon insert policies — inserts go through API route with service role.


-- ---------------------------------------------------------------
-- 3. Trigger: when a new auth.users row is created, link
--    matching purchases (by email) to that user.
-- ---------------------------------------------------------------
create or replace function public.link_purchases_to_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.purchases
     set user_id = new.id
   where user_id is null
     and customer_email is not null
     and lower(customer_email) = lower(new.email);
  return new;
end;
$$;

drop trigger if exists on_auth_user_created_link_purchases on auth.users;
create trigger on_auth_user_created_link_purchases
  after insert on auth.users
  for each row execute function public.link_purchases_to_new_user();
