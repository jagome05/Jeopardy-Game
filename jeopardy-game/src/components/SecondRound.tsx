import { useEffect, useState } from "react"

let usedArr = []

export default function SecondRound({ board, oneScore, twoScore, setOneScore, setTwoScore, turn, setTurn }) {

  let secondSet = board.slice(30, 60)

  //* this will set active question for dialog box
  let [activeQ, setActiveQ] = useState({})
  let [answer, setAnswer] = useState('')
  let [score, setScore] = useState([])
  let [truth, setTruth] = useState(false)

  //todo if in usedArr then style will be different
  let usedStyle = 'bg-slate-200 border-black border-solid border-2 h-20 line-through'
  let activeStyle = 'bg-slate-200 border-black border-solid border-2 h-20'

  const [modal, setModal] = useState(false);

  //todo function for onclick
  function handleClick(key, e) {
    setActiveQ(secondSet[key])
    setScore([e.target.innerText, key])
    setModal(true)
  }

  //todo update to allow lower case answer
  function handleOnChange(e) {
    setAnswer(e.target.value)
    setTruth(false)
  }

  useEffect(() => console.log(activeQ), [activeQ])

  function Points({ value, object }) {
    switch (value) {
      case 0:
      case 5:
      case 10:
      case 15:
      case 20:
      case 25:
        return (
          200
        );
      case 1:
      case 6:
      case 11:
      case 16:
      case 21:
      case 26:
        return (
          400
        );
      case 2:
      case 7:
      case 12:
      case 17:
      case 22:
      case 27:
        return (
          600
        );
      case 3:
      case 8:
      case 13:
      case 18:
      case 23:
      case 28:
        return (
          800
        );
      case 4:
      case 9:
      case 14:
      case 19:
      case 24:
      case 29:
        return (
          1000
        );
      default:
        return (
          <h1>{object.answer}</h1>
        )
    }
  }

  return (
    <>
      <div className="bg-red-500 relative">

        <div className="m-10 p-5 bg-sky-700 text-center">
          <h1 className="text-5xl">Round 2</h1>
        </div>

        <div className="grid grid-cols-6 grid-rows-5 grid-flow-col gap-10 bg-lime-800 p-6">
          {secondSet.map((item, index) => (
            <button onClick={(e) => handleClick(index, e)} key={index} className={usedArr.includes(index) ? usedStyle : activeStyle}>
              {<Points value={index} object={item} />}
            </button>
          )
          )}
        </div>

      </div>

      {/* //todo modal */}
      {modal ? <Box truth={truth} setTruth={setTruth} setModal={setModal} turn={turn} setTurn={setTurn} activeQ={activeQ} setValue={setScore} handleOnChange={handleOnChange} setAnswer={setAnswer} answer={answer} value={score} playerOne={oneScore} playerTwo={twoScore} setOneScore={setOneScore} setTwoScore={setTwoScore} /> : null}
    </>
  )
}

//* modal that opens up for each questions
function Box({ setModal, activeQ, handleOnChange, turn, setTurn, answer, setOneScore, setTwoScore, setAnswer, setValue, value, truth, setTruth, playerOne, playerTwo }) {

  let [nextQuestion, setNextQuestion] = useState(false)
  let num = Number(value[0])

  function updateScore() {
    if(!turn) {
      setOneScore(playerOne += num)
      setTurn(!turn)
    } else {
      setTwoScore(playerTwo += num)
      setTurn(!turn)
    }
  }
  
  function handleSubmit() {
    setTruth(true)
    if(activeQ.answer == answer) {
      updateScore()
      setNextQuestion(true)
      usedArr.push(value[1])
    }
  }

  function CheckAnswer() {
    console.log(value)
    if (activeQ.answer == answer) {
      console.log("Correct!")
      return (
        <h1 className="text-green-500">Correct!</h1>
      )
    } else if (activeQ.answer != answer) {
      console.log("incorrect!")
      return (
        <h1 className="text-red-500">Incorrect!</h1>
      )
    } else {
      console.log("Null")
      return (
        <h1>Please input a response!</h1>
      )
    }
  }

  function handleCancel() {
    setModal(false)
    setValue(0)
    setTruth(false)
    setAnswer("")
  }

  return (
    <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm bg-black flex justify-center items-center">

      <div className="relative flex flex-col gap-20 bg-yellow-300 p-16 border-black border-solid border-4 rounded-md w-1/2 h-auto">
        <button className="text-2xl absolute top-0 right-2 p-2 m-2" onClick={handleCancel}>X</button>

        <h1 className="text-2xl">{activeQ.question}</h1>

        <input className="border-black border-solid border-2 p-2" placeholder="Type Answer" type="text" value={answer} onChange={e => handleOnChange(e)} />

        <div className="flex gap-10">
          <button onClick={handleSubmit} className="bg-slate-300 p-3 rounded-md border-black border-solid border-2">Submit answer</button>
          {nextQuestion ? 
          <button onClick={handleCancel} className="bg-slate-300 p-3 rounded-md border-black border-solid border-2">Next!</button> : 
          <button onClick={handleCancel} className="bg-slate-300 p-3 rounded-md border-black border-solid border-2">Cancel</button>}
        </div>

        {truth && <CheckAnswer />}

        {/* //todo delete after testing lol */}
        <h1>answer is {activeQ.answer}</h1>
      </div>
    </div>
  )
}
