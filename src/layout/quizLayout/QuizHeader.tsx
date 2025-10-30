import { cn } from "../../lib/ultils";
import { cva } from "class-variance-authority";

type QuizHeaderProps = {
    className?: string,
    variant?: "default" | "general" | "movies" | "science" | "sports",
    children?                                                                                                                                                              : React.ReactNode
}

const headerCva = cva(
  "min-h-28 flex justify-between text-xl font-medium px-12 py-5",
  {
    variants: {
      variant: {
        default: "bg-white",
        general: "bg-[#59472C]",
        movies: "bg-[#757074]",
        science: "bg-[#91D7F2]",
        sports: "bg-[#F2A74B]"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export const QuizHeader = ({
    className,
    variant,
    children,

}: QuizHeaderProps) => {

  return (
    <div className={cn(headerCva({className, variant}))}>
      {children}
    </div>
  )
}
