import { Link } from "react-router-dom";

export default function Register() {

  return (
    <>
      <div>

        <div>

          <h3>Register</h3>
          {/* {registrationSuccess && (
            <p className="success-message">Registration Successful!</p>
          )} */}

          <form>

            <input/>

            <input/>

            <button type="submit">
              Register
            </button>
          </form>

          <div>
            Already have an account? <Link to="/user">Login</Link>
          </div>

        </div>
      </div>
    </>
  )
}