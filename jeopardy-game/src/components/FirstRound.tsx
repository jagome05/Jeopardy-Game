import { useEffect, useState } from "react"

export default function FirstRound({ board }) {

  let firstSet = board.slice(0, 30)

  //* this will set active question for dialog box
  let [activeQ, setActiveQ] = useState({})
  let [answer, setAnswer] = useState('')

  //todo if in usedArr then style will be different
  let usedArr = []
  let usedStyle = 'bg-slate-200 border-black border-solid border-2 h-20 line-through'
  let activeStyle = 'bg-slate-200 border-black border-solid border-2 h-20'

  const [modal, setModal] = useState(false);

  //todo function for onclick
  function handleClick(key, e) {
    setActiveQ(firstSet[key])
    console.log(e.target.innerText)
    setModal(true)
  }

    //todo will possibly have to update it out of parent componenet
  function handleOnChange(e) {
    setAnswer(e.target.value)
  }

  useEffect(() => console.log(activeQ), [activeQ])

  //* modal that opens up for each questions
  function Box() {
    return (
      <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm bg-black flex justify-center items-center">

        <div className="relative flex flex-col gap-20 bg-yellow-300 p-16 border-black border-solid border-4 rounded-md w-1/2 h-auto">
          <button className="text-2xl absolute top-0 right-2 p-2 m-2" onClick={() => setModal(false)}>X</button>
          
          <h1 className="text-2xl">{activeQ.question}</h1>
         
          <input className="border-black border-solid border-2 p-2" placeholder="Type Answer" type="text" value={answer} onChange={e => handleOnChange(e)} />
          
          <div className="flex gap-10">
            <button className="bg-slate-300 p-3 rounded-md border-black border-solid border-2">Submit answer</button>
            <button onClick={() => setModal(false)} className="bg-slate-300 p-3 rounded-md border-black border-solid border-2">Cancel</button>
          </div>

          {/* //todo delete after testing lol */}
          <h1>answer is {activeQ.answer}</h1>
        </div>
      </div>
    )
  }

  function Points({ value, object }) {
    switch (value) {
      case 0:
      case 5:
      case 10:
      case 15:
      case 20:
      case 25:
        return (
          100
        );
      case 1:
      case 6:
      case 11:
      case 16:
      case 21:
      case 26:
        return (
          200
        );
      case 2:
      case 7:
      case 12:
      case 17:
      case 22:
      case 27:
        return (
          300
        );
      case 3:
      case 8:
      case 13:
      case 18:
      case 23:
      case 28:
        return (
          400
        );
      case 4:
      case 9:
      case 14:
      case 19:
      case 24:
      case 29:
        return (
          500
        );
      default:
        return (
          <h1>{object.answer}</h1>
        )
    }
  }


  return (
    <>
      <div className="bg-pink-300 relative">

        <div className="m-10 p-5 bg-blue-400 text-center">
          <h1>Round 1</h1>
        </div>

        <div className="grid grid-cols-6 grid-rows-5 grid-flow-col gap-10 bg-green-400 p-6">
          {firstSet.map((item, index) => (
            <button onClick={(e) => handleClick(index, e)} key={index} className={usedArr.includes(index) ? usedStyle : activeStyle}>
              {<Points value={index} object={item} />}
            </button>
          )
          )}
        </div>

      </div>

      {/* //todo modal */}
      {modal ? <Box /> : null}
    </>
  )
}
