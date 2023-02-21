import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/home/Home'
import Form from './pages/form/Form';
import Dashboard from './pages/dashboard/Dashboard'
import Login from './pages/login/Login'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = '/'>
            <Home />
          </Route>

          <Route path = '/form'>
            <Form />
          </Route>

          <Route path = '/login'>
            <Login />
          </Route>

          <Route path = '/dashboard'>
            <Dashboard />
          </Route>
        </Switch>
      </Router>      
    </div>
  );
}

export default App;
