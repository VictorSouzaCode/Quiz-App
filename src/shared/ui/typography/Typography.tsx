import { cn } from "../../../lib/ultils";
import { cva } from "class-variance-authority";

type Typography = {
    variant?: "primary" | "secondary" | "positive" | "danger" | "muted",
    size?: "sm" | "md" | "lg",
    weight?: "normal" | "medium" | "semibold",
    children: React.ReactNode,
    className?: string,
}

const TypographyVariants = cva(
    "leading-relaxed",
    {
        variants: {
            variant: {
                primary: "text-black",
                secondary: "text-white",
                positive: "text-green-500",
                danger: "text-red-500",
                muted: "text-gray-600"
            },
            size: {
                sm: "text-sm",
                md: "text-base",
                lg: "text-lg",
                xl: "text-2xl"
            },
            weight: {
                normal: "text-normal",
                medium: "text-medium",
                semibold: "text-semibold"
            }
        },
        defaultVariants: {
            variant: "danger",
            size: "xl",
            weight: "medium"
        }
    }
)

export const Typography = ({
    variant,
    size,
    weight,
    children,
    className,

}:Typography) => {
  return (
    <p
    className={cn(TypographyVariants({size, weight, className, variant}))}

    >
        {children}
    </p>
  )
}