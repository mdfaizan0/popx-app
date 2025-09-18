import './pages.css'
import icon from '../assets/icon.png'

function ACSetting() {
  return (
    <div className='setting'>
      <p>Account Settings</p>
      <div className="setting-block">
        <div className="setting-profile">
          <div className="setting-profile-img">
            <img src={icon} alt="icon" />
            <span>
              <img src="https://img.icons8.com/?size=100&id=85103&format=png&color=FFFFFF" alt="cam-icon" />
            </span>
          </div>
          <div className="setting-profile-info">
            <p>Marry Doe</p>
            <p>Marry@Gmail.Com</p>
          </div>
        </div>
        <p className="setting-para">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
        <div className="setting-line">
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default ACSetting