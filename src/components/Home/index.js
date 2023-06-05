import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => {
  const token = Cookies.get('jwt_token')
  if (token === undefined) {
    return <Redirect to="/ebank/login" />
  }
  return (
    <>
      <Header />
      <div className="home">
        <h1 className="head">Your Flexibility, Our Excellence</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
          className="digital-img"
        />
      </div>
    </>
  )
}

export default Home
