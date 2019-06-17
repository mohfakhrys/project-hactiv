import React from 'react';
import './App.css';
import Home from './page/Home'
import Update from './page/Update'
import Hero from './page/Hero'
import News from './page/News'

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
          <Router>
            <Route path='/' exact component={Home}></Route>
            <Route path='/Update' exact component={Update}></Route>
            <Route path='/News' exact component={News}></Route>
            <Route path='/Hero' exact component={Hero}></Route>
          </Router>
      </React.Fragment>
  );
}

export default App;
