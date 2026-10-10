import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variantStyles = {
      primary:
        "bg-[#0B3B24] text-[#FDFBF7] hover:bg-[#072617] border border-[#0B3B24] shadow-sm hover:shadow active:scale-[0.99]",
      secondary:
        "bg-[#F4EFE6] text-[#072617] hover:bg-[#EDE6D8] border border-[#0B3B24]/10 shadow-xs",
      outline:
        "border border-[#0B3B24] text-[#0B3B24] hover:bg-[#0B3B24] hover:text-[#FDFBF7] active:scale-[0.99]",
      ghost:
        "text-[#072617] hover:bg-[#0B3B24]/5 hover:text-[#0B3B24]",
      gold:
        "bg-[#C5A059] text-[#072617] hover:bg-[#B38D44] font-semibold border border-[#B38D44]/30 shadow-sm hover:shadow active:scale-[0.99]",
    };

    const sizeStyles = {
      sm: "text-xs px-3 py-1.5 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-6 py-3.5 gap-2.5",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
