import "./pages.css"
import { useNavigate } from "react-router-dom"

function Landing() {
  const navigate = useNavigate()

  return (
    <div className="landing">
      <h1 className="landing-header">Welcome to PopX</h1>
      <p className="landing-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      <div className="landing-action-btns">
        <button onClick={() => navigate("/create")}>Create Account</button>
        <button onClick={() => navigate("/sign-in")}>Already Registered? Login</button>
      </div>
    </div >
  )
}

export default Landing