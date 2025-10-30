import { QuestionBuilder } from '../../../state/majorFunctionalities/majorFunctionalities'
import { useDispatch } from 'react-redux'
import { handlingAnswersChoice } from '../../../state/majorFunctionalities/majorFunctionalities'

type QuizMainSectionProps = {
    quizQuestion: QuestionBuilder | null,
    allAnswers: string[] | undefined,
    selectedAnswer: string | undefined,
}

export const QuizMainSection = ({
    quizQuestion,
    allAnswers,
    selectedAnswer,

}:QuizMainSectionProps) => {
    const dispatch = useDispatch()

  return (
    <main className="flex-1 px-10 flex flex-col items-center py-10 gap-y-5 bg-[#91764E] font-medium h-full">
        <div className="w-full max-w-[85%] lg:max-w-[75%] p-5 rounded-xl bg-[#E1C38F] shadow-lg">
            <p className="text-2xl">{quizQuestion ? quizQuestion.question.text : 'loading' }</p>
          </div>

          {quizQuestion && allAnswers ? allAnswers!.map((answer, index) => {
          
                      return (
                        <div className="w-full max-w-[85%] rounded-xl p-5 bg-[#E1C38F] shadow-lg flex fle-col gap-x-3 items-center lg:max-w-[75%]" key={index}>
          
                        <div className="w-6">
                        <input type="checkbox" className="w-5 h-5 hover:cursor-pointer" value={answer} onChange={() => {
          
                        dispatch(handlingAnswersChoice(answer))
          
                        }} checked={selectedAnswer === answer}/>
                        </div>
          
                        
                        <label className="text-2xl">{answer}</label>
            
                        </div>
                      )
          
                    }) : <p className="text-4xl mt-36 font-bold">'Loading'</p>}
    </main>
  )
}