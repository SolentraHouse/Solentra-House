"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/lib/nav";

interface MenuBarProps {
  items: NavItem[];
  activeItem?: string;
  onItemClick?: (label: string, href: string) => void;
  className?: string;
}

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
};

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
};

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 0.8,
    scale: 1.1,
    transition: {
      opacity: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const },
      scale: { duration: 0.4, type: "spring" as const, stiffness: 300, damping: 25 },
    },
  },
};

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const sharedTransition = {
  type: "spring" as const,
  stiffness: 110,
  damping: 18,
  duration: 0.4,
};

export const MenuBar = React.forwardRef<HTMLDivElement, MenuBarProps>(
  ({ className, items, activeItem, onItemClick }, ref) => {
    return (
      <motion.nav
        ref={ref}
        className={cn(
          "p-1.5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-lg relative overflow-hidden transition-all duration-300",
          className,
        )}
        initial="initial"
        whileHover="hover"
      >
        <motion.div
          className="absolute -inset-2 nav-glow opacity-50 rounded-3xl z-0 pointer-events-none"
          variants={navGlowVariants}
        />

        <ul className="flex items-center gap-1 sm:gap-1.5 relative z-10">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = item.label === activeItem;

            return (
              <motion.li key={item.label} className="relative">
                <button
                  onClick={() => onItemClick?.(item.label, item.href)}
                  className="block w-full focus:outline-none cursor-pointer"
                  aria-current={isActive ? "page" : undefined}
                >
                  <motion.div
                    className="block rounded-xl overflow-visible group relative px-1 py-1"
                    style={{ perspective: "600px" }}
                    whileHover="hover"
                    initial="initial"
                  >
                    <motion.div
                      className="absolute inset-0 z-0 pointer-events-none rounded-xl"
                      variants={glowVariants}
                      animate={isActive ? "hover" : "initial"}
                      style={{
                        background: item.gradient,
                        opacity: isActive ? 0.08 : 0,
                      }}
                    />

                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}

                    <motion.div
                      className={cn(
                        "flex items-center gap-2 px-2.5 sm:px-3.5 py-1.5 relative z-10 bg-transparent transition-colors rounded-xl text-sm font-medium",
                        isActive
                          ? "text-white"
                          : "text-white/65 group-hover:text-white",
                      )}
                      variants={itemVariants}
                      transition={sharedTransition}
                      style={{
                        transformStyle: "preserve-3d",
                        transformOrigin: "center bottom",
                      }}
                    >
                      <span
                        className={cn(
                          "transition-colors duration-300",
                          isActive ? item.iconColor : "text-white/40 group-hover:text-white",
                        )}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="hidden sm:inline">{item.label}</span>
                    </motion.div>

                    <motion.div
                      className={cn(
                        "flex items-center gap-2 px-2.5 sm:px-3.5 py-1.5 absolute inset-0 z-10 shadow-sm transition-colors rounded-xl text-sm font-semibold",
                        isActive ? "text-white" : "text-white/85",
                      )}
                      variants={backVariants}
                      transition={sharedTransition}
                      style={{
                        transformStyle: "preserve-3d",
                        transformOrigin: "center top",
                        rotateX: 90,
                      }}
                    >
                      <span className={cn("transition-colors duration-300", item.iconColor)}>
                        <Icon className="h-4 w-4 animate-pulse" />
                      </span>
                      <span className="text-white hidden sm:inline">{item.label}</span>
                    </motion.div>
                  </motion.div>
                </button>
              </motion.li>
            );
          })}
        </ul>
      </motion.nav>
    );
  },
);

MenuBar.displayName = "MenuBar";
