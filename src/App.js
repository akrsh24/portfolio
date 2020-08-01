import React from 'react';
import Routes from './routes/Routes';
import Navbar from './appbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div className="app-container">
          <Routes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
