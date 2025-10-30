
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/ultils";
import type { ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";

export type ButtonProps =  ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string,
    variant?: "default" | "general" | "movies" | "science" | "sports",
    children: React.ReactNode
}

const buttonVariants = cva(
  "hover:cursor-pointer text-2xl font-medium rounded-lg p-5 grid place-content-center",
  {
    variants: {
      variant: {
        default: "bg-white hover:bg-gray-100",
        general: "bg-[#E1C38F] hover:bg-[#d4b27e]",
        movies: "bg-[#D7DBDE] hover:bg-[#c3c6c9]",
        science: "bg-[#91D7F2] hover:bg-[#7cc8e8]",
        sports: "bg-[#F2A74B] hover:bg-[#e0983f]"
      }
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ 
  className, 
  variant, 
  children, 
  ...props 
}, ref) => (

  <button 
  ref={ref}
  className={cn(buttonVariants({ variant, className }))} {...props}
  >
    {children}
  </button>
)
);

Button.displayName = "Button";