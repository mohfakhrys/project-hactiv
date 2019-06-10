import React from 'react';
import './App.css';
import Card from './component/Card';
import Navbar from './component/Navbar';
import Gridimage from './component/Gridimage';

function App() {
  return (
    <div className="Container">
      <Navbar/>
      <Gridimage/>
      <Card/>
    </div>
  );
}

export default App;
