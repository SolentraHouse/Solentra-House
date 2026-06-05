import {
  Home,
  Layers,
  Users,
  HelpCircle,
  Mail,
  Scale,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  gradient: string;
  iconColor: string;
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    href: "#hero",
    icon: Home,
    gradient:
      "linear-gradient(135deg, rgba(148,163,184,0.14), rgba(71,85,105,0.04))",
    iconColor: "text-slate-800",
  },
  {
    label: "Services",
    href: "#services",
    icon: Layers,
    gradient:
      "linear-gradient(135deg, rgba(56,189,248,0.15), rgba(3,105,161,0.04))",
    iconColor: "text-sky-600",
  },
  {
    label: "About",
    href: "#about",
    icon: Users,
    gradient:
      "linear-gradient(135deg, rgba(129,140,248,0.15), rgba(67,56,202,0.04))",
    iconColor: "text-indigo-600",
  },
  {
    label: "FAQ",
    href: "#faq",
    icon: HelpCircle,
    gradient:
      "linear-gradient(135deg, rgba(251,191,36,0.15), rgba(217,119,6,0.04))",
    iconColor: "text-amber-600",
  },
  {
    label: "Contact",
    href: "#contact",
    icon: Mail,
    gradient:
      "linear-gradient(135deg, rgba(52,211,153,0.15), rgba(4,120,87,0.04))",
    iconColor: "text-emerald-600",
  },
  {
    label: "Legal",
    href: "/legal",
    icon: Scale,
    gradient:
      "linear-gradient(135deg, rgba(244,114,182,0.15), rgba(190,24,93,0.04))",
    iconColor: "text-rose-600",
  },
];
