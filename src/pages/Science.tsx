

import { Link } from "react-router-dom"
import { useEffect } from "react"
import { fetchQuestion, shuffle, handlingAnswersChoice, handlingPoints, decrementTimer} from "../state/majorFunctionalities/majorFunctionalities"
import { useDispatch, useSelector } from "react-redux"
import { RootState, AppDispatch } from "../state/quizStore"
import { motion, useAnimationControls } from "motion/react"

const Science = () => {

  const category = 'science'

  const dispatch = useDispatch()

  const asyncDispatch = useDispatch<AppDispatch>()

  const quizQuestion = useSelector((state: RootState) => state.majorFunctions.quizData.fullQuestion)

  const allAnswers = useSelector((state: RootState) => state.majorFunctions.storedData?.allAnswers)

  const selectedAnswer = useSelector((state: RootState) => state.majorFunctions.storedData?.storedChosenAnswer[0])

  const totalPoints = useSelector((state: RootState) => state.majorFunctions.sciencePoints)

  let remainingTime = useSelector((state: RootState) => state.majorFunctions.storedData?.remaningTime)

  const currentLocation = useSelector((state: RootState) => state.majorFunctions.currentPath)


  let handleDiffi = () => {

    switch(true) {
      case totalPoints < 40 && totalPoints >= 0: // on screen 60
        return 'easy'
      case totalPoints >= 40 && totalPoints < 100: // on screen 120
        return 'medium'
      case totalPoints >= 100:
        return 'hard'
      default:
        return 'unknown'
    }

  }
  let difficulty = handleDiffi()


  useEffect(() => {

    if(currentLocation === '/science'){

      async function fetchAndShuffle() {

        await asyncDispatch(fetchQuestion({category, difficulty}))
  
        asyncDispatch(shuffle())
      }
      fetchAndShuffle()

    }

  }, [,currentLocation])

  useEffect(() => {

    const timer = setInterval(() => {
      dispatch(decrementTimer())
    }, 1000)

    return () => clearInterval(timer) // Clear interval on component unmount

  }, [])

  const controls = useAnimationControls()

  const handleAnimationOnClick = async () => {

    await controls.start("changeColor")

    controls.set("initial")
  }

  useEffect(() => {

    if(remainingTime === 0) {

      async function fetchAndShuffle() {

        await asyncDispatch(fetchQuestion({category, difficulty}))
  
        asyncDispatch(shuffle())
      }
      fetchAndShuffle()
      handleAnimationOnClick()

    }

  }, [remainingTime])

  return (
    <div className="flex justify-center min-h-svh bg-slate-900">
      <div className="w-full lg:max-w-[50%] shadow-2xl shadow-black flex flex-col justify-between min-h-svh">

        <header className="min-h-28 flex justify-between text-xl font-medium px-12 py-5 bg-[#385DA6]">
        <Link to="/" className="grid place-content-center rounded-xl min-w-[70px] bg-[#91D7F2]" >
          Home
        </Link>

          {remainingTime && remainingTime <= 10 ? <p className="grid place-content-center rounded-xl min-w-[70px] bg-[#91D7F2] text-red-600">{remainingTime}</p> : <p className="grid place-content-center rounded-xl min-w-[70px] bg-[#91D7F2]">{remainingTime}</p>}

          <motion.p className="grid place-content-center rounded-xl min-w-[70px] bg-[#91D7F2]"
          variants={{
            initial: {
              scale: 1,
              color: "#000000",
            },
            changeColor: {
              scale: 1.05,
              color: `${selectedAnswer !== quizQuestion?.correctAnswer || remainingTime === 0 ? "#FF0000" : "#00C87F"}`,
            }
          }}
          initial="initial"
          animate={controls}>{totalPoints}</motion.p>
        </header>

        <main className="flex-grow px-10 flex flex-col items-center py-10 gap-y-5 bg-[#5A90BF] font-medium h-full">
          <div className="w-full max-w-[85%] lg:max-w-[75%] p-5 rounded-xl bg-[#91D7F2] shadow-lg">
            <p className="text-2xl">{quizQuestion ? quizQuestion.question.text : 'loading' }</p>
          </div>

          {quizQuestion && allAnswers ? allAnswers!.map((answer, index) => {

            return (
              <div className="w-full max-w-[85%] rounded-xl p-5 bg-[#91D7F2] shadow-lg flex fle-col gap-x-3 items-center lg:max-w-[75%]" key={index}>

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

        <footer className="min-h-20 flex justify-center bg-[#385DA6] py-2">
          <button className=" hover:cursor-pointer text-2xl font-medium rounded-lg p-5 grid place-content-center bg-[#91D7F2]" onClick={() => {
            if(!selectedAnswer) {
              alert('Please select an answer') 
            } else {

              async function fetchAndShuffle() {

                await asyncDispatch(fetchQuestion({category, difficulty}))
          
                asyncDispatch(shuffle())
              }
              fetchAndShuffle()
  
              dispatch(handlingPoints())

              handleAnimationOnClick()

            }
          }} >Confirm</button>
        </footer>

      </div>
    </div>
  )
}

export default Science