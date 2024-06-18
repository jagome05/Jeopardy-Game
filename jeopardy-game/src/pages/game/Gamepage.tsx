import { Link } from "react-router-dom";


export default function Gamepage() {

  //todo update diff pages

  return (
    <>
      <div className="flex flex-col gap-10 bg-red-400 p-10 text-center">

        <div className="bg-yellow-200">
          <h1>Create custom Game!</h1>
          <button>Start!</button>
        </div>

        <div className="bg-green-200">
          <h1>Play a random game!</h1>
          <Link to="/random">Start!</Link>
        </div>

        <div className="bg-purple-200">
          <h1>Search for games and templates</h1>
          <button>Start!</button>
        </div>

        <div className="bg-sky-500">
          <h1>List of categories and questions!</h1>
          <button>Start!</button>
        </div>
      </div>

    </>
  )
}