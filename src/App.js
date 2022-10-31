import './App.css';
import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Form from "./Form"
import Info from './Info'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/Covid-Case-Tracker" element = {<Form/>}/>
          <Route path = "/info" element = {<Info/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
