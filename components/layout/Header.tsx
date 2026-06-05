"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { LogIn, UserPlus, LayoutDashboard, LogOut } from "lucide-react";
import { MenuBar } from "./MenuBar";
import { NAV_ITEMS } from "@/lib/nav";
import { siteConfig } from "@/lib/site";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { LogoMark } from "@/components/ui/Logo";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";
  const [activeItem, setActiveItem] = useState(isHome ? "Home" : "");
  const [isAuthed, setIsAuthed] = useState(false);
  const [authResolved, setAuthResolved] = useState(false);

  useEffect(() => {
    const supabase = createSupabaseBrowserClient();
    let mounted = true;

    supabase.auth.getUser().then(({ data }) => {
      if (!mounted) return;
      setIsAuthed(Boolean(data.user));
      setAuthResolved(true);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!mounted) return;
      setIsAuthed(Boolean(session?.user));
      setAuthResolved(true);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!isHome) {
      setActiveItem("");
      return;
    }
    const sectionIds = NAV_ITEMS.filter((i) => i.href.startsWith("#")).map((i) =>
      i.href.slice(1),
    );
    if (sectionIds.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const match = NAV_ITEMS.find((i) => i.href === `#${entry.target.id}`);
            if (match) setActiveItem(match.label);
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [isHome]);

  const onItemClick = (label: string, href: string) => {
    setActiveItem(label);
    if (href.startsWith("#")) {
      if (isHome) {
        const el = document.getElementById(href.slice(1));
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        router.push(`/${href}`);
      }
    } else {
      router.push(href);
    }
  };

  return (
    <header className="sticky top-4 z-50 flex justify-center px-4">
      <div className="flex items-center gap-3 max-w-6xl w-full">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-white px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-sm hover:bg-white/15 transition-colors"
          aria-label={`${siteConfig.name} home`}
        >
          <LogoMark className="h-5 w-5" />
          <span className="hidden sm:inline">{siteConfig.name}</span>
        </Link>

        <div className="flex-1 flex justify-center">
          <MenuBar items={NAV_ITEMS} activeItem={activeItem} onItemClick={onItemClick} />
        </div>

        <div className="hidden md:flex items-center gap-2">
          {!authResolved ? null : isAuthed ? (
            <>
              <Link
                href="/account"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-neutral-950 shadow-sm text-sm font-medium hover:bg-white/90 transition-colors"
              >
                <LayoutDashboard className="h-3.5 w-3.5" />
                Account
              </Link>
              <form action="/api/auth/logout" method="POST">
                <button
                  type="submit"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-sm text-sm font-medium text-white/85 hover:bg-white/15 transition-colors cursor-pointer"
                >
                  <LogOut className="h-3.5 w-3.5" />
                  Sign out
                </button>
              </form>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-sm text-sm font-medium text-white/85 hover:bg-white/15 transition-colors"
              >
                <LogIn className="h-3.5 w-3.5" />
                Log in
              </Link>
              <Link
                href="/register"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-neutral-950 shadow-sm text-sm font-medium hover:bg-white/90 transition-colors"
              >
                <UserPlus className="h-3.5 w-3.5" />
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
