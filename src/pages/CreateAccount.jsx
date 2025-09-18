import { useState } from "react"
import "./pages.css"
import { useNavigate } from "react-router-dom"

function CreateAccount() {
  const [fullName, setFullName] = useState('Marry Doe')
  const [phone, setPhone] = useState('Marry Doe')
  const [email, setEmail] = useState('Marry Doe')
  const [pass, setPass] = useState('Marry Doe')
  const [comp, setComp] = useState('Marry Doe')
  const [agency, setAgency] = useState("")

  const navigate = useNavigate()

  return (
    <div className='create'>
      <div>
        <h1 className="create-header">Create your PopX Account</h1>
        <form className="create-form">
          <div>
            <label htmlFor="fullName">Full Name<span>*</span></label>
            <input type="text" value={fullName} id='fullName' placeholder='Enter full name' onChange={(e) => setFullName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="phone">Phone Number<span>*</span></label>
            <input type="text" value={phone} id='phone' placeholder='Enter phone number' onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div>
            <label htmlFor="createEmail">Email address<span>*</span></label>
            <input type="text" value={email} id='createEmail' placeholder='Enter email address' onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="createPass">Password<span>*</span></label>
            <input type="text" value={pass} id='createPass' placeholder='Enter password' onChange={(e) => setPass(e.target.value)} />
          </div>
          <div>
            <label htmlFor="company">Company name</label>
            <input type="text" value={comp} id='company' placeholder='Enter company name' onChange={(e) => setComp(e.target.value)}/>
          </div>
          <div className="agency-option">
            <legend>Are you an Agency?<span>*</span></legend>
            <div className="agency-option-block" onChange={(e) => setAgency(e.target.value)}>
              <div>
                <input type="radio" id="yes" name="agencyOption" value="no" />
                <label for="yes">Yes</label>
              </div>
              <div>
                <input type="radio" id="no" name="agencyOption" value="no" />
                <label for="no">No</label>
              </div>
            </div>
          </div>
        </form>
      </div>
      <button onClick={() => navigate("/setting")} disabled={!(fullName && phone && email && pass && agency)}>Create Account</button>
    </div>
  )
}

export default CreateAccount