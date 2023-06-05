import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props

    history.replace('/ebank/login')
  }

  return (
    <nav className="nav">
      <img
        src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
        alt="website logo"
      />
      <button type="button" className="log-out" onClick={onClickLogout}>
        Logout
      </button>
    </nav>
  )
}
export default Header
