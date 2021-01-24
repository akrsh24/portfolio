import React from 'react';
import Routes from './routes/Routes';
import Navbar from './components/appbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import styled from 'styled-components';

const StyledAppArticle = styled.article`
  width:100%;
  height:100%;
`;

function App() {
  return (
    <BrowserRouter>
      <StyledAppArticle>
        <video src="./assets/videos/video.mp4" autoPlay loop muted id="bg-video" type="video/mp4" />
        <Navbar />
        <section className="app-content">
          <Routes />
        </section>
      </StyledAppArticle>
    </BrowserRouter>
  );
}

export default App;
