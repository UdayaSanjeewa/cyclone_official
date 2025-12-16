// components/ui/badge.tsx
import * as React from "react";
import { cn } from "@/lib/utils"; // Utility to merge classNames

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "secondary" | "destructive";
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "default",
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium";

  const variantStyles: Record<string, string> = {
    default: "bg-gray-100 text-gray-800",
    primary: "bg-blue-100 text-blue-800",
    secondary: "bg-green-100 text-green-800",
    destructive: "bg-red-100 text-red-800",
  };

  return (
    <span
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
};
