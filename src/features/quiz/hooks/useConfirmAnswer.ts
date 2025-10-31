import { useAppDispatch } from "../../../shared/hooks/reduxHooks";
import { fetchQuestion, shuffle, handlingPoints } from "../../../state/majorFunctionalities/majorFunctionalities";
import { useCallback } from "react";

export const useConfirmAnswer = (
    category: string, 
    difficulty: string, 
    selectedAnswer: string | undefined,
    correctAnswer: string | undefined,
    handleAnimationOnClick: () => void,
) => {

    const asyncDispatch = useAppDispatch();

    const fetchAndShuffle = useCallback(async () => {
        await asyncDispatch(fetchQuestion({ category, difficulty }));

        asyncDispatch(shuffle());

    }, [asyncDispatch, category, difficulty]);

    const handleConfirm = useCallback(() => {

        if (!selectedAnswer) {
            alert("Please select an answer");
            return;
        }

        asyncDispatch(handlingPoints({category, selectedAnswer, correctAnswer}));

        fetchAndShuffle();

        handleAnimationOnClick();

    }, [selectedAnswer, fetchAndShuffle, asyncDispatch, handleAnimationOnClick]);

    return handleConfirm
}