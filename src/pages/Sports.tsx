
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState, AppDispatch } from "../state/quizStore"
import { fetchQuestion, shuffle, handlingAnswersChoice, handlingPoints, decrementTimer} from "../state/majorFunctionalities/majorFunctionalities"
import { motion, useAnimationControls } from "motion/react"


const Sports = () => {

  const category = 'sport_and_leisure'

  const dispatch = useDispatch()

  const asyncDispatch = useDispatch<AppDispatch>()

  const quizQuestion = useSelector((state: RootState) => state.majorFunctions.quizData.fullQuestion)

  const allAnswers = useSelector((state: RootState) => state.majorFunctions.storedData?.allAnswers)

  const selectedAnswer = useSelector((state: RootState) => state.majorFunctions.storedData?.storedChosenAnswer[0])

  const totalPoints = useSelector((state: RootState) => state.majorFunctions.sportsPoints)

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

    if(currentLocation === '/sports'){

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

  // i want to change the points color very briefly when a make or lose a point, if i make a point the color is blue if i lose a point the color should be red and then it goes backs to normal color, and this should happen when i use the button confirm


  return (
    <>
    <div className="flex justify-center min-h-svh bg-slate-900">
      <div className="w-full lg:max-w-[50%] shadow-2xl shadow-black flex flex-col justify-between">

        <header className="h-28 flex justify-between text-xl font-medium px-12 py-5 bg-[#04BF55]">
        <Link to="/" className="grid place-content-center rounded-xl min-w-[80px] bg-[#F2A74B]" >
          Home
        </Link>

          {remainingTime && remainingTime <= 10 ? <p className="grid place-content-center rounded-xl min-w-[70px] bg-[#F2A74B] text-red-600">{remainingTime}</p> : <p className="grid place-content-center rounded-xl min-w-[80px] bg-[#F2A74B]">{remainingTime}</p>}

          <motion.p className="grid place-content-center rounded-xl min-w-[80px] bg-[#F2A74B]"
          variants={{
            initial: {
              scale: 1,
              color: "#000000",
            },
            changeColor: {
              scale: 1.1,
              color: `${selectedAnswer !== quizQuestion?.correctAnswer || remainingTime === 0 ? "#FF0000" : "#00C87F"}`,
            }
          }}
          initial="initial"
          animate={controls}>{totalPoints}</motion.p>
        </header>

        <main className="flex-grow px-10 flex flex-col items-center py-10 gap-y-5 bg-[#91D996] font-medium">

          <div className="w-full max-w-[75%] p-5 rounded-xl bg-[#F2A74B] shadow-lg flex justify-center wordSpacing">
            <p className="text-2xl text-center">{quizQuestion ? quizQuestion.question.text : 'loading'}</p>
          </div>

        {quizQuestion && allAnswers ? allAnswers!.map((answer, index) => {

          return (<div key={index} className="w-full max-w-[75%] rounded-xl p-5 bg-[#F2A74B] shadow-lg flex fle-col gap-x-3 items-center">

            <div className="w-6">
            <input type="checkbox" className="w-5 h-5 hover:cursor-pointer" value={answer} checked={selectedAnswer === answer} onChange={() => {

              dispatch(handlingAnswersChoice(answer))
            }}/>
            </div>
            <label className="text-2xl">{answer}</label>

            </div>)
        }) : <p className="text-4xl mt-36 font-bold">'Loading'</p>}

        </main>
        

        <footer className="h-20 flex justify-center bg-[#04BF55] py-2">
          <button className=" hover:cursor-pointer text-2xl font-medium rounded-lg p-5 grid place-content-center bg-[#F2A74B]" onClick={() => {
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
    </>
  )
}

export default Sports