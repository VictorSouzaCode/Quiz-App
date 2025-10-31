import { AppLayout } from "../layout/AppLayout"
import { QuizTemplate } from "../template/QuizTemplate"
import { QuizFooter } from "../layout/quizLayout/QuizFooter"
import { ConfirmButton } from "../features/quiz/components/ConfirmButton"
import { QuizHeaderSection } from "../features/quiz/components/QuizHeaderSection"
import { QuizMainSection } from "../features/quiz/components/QuizMainSection"
import { useQuizLogic } from "../features/quiz/hooks/useQuizLogic"


const Sports = () => {

  const category = 'sport_and_leisure';
  const routeCategory = 'sports';

  const {
    quizQuestion,
    allAnswers,
    selectedAnswer,
    totalPoints,
    remainingTime,
    difficulty,
    controls,
    handleAnimationOnClick,
  } = useQuizLogic(category, routeCategory)

  return (
    <AppLayout>
      <QuizTemplate>

        <QuizHeaderSection
          variant="sports"
          remainingTime={remainingTime}
          totalPoints={totalPoints}
          selectedAnswer={selectedAnswer}
          correctAnswer={quizQuestion?.correctAnswer}
          controls={controls}
        />

        <QuizMainSection
          variant="sports"
          quizQuestion={quizQuestion}
          allAnswers={allAnswers}
          selectedAnswer={selectedAnswer}
        />

        <QuizFooter variant="sports">
          <ConfirmButton
            variant="sports"
            category={category}
            difficulty={difficulty}
            selectedAnswer={selectedAnswer}
            correctAnswer={quizQuestion?.correctAnswer}
            handleAnimationOnClick={handleAnimationOnClick} />
        </QuizFooter>

      </QuizTemplate>
    </AppLayout>
  )
}

export default Sports