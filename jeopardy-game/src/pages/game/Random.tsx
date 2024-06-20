import { useEffect, useState } from "react"
import useGameState from "../../components/useGameState"
import FirstRound from "../../components/FirstRound"
import SecondRound from "../../components/SecondRound"
import Final from "../../components/Final"
import placeholderQuestions from "../../../placeholder-questions"

export default function Random() {

  //let [find, setFind] = useState(false)
  
  //* these are the placeholderquestions as an ARRAY of ONJECTS
  let [questions, setQuestions] = useState(placeholderQuestions)
  // console.log(questions)

  // ! fix with backend??
  // https://stackoverflow.com/questions/61899340/receiving-a-cors-error-when-to-my-react-app-using-fetch-function
  // useEffect(()=> {
  //   const update = async () => {
  //     try {
  //       let res = await fetch('http://localhost:4000/api/allQuestions');
  //       let data = await res.json()
  //      // let results = JSON.s
  //       console.log(data)
  //     } catch(err) {
  //       console.log(err)
  //     }
  //   }
  //   update();
  // }, [])
  let playerOneScore = 0
  let playerTwoScore = 0

  let { currentStepIndex, steps, step, next, back, isFirstStep } = useGameState([<FirstRound board={questions} />, <SecondRound board={questions} />, <Final />])

  return (
    <>
      <div className="m-5 p-5 flex flex-col gap-5">

        <div>
          <h1>Current page: {currentStepIndex + 1} / {steps.length}</h1>
        </div>

        <h1>Game Start!</h1>

        <button>Grab random Questions!</button>

        <div className="flex justify-evenly">
          <h1 className="bg-red-300 border-black border-2 border-solid text-2xl p-2">Team 1 score: {playerOneScore}</h1>
          <h1 className="bg-blue-300 border-black border-2 border-solid text-2xl p-2">Team 2 score: {playerTwoScore}</h1>
        </div>

        <div>
          {step}
        </div>

        <div className="flex gap-10 p-5">
          {!isFirstStep && (
            <button type="button" onClick={back}>Back</button>
          )}
          <button type="button" onClick={next}>Next</button>
        </div>

      </div>
    </>
  )
}