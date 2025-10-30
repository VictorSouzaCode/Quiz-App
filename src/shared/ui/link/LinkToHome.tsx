import { Link } from "react-router-dom"
import { cva } from "class-variance-authority"
import { cn } from "../../../lib/ultils"
import { AnchorHTMLAttributes } from "react"

type LinkToHomeProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  className?: string,
  variant?: "default" | "general" | "movies" | "science" | "sports"
  children?: React.ReactNode,
}

const linkCva = cva(
  "grid place-content-center rounded-xl min-w-[70px]",
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

export const LinkToHome = ({
  className,
  variant,
  children,
  ...props

}:LinkToHomeProps) => {

  return (
      <Link 
      to="/" 
      className={cn(linkCva({className, variant}))} 
      {...props}
      >
        <p>{children}</p>
      </Link>
  )
}