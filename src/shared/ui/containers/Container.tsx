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
                science: "bg-[#91D7F2]",
                sports: "bg-[#F2A74B]",
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