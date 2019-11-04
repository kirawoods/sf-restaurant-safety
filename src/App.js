import React, { Component } from "react";
import "./App.css";
import WelcomePage from "./components/WelcomePage";
import NavBar from "./components/NavBar";

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <Route exact path="/" component={WelcomePage} />
    </div>
  );
}

export default App;
