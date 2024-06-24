import { useState } from "react"

export default function Final() {

  //todo handle points submission
  //todo make sure points dont go over max scores

  return (
    <>
      <div className="p-5 bg-slate-300 flex flex-col gap-10 justify-center items-center">

        <h1 className="text-5xl font-extrabold">Final Jeopardy</h1>

        <h3 className="text-3xl font-extrabold">Final Question:</h3>

        <div className="">
          <p className="text-xl font-extrabold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde mollitia suscipit porro commodi minima quas tempora iste. Id, modi numquam beatae, dolores, quaerat eos nulla recusandae eius repellendus maxime cupiditate tenetur ipsa consequuntur? Nam, maiores. Consectetur maiores veniam quasi dolores delectus, ipsam totam voluptatibus laudantium accusantium natus vitae sit, esse dolorum voluptatum similique nemo ex sint animi quidem eligendi cumque architecto rem. Omnis debitis corrupti eaque iste nobis, quos dolorem quas consequatur aspernatur nulla praesentium sit molestiae labore officia, quia ducimus saepe vitae commodi! Beatae, aperiam velit? Amet quidem deleniti qui a numquam dolorem, ducimus enim minus, nobis debitis pariatur!</p>
        </div>

        <div className="flex gap-20">

          <div className="flex flex-col gap-5">
            <h1 className="text-2xl font-bold">Player One</h1>
            <input className="p-2 rounded-lg" placeholder="Points Bet"></input>
            <input className="p-2 rounded-lg" placeholder="Final Answer"></input>

            <button className="bg-slate-300 rounded-md border-black border-solid border-2 text-4xl font-extrabold">BET</button>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="text-2xl font-bold">Player two</h1>
            <input className="p-2 rounded-lg" placeholder="Points Bet"></input>
            <input className="p-2 rounded-lg" placeholder="Final Answer"></input>

            <button className="bg-slate-300 rounded-md border-black border-solid border-2 text-4xl font-extrabold">BET</button>
          </div>

        </div>


      </div>
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
        
        
        <div>
          <button id="understand">Ok!</button>
        </div>
        
    </div>
  </dialog>

    <h1>Final Jeopardy</h1>

    <nav>
      <a class="navitem" href="index.html">Home</a>
      <a class="navitem" href="round-1.html">Round 1</a>
      <a class="navitem" href="round-2.html">Round 2</a>
      <a class="navitem" href="final-jeopardy.html">Final Jeopardy</a>
    </nav>

    <h2>Player Turn</h2>

    <h3 class="finalcat">Final Category</h3>

    <p class="finalq">
      Final question
    </p>

    <div class="Fin">
      <input class="PB" placeholder="Points Bet"></input>
      <input class="FA" placeholder="Final Answer"></input>

      <section class="Last">BET</section>
    </div> 
*/