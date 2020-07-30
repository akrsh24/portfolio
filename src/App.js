import React from 'react';
import Routes from './routes/Routes';
import Navbar from './appbar/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
