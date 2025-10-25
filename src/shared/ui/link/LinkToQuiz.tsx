import { Link } from "react-router-dom"
import { cva } from "class-variance-authority"
import { cn } from "../../../lib/ultils"
import { AnchorHTMLAttributes } from "react"

type LinkToQuizProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  className?: string,
  quizCategory?: string,
  children?: React.ReactNode,
}

const linkCva = cva(
  "w-full h-full flex items-center justify-center rounded-3xl"
)

export const LinkToQuiz = ({
  className,
  quizCategory,
  children,
  ...props

}:LinkToQuizProps) => {

  return (
      <Link 
      to={`/${quizCategory}`} 
      className={cn(linkCva({className}))} 
      {...props}
      >
        <p>{children}</p>
      </Link>
  )
}