import React from 'react';
import Routes from './routes/Routes';
import Navbar from './appbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="app-container">
        <video src="./assets/videos/Bubble_Background_01_bg.mov" playsInline autoPlay loop muted id="bg-video"></video>
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
