import { cn } from "../../../../lib/ultils"
import { cva } from "class-variance-authority"

type MainProps = {
    variant?: "default" | "general" | "movies" | "science" | "sports",
    className?: string,
    children?: React.ReactNode,
}

const mainVariants = cva(
    "flex-1 px-10 flex flex-col items-center py-10 gap-y-5 font-medium",
    {
        variants: {
            variant: {
                default: "bg-white",
                general: "bg-[#91764E]",
                movies: "bg-[#C7C0BA]",
                science: "bg-[#5A90BF]",
                sports: "bg-[#91D996]"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }
)

export const Main = ({
    variant,
    className,
    children,

}:MainProps) => {
  return (
    <main className={cn(mainVariants({variant, className}))}>
        {children}
    </main>
  )
}