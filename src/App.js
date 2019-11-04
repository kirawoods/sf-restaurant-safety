import React from "react";
import "./App.css";
import { WelcomePage } from "./components/WelcomePage";

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <WelcomePage />
    </div>
  );
}

export default App;
