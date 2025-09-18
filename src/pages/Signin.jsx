import { useNavigate } from "react-router-dom"
import "./pages.css"
import { useState } from "react"

function Signin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  return (
    <div className="sign-in">
      <h1 className="signin-header">Signin to your PopX account</h1>
      <p className="signin-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      <form className="signin-form">
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" value={email} placeholder="Enter email address" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="pass">Password</label>
          <input type="password" id="pass" value={password} placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={() => navigate("/setting")} disabled={!(email && password)}>Login</button>
      </form>
    </div>
  )
}

export default Signin