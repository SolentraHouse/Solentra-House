"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, LogIn, UserPlus, LayoutDashboard, LogOut } from "lucide-react";
import { useState } from "react";
import type { NavItem } from "@/lib/nav";
import { siteConfig } from "@/lib/site";
import { LogoMark } from "@/components/ui/Logo";

interface MobileMenuProps {
  items: NavItem[];
  isAuthed: boolean;
  authResolved: boolean;
  onItemClick: (label: string, href: string) => void;
  activeItem?: string;
}

export function MobileMenu({
  items,
  isAuthed,
  authResolved,
  onItemClick,
  activeItem,
}: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const handleItemClick = (label: string, href: string) => {
    onItemClick(label, href);
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="md:hidden flex items-center justify-center h-9 w-9 rounded-xl bg-white/10 backdrop-blur-xl border border-white/15 text-white hover:bg-white/15 transition-colors"
      >
        <Menu className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[80] md:hidden"
          >
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-md cursor-pointer"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-neutral-950 border-l border-white/15 flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-white">
                    <LogoMark className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-semibold text-white tracking-tight">
                    {siteConfig.name}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="h-9 w-9 flex items-center justify-center rounded-xl bg-white/10 border border-white/15 text-white hover:bg-white/15 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-5">
                <ul className="space-y-1">
                  {items.map((item) => {
                    const Icon = item.icon;
                    const isActive = item.label === activeItem;
                    return (
                      <li key={item.label}>
                        <button
                          type="button"
                          onClick={() => handleItemClick(item.label, item.href)}
                          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors ${
                            isActive
                              ? "bg-white/15 text-white"
                              : "text-white/75 hover:bg-white/8 hover:text-white"
                          }`}
                        >
                          <Icon className={`h-4 w-4 ${isActive ? item.iconColor : "text-white/55"}`} />
                          <span className="text-sm font-medium">{item.label}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="p-5 border-t border-white/10 space-y-2">
                {!authResolved ? null : isAuthed ? (
                  <>
                    <Link
                      href="/account"
                      onClick={() => setOpen(false)}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-neutral-950 font-medium text-sm hover:bg-white/90 transition-colors"
                    >
                      <LayoutDashboard className="h-4 w-4" />
                      Account
                    </Link>
                    <form action="/api/auth/logout" method="POST">
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 border border-white/15 text-white/85 font-medium text-sm hover:bg-white/15 transition-colors cursor-pointer"
                      >
                        <LogOut className="h-4 w-4" />
                        Sign out
                      </button>
                    </form>
                  </>
                ) : (
                  <>
                    <Link
                      href="/register"
                      onClick={() => setOpen(false)}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-neutral-950 font-medium text-sm hover:bg-white/90 transition-colors"
                    >
                      <UserPlus className="h-4 w-4" />
                      Register
                    </Link>
                    <Link
                      href="/login"
                      onClick={() => setOpen(false)}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 border border-white/15 text-white/85 font-medium text-sm hover:bg-white/15 transition-colors"
                    >
                      <LogIn className="h-4 w-4" />
                      Log in
                    </Link>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
