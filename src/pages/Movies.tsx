import { AppLayout } from "../layout/AppLayout"
import { QuizTemplate } from "../template/QuizTemplate"
import { QuizFooter } from "../layout/quizLayout/QuizFooter"
import { ConfirmButton } from "../features/quiz/components/ConfirmButton"
import { QuizHeaderSection } from "../features/quiz/components/QuizHeaderSection"
import { QuizMainSection } from "../features/quiz/components/QuizMainSection"
import { useQuizLogic } from "../features/quiz/hooks/useQuizLogic"


const Movies = () => {

  const category = 'film_and_tv';
  const routeCategory = 'movies';

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
            variant="movies" 
            remainingTime={remainingTime} 
            totalPoints={totalPoints}
            selectedAnswer={selectedAnswer}
            correctAnswer={quizQuestion?.correctAnswer}
            controls={controls}
            />
    
            <QuizMainSection
              variant="movies"
              quizQuestion={quizQuestion}
              allAnswers={allAnswers}
              selectedAnswer={selectedAnswer}
            />
    
            <QuizFooter variant="movies">
              <ConfirmButton
                variant="movies"
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

export default Movies