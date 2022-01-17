import React from 'react'
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from './components/Header';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Referees from './pages/Referees';

function App() { 
  return ( 
    <div className="App">
      <header className="App-header">
        <h1>
          Coffee Matches
        </h1>
        <a
          className="App-link"
          href="https://www.coffeematches.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Referral Hub
        </a>
      {/* <Router> */}
          {/* <Header />
          <Switch>

            <Route exact path="/"></Route> */}
            <Home />

            {/* <Route path="/about"><About /></Route> */}
            <About />

            {/* <Route path="/referees"><Referees /></Route> */}
            <Referees />

          {/* </Switch>
        </Router> */}
        </header>
    </div>
  );
}

export default App;
