import React, { Component } from "react";
import "./App.css";
import WelcomePage from "./components/WelcomePage";

import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Route exact path="/" component={WelcomePage} />
      </div>
    );
  }
}

export default App;
