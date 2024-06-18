import { NavLink } from "react-router-dom";


export default function Header() {

  return(
    <>
      <header className="flex bg-gray-200 p-5 gap-5">

        <div className="bg-pink-300">
          <h1>Jeopardy!</h1>
        </div>

        {/* nav items */}
        <div className="self-end flex justify-end gap-5 bg-purple-200">

          <NavLink to="/">Home</NavLink>
          <NavLink to="/instructions">Instructions</NavLink>
          <NavLink to="/game">Play a game!</NavLink>
          <NavLink to="/user">Login/Register</NavLink>

        </div>
      </header>
    </>
  )
}