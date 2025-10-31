import { cn } from "../../../lib/ultils";
import { cva } from "class-variance-authority";
import { HTMLAttributes } from "react";


type ContainerProps = HTMLAttributes<HTMLDivElement> & {
    className?: string,
    variant?: "default" | "general" | "movies" | "science" | "sports",
    size?: "sm" | "md" | "lg",
    children?: React.ReactNode,
}


const ContainerVariants = cva(
    "grid place-content-center rounded-xl",
    {
        variants: {
            variant: {
                default: "bg-white",
                general: "bg-[#E1C38F]",
                movies: "bg-[#D7DBDE]",
                science: "bg-[#385DA6]",
                sports: "bg-[#04BF55]",
            },
            size: {
                sm: "min-w-[30px]",
                md: "min-w-[70px]",
                lg: "min-w-[100px]"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "md"
        }
    }
)

export const Container = ({
    className,
    variant,
    size,
    children

}:ContainerProps) => {
  return (
    <div  className={cn(ContainerVariants({variant, size, className}))}>
        {children}
    </div>
  )
}