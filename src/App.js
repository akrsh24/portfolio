import React from 'react';
import Routes from './routes/Routes';
import Navbar from './components/appbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import styled from 'styled-components';
import BackgroundVideo from './util/video/BackgroundVideo';

const StyledAppArticle = styled.article`
  width:100vw;
  height:100vh;
`;

function App() {

  return (
    <BrowserRouter>
      <StyledAppArticle>
        <BackgroundVideo />
        <Navbar />
        <section className="app-content">
          <Routes />
        </section>
      </StyledAppArticle>
    </BrowserRouter>
  );
}

export default App;
