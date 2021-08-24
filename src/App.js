
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Auth/login'
import Register from './pages/Auth/register'
import Home from './pages/LandingPage/landing_page'

function App() {
  return (
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
  </Switch>
  </BrowserRouter>
  );
}

export default App;
