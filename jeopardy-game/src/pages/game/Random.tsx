import { useEffect, useState } from "react"
import useGameState from "../../components/useGameState"
import FirstRound from "../../components/FirstRound"
import SecondRound from "../../components/SecondRound"
import Final from "../../components/Final"

export default function Random() {

  const { currentStepIndex, steps, step, next, back, isFirstStep } = useGameState([<div>One</div>, <div>Two</div>, <FirstRound />, <SecondRound />, <Final />])
  //let [questions, setQuestions] = useState([])
  //let [find, setFind] = useState(false)

  // ! fix with backend
  // https://stackoverflow.com/questions/61899340/receiving-a-cors-error-when-to-my-react-app-using-fetch-function
  useEffect(()=> {
    const update = async () => {
      try {
        let res = await fetch('Localhost:4000/api/allQuestions', {
          method: 'GET', 
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify()
        });
        let results = await res.json();
        // console.log(data)
      } catch(err) {
        console.log(err)
      }
    }
    update();
  }, [])

  return (
    <>
      <div className="m-5 p-5 flex flex-col gap-5">

        <div>
          <h1>Current page: {currentStepIndex + 1} / {steps.length}</h1>
        </div>

        <h1>Game Start!</h1>

        <button>Grab random Questions!</button>

        <div>
          {step}
        </div>

        <div className="flex justify-evenly">
          <h1>Team 1 score:</h1>
          <h1>Team 2 score:</h1>
        </div>

        <div className="flex gap-10">
          {!isFirstStep && (
            <button type="button" onClick={back}>Back</button>
          )}
          <button type="button" onClick={next}>Next</button>
        </div>

      </div>
    </>
  )
}