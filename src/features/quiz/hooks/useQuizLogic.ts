
// this hook encapsulate
// fetching logic
// difficulty calculation
// timer
// animation handling
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState, AppDispatch } from "../../../state/quizStore"
import { useAnimationControls } from "motion/react"
import {
  fetchQuestion,
  shuffle,
  decrementTimer,
} from "../../../state/majorFunctionalities/majorFunctionalities"
import { useMemo } from "react"



export const useQuizLogic = (category:string) => {
    const dispatch = useDispatch()
    const asyncDispatch = useDispatch<AppDispatch>()
    const controls = useAnimationControls()

    const quizQuestion = useSelector((state: RootState) => state.majorFunctions.quizData.fullQuestion)

    const correctAnswer = useSelector((state: RootState) => state.majorFunctions.quizData.fullQuestion?.correctAnswer)

    const allAnswers = useSelector((state: RootState) => state.majorFunctions.storedData?.allAnswers)

    const selectedAnswer = useSelector((state: RootState) => state.majorFunctions.storedData?.storedChosenAnswer[0])

    const totalPoints = useSelector((state: RootState) => state.majorFunctions.generalPoints)

    let remainingTime = useSelector((state: RootState) => state.majorFunctions.storedData?.remaningTime)

    const currentLocation = useSelector((state: RootState) => state.majorFunctions.currentPath)


   const difficulty = useMemo(() => {
    switch(true) {
      case totalPoints < 40 && totalPoints >= 0: // points on screen 60
        return 'easy'
      case totalPoints >= 40 && totalPoints < 100: // points on screen 120
        return 'medium'
      case totalPoints >= 100:
        return 'hard'
      default:
        return 'unknown'
    }
   },[totalPoints]) // Only recalculates when totalPoints changes

    // Fetch + shuffle logic
    const fetchAndShuffle = async () => {

        await asyncDispatch(fetchQuestion({ category, difficulty }))

        asyncDispatch(shuffle())
    }

    // Initial fetch
    useEffect(() => {
        if (currentLocation === `/${category}`) {
            fetchAndShuffle()
        }
    }, [currentLocation])

    // Timer
    useEffect(() => {

        const timer = setInterval(() => {
            dispatch(decrementTimer())
        }, 1000)

        return () => clearInterval(timer)

    }, [dispatch])

    // Auto-fetch when time runs out
    useEffect(() => {

        if (remainingTime === 0) {
            fetchAndShuffle()

            controls.start("changeColor").then(() => controls.set("initial"))
            // The use of controls.start().then() provides fine-grained control over the animation lifecycle, which is a more robust pattern
        }

    }, [remainingTime])

    const handleAnimationOnClick = async () => {
        await controls.start("changeColor")
        controls.set("initial")
    }


    return {
        quizQuestion,
        correctAnswer,
        allAnswers,
        selectedAnswer,
        totalPoints,
        remainingTime,
        difficulty,
        controls,
        handleAnimationOnClick
    }
}