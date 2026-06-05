"use client";

import { User, Lock, Mail, Building2, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const ICONS = { user: User, lock: Lock, mail: Mail, building: Building2, phone: Phone } as const;

interface FloatingAuthInputProps {
  id: string;
  name: string;
  type: string;
  label: string;
  icon: keyof typeof ICONS;
  required?: boolean;
  minLength?: number;
  autoComplete?: string;
  defaultValue?: string;
  readOnly?: boolean;
}

export function FloatingAuthInput({
  id,
  name,
  type,
  label,
  icon,
  required,
  minLength,
  autoComplete,
  defaultValue,
  readOnly,
}: FloatingAuthInputProps) {
  const Icon = ICONS[icon];

  return (
    <div className="relative z-0">
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        minLength={minLength}
        autoComplete={autoComplete}
        defaultValue={defaultValue}
        readOnly={readOnly}
        className={cn(
          "block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white/35 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-300 peer",
          readOnly && "cursor-not-allowed text-white/70",
        )}
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="absolute text-sm text-white/60 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-emerald-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        <Icon className="inline-block mr-2 -mt-1" size={16} />
        {label}
      </label>
    </div>
  );
}
