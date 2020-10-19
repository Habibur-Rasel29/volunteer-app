import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (

 
        <Router className="container">
      
      <Switch>
        <Route exact path="/">
        <Header></Header>
        <Body></Body>
      
        </Route>
        <Route  path="/home">
        <Header></Header>
        <Body></Body>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/register">
        <Register/>
        </Route>
     </Switch>
      </Router>
  
  );
}

export default App;
