"use client";

import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, hover = false, ...props }, ref) => {
    const baseStyles = "bg-gray-900 border border-gray-800 rounded-xl p-6 transition-all duration-300";
    
    const hoverStyles = hover 
      ? "hover:scale-[1.02] hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/10" 
      : "";

    return (
      <div
        ref={ref}
        className={cn(baseStyles, hoverStyles, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
