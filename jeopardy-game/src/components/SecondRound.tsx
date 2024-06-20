import { useEffect, useState } from "react"

export default function SecondRound({ board }) {

  let secondSet = board.slice(30, 60)

  //* this will set active question for dialog box
  let [activeQ, setActiveQ] = useState({})

  //todo if in usedArr then it will be marked out
  let usedArr = []

  const [modal, setModal] = useState(false);

  //todo function for onclick
  function handleClick(key, e) {
    setActiveQ(secondSet[key])
    console.log(e.target.innerText)
    setModal(true)
  }

  useEffect(() => console.log(activeQ), [activeQ])

  //todo work on function to open modal for each question?
  function Box() {

    return (
      <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm bg-black flex justify-center items-center">

        <div className="relative flex flex-col gap-20 bg-purple-700 p-16 border-black border-solid border-4 rounded-md w-1/2 h-auto">
          <button className="text-2xl absolute top-0 right-2 p-2 m-2" onClick={() => setModal(false)}>X</button>
          <h1 className="text-2xl">{activeQ.question}</h1>
          <input className="border-black border-solid border-2 p-2" placeholder="Type Answer"></input>
          <div className="flex gap-10">
            <button className="bg-slate-300 p-3 rounded-md border-black border-solid border-2">Submit answer</button>
            <button onClick={() => setModal(false)} className="bg-slate-300 p-3 rounded-md border-black border-solid border-2">Cancel</button>
          </div>
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
      <div className="bg-green-700 relative">

        <div className="m-10 p-5 bg-red-700 text-center">
          <h1>Round 2</h1>
        </div>

        <div className="grid grid-cols-6 grid-rows-5 grid-flow-col gap-10 bg-sky-800 p-6">
          {secondSet.map((item, index) => (
            <button onClick={(e) => handleClick(index, e)} key={index} className="bg-slate-200 border-black border-solid border-2 h-20">
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

//OG code ref
/*
    <dialog id="opener">
      <div id="instructionsBox">

        
        <div id="instructions">
          <p id="instructionsText"></p>
        </div>
        
        <div id="rwBox">
          <p id="rightOrWrong"></p>
        </div>
        
        <div>
          <button id="understand">Ok!</button>
        </div>
        
    </div>
  </dialog>

    <h1>Second Round</h1>

    <nav>
      <a class="navitem" href="index.html">Home</a>
      <a class="navitem" href="round-1.html">Round 1</a>
      <a class="navitem" href="round-2.html">Round 2</a>
      <a class="navitem" href="final-jeopardy.html">Final Jeopardy</a>
    </nav>

    <!-- ! update player tyurns -->
    <div id="playerTurnBar">
    <h2 id="greyPlayerOne"><span id="chooseNameOne">Player One</span>: <span id="R2playerOneScore">0</span></h2>
    <h2 id="greyPlayerTwo"><span id="chooseNameTwo">Player Two</span>: <span id="R2playerTwoScore">0</span></h2>
    </div>

<!-- categories for jeopardy this contains one grid -->
    <div class="wrapper">

<!-- todo should i update the class:category in the p or div? todo must also think about animations-->
  
      <div class="box">
  
        <h3><p class="rock">Alt Rock</p></h3>
  
        <button class="round2Q"><p>200</p></button>
        <button class="round2Q"><p>400</p></button>
        <button class="round2Q"><p>600</p></button>
        <button class="round2Q"><p>800</p></button>
        <button class="round2Q"><p>1000</p></button>
  
      </div>
    
      <div class="box">
  
        <h3><p class="musical">Musicals</p></h3>
  
        <button class="round2Q"><p>200</p></button>
        <button class="round2Q"><p>400</p></button>
        <button class="round2Q"><p>600</p></button>
        <button class="round2Q"><p>800</p></button>
        <button class="round2Q"><p>1000</p></button>
  
      </div>
  
      <div class="box">
  
        <h3><p class="edm">EDM</p></h3>
  
        <button class="round2Q"><p>200</p></button>
        <button class="round2Q"><p>400</p></button>
        <button class="round2Q"><p>600</p></button>
        <button class="round2Q"><p>800</p></button>
        <button class="round2Q"><p>1000</p></button>
  
      </div>
      <div class="box">
  
        <h3><p class="pop">POP</p></h3>
  
        <button class="round2Q"><p>200</p></button>
        <button class="round2Q"><p>400</p></button>
        <button class="round2Q"><p>600</p></button>
        <button class="round2Q"><p>800</p></button>
        <button class="round2Q"><p>1000</p></button>
  
      </div>
      <div class="box">
  
        <h3><p class="kpop">KPOP</p></h3>
  
        <button class="round2Q"><p>200</p></button>
        <button class="round2Q"><p>400</p></button>
        <button class="round2Q"><p>600</p></button>
        <button class="round2Q"><p>800</p></button>
        <button class="round2Q"><p>1000</p></button>
  
      </div>
      <div class="box">
  
        <h3><p class="rap">Rap R&B</p></h3>
  
        <button class="round2Q"><p>200</p></button>
        <button class="round2Q"><p>400</p></button>
        <button class="round2Q"><p>600</p></button>
        <button class="round2Q"><p>800</p></button>
        <button class="round2Q"><p>1000</p></button>
  
      </div>

    </div>

    <div id="container">
     <h2 class="Back"><a href="round-1.html">Back</a></h2>
     <h2 class="Next"><a href="final-jeopardy.html">Final</a></h2>
    </div>


    <!-- * This is updated and opens modal/dialog box for Q&A -->
    
    <dialog id="dialog">
        <div id="popBox">
          
          <h1 id="scoreBox">For <span id="scoreScore"></span></h1>
          
          <div id="questionBox">
            <p id="pElement"></p>
          </div>
          
          <div id="input">
            <input type="text" id="inputValue" placeholder="Answer">
          </div>
          
          <div id="guessButt">
            <button id="guess">Guess</button>
          </div>
          
          <div id="passButt">
            <button id="pass">Pass</button>
          </div>
          
      </div>
    </dialog>
*/