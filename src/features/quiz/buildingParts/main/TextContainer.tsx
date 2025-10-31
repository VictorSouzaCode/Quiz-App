import { cn } from "../../../../lib/ultils"
import { cva } from "class-variance-authority"

type TextContainerProps = {
    variant?: "default" | "general" | "movies" | "science" | "sports",
    className?: string,
    children?: React.ReactNode,
}

const TextContainerVariants = cva(
    "w-full max-w-[85%] lg:max-w-[75%] rounded-xl p-5 shadow-lg",
    {
        variants: {
            variant: {
                default: "bg-white",
                general: "bg-[#E1C38F]",
                movies: "bg-[#D7DBDE]",
                science: "bg-[#91D7F2]",
                sports: "bg-[#F2A74B]"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }
)

export const TextContainer = ({
    variant,
    className,
    children

}:TextContainerProps) => {
  return (
    <div className={cn(TextContainerVariants({variant, className}))}>
        {children}
    </div>
  )
}