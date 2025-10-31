import { QuestionBuilder } from '../../../state/majorFunctionalities/majorFunctionalities'
import { Main } from '../buildingParts/main/Main'
import { TextContainer } from '../buildingParts/main/TextContainer'
import { AnswerSelector } from '../buildingParts/main/AnswerSelector'


type QuizMainSectionProps = {
    variant?: "default" | "general" | "movies" | "science" | "sports",
    quizQuestion: QuestionBuilder | null,
    allAnswers: string[] | undefined,
    selectedAnswer: string | undefined,
}

// next i need to ajust the colors according with the page that i am in

export const QuizMainSection = ({
    variant,
    quizQuestion,
    allAnswers,
    selectedAnswer,

}:QuizMainSectionProps) => {

  return (
    <Main variant={variant}>
      {quizQuestion?.question.text && 
        <TextContainer variant={variant}>
          <p className="text-2xl">
            {quizQuestion?.question.text}
          </p>
        </TextContainer>
      }

          {quizQuestion && allAnswers ? allAnswers!.map((answer, index) => {
          
                      return (
                        <TextContainer
                        variant={variant}
                        className="flex fle-col gap-x-4 items-center lg:max-w-[75%]" 
                        key={index}>

                          <AnswerSelector 
                          answer={answer}
                          selectedAnswer={selectedAnswer}/>

                        </TextContainer>
                      )
          
                    }) : <p className="text-4xl mt-36 font-bold">'Loading'</p>}
      </Main>
  )
}