import { cva } from "class-variance-authority"
import { cn } from "../../../lib/ultils"
import { LinkToQuiz } from "../index"
import { motion } from "motion/react"

type CategoryCardProps = {
    className?: string,
    toLink: string,
    children?: React.ReactNode
}

const cardCva = cva(
    "rounded-3xl shadow-md bg-teal-600 flex items-center justify-center text-3xl font-medium cursor-pointer"
)

export const CategoryContainer = ({
    className,
    toLink,
    children

}: CategoryCardProps) => {

  return (
      <motion.div
          className={cn(cardCva({ className }))}
          whileHover={{
              scale: 1.03,
          }}
      >
          <LinkToQuiz quizCategory={toLink}>
          {children}
          </LinkToQuiz>
      </motion.div>
  )
}
