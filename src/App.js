import React from "react";
import axios from "axios";
import "./App.css";
import CardContent from "./components/CardContent.js"


function App() {
  return (
    <div className="App">
      
      <CardContent/>
      
    </div>
  );
}

export default App;
//GET https://api.nasa.gov/planetary/apod