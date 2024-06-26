import { useState, useEffect } from "react"

export default function Final({ one, setOne, two, setTwo }) {

  let [winner, setWinner] = useState("you")
  let [report, setReport] = useState(0)

  let answer = "English"

  //* handles modals
  let [modal, setModal] = useState(false)

  //*this sets players bets
  let [betOne, setBetOne] = useState(0)
  let [betTwo, setBetTwo] = useState(0)

  //*text to handle greater than bets
  let [errorOne, setErrorOne] = useState(false)
  let [errorTwo, setErrorTwo] = useState(false)

  //* function to handle player bets and answers
  function setState(e, set, setErr) {
    set(e.target.value)
    setErr(false)
  }

  //*sets players answers
  let [oneAnswer, setOneAnswer] = useState("")
  let [twoAnswer, setTwoAnswer] = useState("")

  //*handles bet buttons
  function handleBet(bet, current, setErr) {
    if (bet > current) {
      setErr(true)
    }
    setReport(report + 1)
  }

  //*handles calculations and answers
  function handleWinner(input, bet, score, setScore) {
    setModal(true)
    if (answer.toLowerCase() === input.toLowerCase()) {
      let final = Number(score) + Number(bet)
      setScore(final)
    } else {
      let final = Number(score) - Number(bet)
      setScore(final)
    }
  }

  useEffect(() => console.log(betOne, oneAnswer, betTwo, twoAnswer), [report])

  return (
    <>
      <div className="p-5 bg-slate-300 flex flex-col gap-10 justify-center items-stretch border-solid border-black border-2">

        <h1 className="text-5xl font-extrabold text-purple-800 text-center">Final Jeopardy</h1>

        <h3 className="text-3xl font-extrabold text-center">Final Question:</h3>

        <div className="bg-white border-black border-solid border-2 p-5 text-center">
          <p className="text-3xl font-extrabold">It is the 2nd most spoken language in the world</p>
        </div>

        <div className="flex gap-20 justify-evenly p-5">

          <div className="bg-yellow-300 flex flex-col gap-5 border-black border-2 border-solid rounded-xl p-5">
            <h1 className="text-2xl font-bold">Player One</h1>
            <input className="p-2 rounded-lg" onChange={(e) => setState(e, setBetOne, setErrorOne)} placeholder="Points Bet"></input>
            {errorOne && (<h1>Cannot bet more points than your current score!</h1>)}
            <input className="p-2 rounded-lg" onChange={(e) => setState(e, setOneAnswer, setErrorOne)} placeholder="Final Answer"></input>

            <button className="bg-slate-300 rounded-md border-black border-solid border-2 text-4xl font-extrabold" onClick={() => handleBet(betOne, one, setErrorOne)}>BET</button>
          </div>

          <div className="bg-purple-300 flex flex-col gap-5 border-black border-2 border-solid rounded-xl p-5">
            <h1 className="text-2xl font-bold">Player two</h1>
            <input className="p-2 rounded-lg" onChange={(e) => setState(e, setBetTwo, setErrorTwo)} placeholder="Points Bet"></input>
            {errorTwo && (<h1>Cannot bet more points than your current score!</h1>)}
            <input className="p-2 rounded-lg" onChange={(e) => setState(e, setTwoAnswer, setErrorTwo)} placeholder="Final Answer"></input>

            <button className="bg-slate-300 rounded-md border-black border-solid border-2 text-4xl font-extrabold" onClick={() => handleBet(betTwo, two, setErrorTwo)}>BET</button>
          </div>
        </div>

        <div className="self-center">

          <button
            className="bg-white rounded-md border-black border-solid border-2 text-4xl font-extrabold p-5"
            onClick={() => {
              handleWinner(oneAnswer, betOne, one, setOne)
              handleWinner(twoAnswer, betTwo, two, setTwo)
              setModal(true)
              if(one > two) {
                setWinner("Team 1")
              } else {
                setWinner("Team 2")
              }
            }}
          >Calculate Scores!</button>
        </div>

      </div>

      {modal && <WinnerCard one={one} two={two} winn={winner} setModal={setModal} />}
    </>
  )
}

function WinnerCard({ one, two, winn, setModal }) {

  return (
    <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm bg-black flex justify-center items-center">

      <div className="relative flex flex-col justify-center items-stretch gap-20 bg-yellow-300 p-16 border-black border-solid border-4 rounded-md w-1/2 h-auto">

        <button className="text-2xl absolute top-0 right-2 p-2 m-2" onClick={() => setModal(false)}>X</button>

        <div className="text-center">
          <h1 className="text-5xl font-extrabold">Winner: {winn}!</h1>
        </div>

        <div className="text-center">
          <h1 className="text-2xl font-extrabold">Final scores:</h1>
        </div>

        <div className="flex justify-evenly">

          <div className="flex gap-2">
            <h1 className="bg-red-300 border-black border-2 border-solid text-2xl p-2">Team 1 score: {one}</h1>
          </div>

          <div className="flex gap-2">
            <h1 className="bg-blue-300 border-black border-2 border-solid text-2xl p-2">Team 2 score: {two}</h1>
          </div>

        </div>
      </div>

    </div>
  )
}