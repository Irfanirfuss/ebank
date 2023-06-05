import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {userId: '', password: '', errorMsg: '', errorShown: false}

  onChangeUserId = event => {
    this.setState({userId: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorShown: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {userId, password} = this.state
    console.log(userId, password)
    const userDetails = {userId, password}
    const url = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {userId, password, errorMsg, errorShown} = this.state

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-container">
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
            className="login-img"
          />
        </div>
        <form className="form-control" onSubmit={this.submitForm}>
          <h1>Welcome Back!</h1>
          <label htmlFor="userId">User ID</label>

          <input
            type="text"
            id="userId"
            placeholder="Enter User ID"
            value={userId}
            onChange={this.onChangeUserId}
            className="input-form"
          />
          <br />

          <label htmlFor="pin">PIN</label>

          <input
            type="password"
            id="pin"
            placeholder="Enter PIn"
            value={password}
            onChange={this.onChangePassword}
            className="input-form"
          />
          <br />

          <button type="submit">Login</button>
          {errorShown ? <p className="error">{errorMsg}</p> : ''}
        </form>
      </div>
    )
  }
}

export default Login
