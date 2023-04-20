import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/Main';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import SelectionScreen from './components/SelectionScreen';
import Dev from './components/Dev';
import About from './components/About';


ReactDOM.render(
  <div>
    <Router>
      <Navbar></Navbar>
          <Switch>
            <Route path="/" element={<SelectionScreen></SelectionScreen>} />
          </Switch>
          <Switch>
            <Route path="/about" element={<About></About>} />
          </Switch>
          <Switch>
            <Route path="/login" element={<Login />} />
          </Switch>
          <Switch>
            <Route path="/signup" element={<SignUp></SignUp>} />
          </Switch>
          <Switch>
            <Route path="/dev" element={<Dev></Dev>} />
          </Switch>
          <Switch>
            <Route path="/rev" element={<Main></Main>} />
          </Switch>
    </Router> 
  </div>
  ,
  document.getElementById('root')
);


