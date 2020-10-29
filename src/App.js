import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreatePiece from "./components/create-piece.component";

function App() {
  return (<Router>
    <div className="App">
        <CreatePiece />
      </div>
    </Router>);
}

export default App;
