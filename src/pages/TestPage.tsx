import { AppLayout } from "../layout/AppLayout";
import { QuizTemplate } from "../template/QuizTemplate";
import { QuizHeaderSection } from "../features/quiz/components/QuizHeaderSection";
import { QuizFooter } from "../layout/quizLayout/QuizFooter";
import { QuizMainSection } from "../features/quiz/components/QuizMainSection";
import { ConfirmButton } from "../features/quiz/components/ConfirmButton";
import { useQuizLogic } from "../features/quiz/hooks/useQuizLogic";


const TestPage = () => {
  const category = 'general'

  const { quizQuestion,
    allAnswers,
    selectedAnswer,
    totalPoints,
    remainingTime,
    difficulty,
    controls,
    handleAnimationOnClick, } = useQuizLogic(category)

  return (
    <AppLayout>
        <QuizTemplate>
              <QuizHeaderSection
                  variant="general"
                  remainingTime={remainingTime}
                  totalPoints={totalPoints}
                  selectedAnswer={selectedAnswer}
                  correctAnswer={quizQuestion?.correctAnswer}
                  controls={controls} />

              <QuizMainSection
                  quizQuestion={quizQuestion}
                  allAnswers={allAnswers}
                  selectedAnswer={selectedAnswer}
              />

              <QuizFooter variant="general">
                  <ConfirmButton
                      variant="general"
                      category={category}
                      difficulty={difficulty}
                      selectedAnswer={selectedAnswer}
                      handleAnimationOnClick={handleAnimationOnClick} />
            </QuizFooter>

        </QuizTemplate>
    </AppLayout>
  )
}

export default TestPage