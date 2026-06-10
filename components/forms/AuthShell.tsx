"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { SmokeyBackground } from "@/components/ui/SmokeyBackground";
import { LogoMark } from "@/components/ui/Logo";

interface AuthShellProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer: React.ReactNode;
}

export function AuthShell({ title, subtitle, children, footer }: AuthShellProps) {
  return (
    <div className="fixed inset-0 z-[60] flex items-start sm:items-center justify-center p-3 sm:p-4 bg-neutral-950 overflow-y-auto">
      <SmokeyBackground color="#1A1A1A" />
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 w-full max-w-md my-auto overflow-hidden rounded-2xl sm:rounded-3xl border border-white/20 shadow-2xl"
      >
        <SmokeyBackground color="#1A1A1A" />
        <div className="relative z-10 bg-white/12 backdrop-blur-xl p-5 sm:p-7 md:p-8 text-white">
          <div className="flex items-center justify-between mb-5 sm:mb-8">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white">
                <LogoMark className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <span className="text-sm font-semibold tracking-tight">Solentra House</span>
            </div>
            <Link
              href="/"
              aria-label="Back to site"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>

          <div className="text-center mb-5 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h1>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-white/65">{subtitle}</p>
          </div>

          {children}

          <p className="text-center text-xs text-white/55 mt-5 sm:mt-7">{footer}</p>
        </div>
      </motion.div>
    </div>
  );
}
