import { AppLayout } from "../layout/AppLayout"
import { QuizTemplate } from "../template/QuizTemplate"
import { QuizFooter } from "../layout/quizLayout/QuizFooter"
import { ConfirmButton } from "../features/quiz/components/ConfirmButton"
import { QuizHeaderSection } from "../features/quiz/components/QuizHeaderSection"
import { QuizMainSection } from "../features/quiz/components/QuizMainSection"
import { useQuizLogic } from "../features/quiz/hooks/useQuizLogic"


const General = () => {

  const category = 'general_knowledge'
  const routeCategory = 'general'

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
        variant="general" 
        remainingTime={remainingTime} 
        totalPoints={totalPoints}
        selectedAnswer={selectedAnswer}
        correctAnswer={quizQuestion?.correctAnswer}
        controls={controls}
        />

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
            correctAnswer={quizQuestion?.correctAnswer}
            handleAnimationOnClick={handleAnimationOnClick} />
        </QuizFooter>

      </QuizTemplate>
    </AppLayout>
  )
}

export default General;