import { useAppDispatch } from "../../../shared/hooks/reduxHooks";
import { fetchQuestion, shuffle, handlingPoints } from "../../../state/majorFunctionalities/majorFunctionalities";
import { useCallback } from "react";
import { useDispatch } from "react-redux";


export const useConfirmAnswer = (category: string, difficulty: string, selectedAnswer: string | undefined, handleAnimationOnClick: () => void) => {

    const dispatch = useDispatch()
    const asyncDispatch = useAppDispatch()

    async function fetchAndShuffle() {

        await asyncDispatch(fetchQuestion({category, difficulty}))
  
        asyncDispatch(shuffle())
      }

    const handleConfirm = useCallback(() => {
        if (!selectedAnswer) {
            alert("Please select an answer");
            return;
        }
        
        fetchAndShuffle()
        dispatch(handlingPoints());
        handleAnimationOnClick();
    }, [selectedAnswer, category, difficulty, dispatch, handleAnimationOnClick]);

    return handleConfirm
}