import React from 'react';
import './App.css';
import Card from './component/Card';
import Navbar from './component/Navbar';
import Gridimage from './component/Gridimage';
import Location from './component/Location';
import Footer from './component/Footer';

function App() {
  return (
    <div className="Container">
      <Navbar/>
      <Gridimage/>
      <Card/>
      <Location/>
      <Footer/>
    </div>
  );
}

export default App;
