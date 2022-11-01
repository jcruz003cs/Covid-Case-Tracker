import './App.css';
import React from "react"
import {HashRouter as HashRouter, Routes, Route} from "react-router-dom"
import Form from "./Form"
import Info from './Info'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path = "/Covid-Case-Tracker" element = {<Form/>}/>
          <Route path = "/info" element = {<Info/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
