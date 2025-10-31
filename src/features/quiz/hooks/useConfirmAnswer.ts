import { useAppDispatch } from "../../../shared/hooks/reduxHooks";
import { fetchQuestion, shuffle, handlingPoints } from "../../../state/majorFunctionalities/majorFunctionalities";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

export const useConfirmAnswer = (category: string, difficulty: string, selectedAnswer: string | undefined, handleAnimationOnClick: () => void) => {

    const dispatch = useAppDispatch();

    const fetchAndShuffle = useCallback(async () => {
        await dispatch(fetchQuestion({ category, difficulty }));
        dispatch(shuffle());
    }, [dispatch, category, difficulty]);

    const handleConfirm = useCallback(() => {
        if (!selectedAnswer) {
            alert("Please select an answer");
            return;
        }

        dispatch(handlingPoints());
        fetchAndShuffle();
        handleAnimationOnClick();
    }, [selectedAnswer, fetchAndShuffle, dispatch, handleAnimationOnClick]);

    return handleConfirm
}

// i am having a problem that when i go to the movies section my points doesnt get computed, while if i am in the general section the points get computed normaly