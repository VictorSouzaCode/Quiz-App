import { QuizHeader } from "../../../layout/quizLayout/QuizHeader";
import { LinkToHome, Container } from "../../../shared/ui";
import { motion, type AnimationControls } from "motion/react";


type QuizHeaderSectionProps = {
  variant: "default" | "general" | "movies" | "science" | "sports",
  remainingTime: number | undefined,
  totalPoints: number,
  correctAnswer: string | undefined,
  selectedAnswer: string | undefined,
  controls: AnimationControls;
}

export const QuizHeaderSection = ({
  variant,
  remainingTime,
  totalPoints,
  correctAnswer,
  selectedAnswer,
  controls

}:QuizHeaderSectionProps) => {

  if (!remainingTime) {
    console.log('undefined')
  }

  return (
    <QuizHeader variant={variant}>
      <LinkToHome variant={variant}>Home</LinkToHome>

      <Container variant={variant}>
        <p
        className={`${
          remainingTime && remainingTime <= 10 ? "text-red-600" : ""
        }`}
      >
        {remainingTime}
      </p>
      </Container>

      <Container variant={variant}>
        <motion.p
        variants={{
          initial: { scale: 1, color: "#000000" },
          changeColor: {
            scale: 1.50,
            color:
              selectedAnswer !== correctAnswer || remainingTime === 0
                ? "#FF0000"
                : "#00C87F",
          },
        }}
        initial="initial"
        animate={controls}
      >
        {totalPoints}
      </motion.p>
      </Container>
    </QuizHeader>
  )
}