import { Button } from "../../../shared/ui";
import { useConfirmAnswer } from "../hooks/useConfirmAnswer";

type ConfirmButtonProps = {
    variant: "default" | "general" | "movies" | "science" | "sports",
    category: string,
    difficulty: string,
    selectedAnswer: string | undefined,
    correctAnswer: string | undefined,
    handleAnimationOnClick: () => void,
}

export const ConfirmButton = ({
    variant,
    category,
    difficulty,
    selectedAnswer,
    correctAnswer,
    handleAnimationOnClick,

}: ConfirmButtonProps) => {
  
    const handleConfirm = useConfirmAnswer(category, difficulty, selectedAnswer, correctAnswer, handleAnimationOnClick)

  return (
    <Button variant={variant} onClick={handleConfirm}
    >
      Confirm
    </Button>
  )
}