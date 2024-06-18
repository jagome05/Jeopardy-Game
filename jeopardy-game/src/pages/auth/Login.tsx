import { Link } from "react-router-dom";

export default function Login() {

  return (
    <>
      <div>

        <div>

          <h1>Login</h1>

          <input />

          <input />

          <button >
            Login
          </button>

          <div>

            New to the site?{" "}
            <Link to="/register">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}