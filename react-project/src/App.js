import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './pages/login';
import Home from './pages/home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      {/* <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li> */}

      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      {/* <Route path="/topics" component={Topics} /> */}

    </div>
    </Router>
    
  );
}

export default App;