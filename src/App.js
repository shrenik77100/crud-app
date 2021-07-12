import './App.css';
import HomePage from './components/home/home';
import LoginPage from './components/login/login';
import SignupPage from './components/signup/signup';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <div>
      <div className="row bg-primary">
        <div className="col">
          <a href="home">
            <h1 className="text-white ps-3">CRUD APP</h1>
          </a>
        </div>
        <div className="col">

        </div>
        <div className="col-2 text-white">
          <div className="pt-3 float-end me-3">
            <a className="text-white link" href="login">Login</a> | <a className="text-white link" href="signup">Signup</a>
          </div>
        </div>
      </div>

      <Router>
        <Switch>
          <Route path="/login" exact component={LoginPage} />

          <Route path="/signup" exact component={SignupPage} />

          <Route path="/home" exact component={HomePage} />

          <Route path="/">
            <Redirect to="/home" />
          </Route>

          </Switch>

      </Router>
      
            
    </div>
      
    );
}

      export default App;
