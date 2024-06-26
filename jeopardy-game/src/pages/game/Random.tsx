import { useEffect, useState } from "react"
import useGameState from "../../components/useGameState"
import Homepage from "../Homepage"
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

  //* toggles players turns
  let [turn, setTurn] = useState(false)

  let [playerOneScore, setPlayerOneScore] = useState(0)
  let [playerTwoScore, setPlayerTwoScore] = useState(0)

  let { currentStepIndex, steps, step, next, back, isFirstStep, isLastStep } = useGameState([<Homepage/> , 
  <FirstRound board={questions} turn={turn} setTurn={setTurn} oneScore={playerOneScore} twoScore={playerTwoScore} setOneScore={setPlayerOneScore} setTwoScore={setPlayerTwoScore}/>, 
  <SecondRound board={questions} turn={turn} setTurn={setTurn} oneScore={playerOneScore} twoScore={playerTwoScore} setOneScore={setPlayerOneScore} setTwoScore={setPlayerTwoScore}/>, 
  <Final one={playerOneScore} setOne={setPlayerOneScore} two={playerTwoScore} setTwo={setPlayerTwoScore}/>])

  return (
    <>
      <div className="p-5 flex flex-col gap-5 bg-blue-900">

        <div className="self-center p-5 bg-white border-black border-solid border-2">
          <h1 className="text-7xl font-extrabold">Jeopardy!</h1>

          {/* //* for testing */}
          {/* <h1>Current page: {currentStepIndex + 1} / {steps.length}</h1> */}
        </div>

        {/* <h1>Game Start!</h1>

        <button>Grab random Questions!</button> */}

        <div className="flex justify-evenly">

          {/* //todo edit so text boxdoesnt move */}
          <div className="flex gap-2">
          {!turn && <h2 className="text-2xl font-bold p-2 text-white">Current: </h2>}<h1 className="bg-red-300 border-black border-2 border-solid text-2xl p-2">Team 1 score: {playerOneScore}</h1>
          </div>

          <div className="flex gap-2">
          {turn && <h2 className="text-2xl font-bold p-2 text-white">Current: </h2>}<h1 className="bg-blue-300 border-black border-2 border-solid text-2xl p-2">Team 2 score: {playerTwoScore}</h1>
          </div>
        </div>

        <div>
          {step}
        </div>

        <div className="self-center flex gap-10 p-5">
          {!isFirstStep && (
            <button className="bg-slate-300 p-3 rounded-md border-black border-solid border-2" type="button" onClick={back}>Back</button>
          )}
          {!isLastStep && <button className="bg-slate-300 p-3 rounded-md border-black border-solid border-2" type="button" onClick={next}>{!isFirstStep ? "Next" : "Play"}</button>}
          {/* <button className="bg-slate-300 p-3 rounded-md border-black border-solid border-2" type="button" onClick={() => setTurn(!turn)}>Toggle Player Turn</button> */}
        </div>

      </div>
    </>
  )
}