import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <div className="app">
    <>
      <Switch>
        <Route exact path="/ebank/login" component={Login} />
        <ProtectedRoute exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </>
  </div>
)

export default App
