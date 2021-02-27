import React from 'react';
import styled from 'styled-components';
import HireMeButton from '../../util/hireMe/HireButton';
import AboutBioComponent from './bio/AboutBioComponent';
import AboutIntro from './intro/AboutIntro';

const StyledAboutContainer = styled.section`
    min-height:50vh;
    max-height:80vh;
    width:50vw;
    margin: 5vh auto;

    padding: 0 5vw;

    /* Glassmorphism CSS */

    background: rgba( 255, 255, 255, 0.10 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    border-radius: 10px;
    border: 2px solid rgba( 255, 255, 255, 0.18 );

    /* Flex property */

    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-content:center;
    text-align:center;
    color:#ffffff;


    overflow-y: auto;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; // Internet Explorer 10+

    &::-webkit-scrollbar{
    /* WebKit */
    width: 0;
    height: 0;
    }
`;

const About = () => {
    return (
        <StyledAboutContainer>
            <AboutIntro />
            <HireMeButton />
            <AboutBioComponent />
        </StyledAboutContainer >
    );
}
export default About;