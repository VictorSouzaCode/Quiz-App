import { cva } from "class-variance-authority";
import { cn } from "../../lib/ultils";
import { HTMLAttributes } from "react";

export type QuizFooterProps = HTMLAttributes<HTMLDivElement> & {
    className?: string,
    variant?: "default" | "general" | "movies" | "science" | "sports",
    children: React.ReactNode
}

const footerVariants = cva(
  "min-h-20 flex justify-center py-2",
  {
    variants: {
      variant: {
        default: "bg-white",
        general: "bg-[#59472C]",
        movies: "bg-[#757074]",
        science: "bg-[#385DA6]",
        sports: "bg-[#04BF55]"
      }
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export const QuizFooter = ({ 
    className, 
    variant, 
    children,
    ...props

}: QuizFooterProps) => (

  <div 
  className={cn(footerVariants({ variant, className }))}
  {...props}
  >
    {children}
  </div>
);