import React from 'react'
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Referees from './pages/Referees';

function App() { 
  return ( 
    <div className="App">
      <header className="App-header">
              <Router>          
          <Header />
          <Routes>

            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/referees" element={<Referees />}></Route>

          </Routes>
        </Router>
        


        </header>
    </div>
  );
}

export default App;
