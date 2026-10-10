import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "accent" | "dark";
  padding?: "none" | "sm" | "md" | "lg";
}

export function Card({
  children,
  variant = "default",
  padding = "md",
  className = "",
  ...props
}: CardProps) {
  const variantStyles = {
    default: "bg-[#FDFBF7] border border-[#0B3B24]/10 shadow-xs hover:border-[#0B3B24]/20",
    elevated:
      "bg-white border border-[#0B3B24]/10 shadow-sm hover:shadow-md transition-shadow duration-300",
    accent:
      "bg-[#F4EFE6] border-l-4 border-l-[#C5A059] border-y border-r border-[#0B3B24]/10",
    dark: "bg-[#072617] text-[#FDFBF7] border border-[#C5A059]/20",
  };

  const paddingStyles = {
    none: "p-0",
    sm: "p-4",
    md: "p-6 sm:p-8",
    lg: "p-8 sm:p-12",
  };

  return (
    <div
      className={`rounded-sm transition-all duration-200 ${variantStyles[variant]} ${paddingStyles[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function Badge({
  children,
  variant = "gold",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "gold" | "forest" | "neutral";
  className?: string;
}) {
  const variants = {
    gold: "bg-[#C5A059]/15 text-[#9E7D3B] border border-[#C5A059]/30",
    forest: "bg-[#0B3B24]/10 text-[#0B3B24] border border-[#0B3B24]/20",
    neutral: "bg-gray-100 text-gray-700 border border-gray-200",
  };

  return (
    <span
      className={`inline-flex items-center text-[11px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-xs ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
