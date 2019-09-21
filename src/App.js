import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';
import Home from './Home'
import QRGenerator from './QRGenerator'
import QRReader from './QRReader'

function App() {


  return (
    <div className="container bg-warning text-center">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/qrgenerator" component={QRGenerator} />
          <Route path="/qrreader" component={QRReader} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
