import React from 'react';
import './App.css';
import Card from './component/Card';
import Navbar from './component/Navbar';
import Gridimage from './component/Gridimage';
import Jumbotron from './component/JumbotronHero';
import Footer from './component/Footer';
import JumbotronTurney from './component/JumbotronTurney';

function App() {
  return (
    <div className="Container">
      <Navbar/>
      <Gridimage/>
      <Card/>
      <Jumbotron/>
      <JumbotronTurney/>
      <Footer/>
    </div>
  );
}

export default App;
