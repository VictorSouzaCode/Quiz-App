import { useDispatch } from 'react-redux'
import { handlingAnswersChoice } from '../../../../state/majorFunctionalities/majorFunctionalities'


type AnswerSelectorProps = {
    answer: string,
    selectedAnswer: string | undefined,
}


export const AnswerSelector = ({
    answer,
    selectedAnswer,

}:AnswerSelectorProps) => {
    const dispatch = useDispatch()

    return (
        <>
            <div className="w-6">
                <input type="checkbox" className="w-5 h-5 hover:cursor-pointer" value={answer} onChange={() => {

                    dispatch(handlingAnswersChoice(answer))

                }} checked={selectedAnswer === answer} />
            </div>


            <label className="text-2xl">{answer}</label>
        </>
    )
}