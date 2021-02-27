import { StarOutlined, LinkedinFilled, GithubFilled, MediumCircleFilled, CodepenCircleFilled, TwitterCircleFilled } from '@ant-design/icons';
import React from 'react';
import styled from 'styled-components';
import './Abouts.scss';

const StyledAboutContainer = styled.section`
    min-height:40vh;
    max-height:90vh;
    overflow-y:auto;
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
`;

const StyledIntroHeader = styled.header`
    text-transform:uppercase;
    margin:4%;
`;

const StyledAboutName = styled.section`
    font-weight:bold;
    font-size:2vmax;
    padding-bottom:2%;
`;

const StyledAboutHeadline = styled.section`
    font-weight:bold;
    font-size:1.25vmax;
`;

const StyledHireMeButton = styled.button`
    width:50%;
    background-color:#D31996;
    color:#ffffff;
    border:none;
    border-radius:5px;
    line-height:2rem;
    margin:2%;
    font-size:1vmax;

    /* Position it center */
    position:relative;
    left:50%;
    transform:translateX(-50%);
`;

const StyledBioSection = styled.section`
   margin:2%;
   line-height:1.2rem;

   font-size:1.1vmax;
   color:#ffffff;
   text-align:justify;
`;

const StyledSocialContactSection = styled.section`
    display:flex;
    justify-content:space-evenly;
    align-content:center;
    align-items:center;

    font-size:1.8vmax;
    padding:2%;
`;

const Abouts = () => {
    return (
        <StyledAboutContainer>
            <StyledIntroHeader>
                <StyledAboutName>
                    Akarsh Srivastava
                </StyledAboutName>
                <StyledAboutHeadline>
                    Frontend Engineer &amp; Web Developer
                </StyledAboutHeadline>
            </StyledIntroHeader>
            <StyledHireMeButton>
                <StarOutlined /> Hire Me
            </StyledHireMeButton>
            <StyledBioSection>
                Hi there! My name is Akarsh, and I'm a Frontend Engineer at <a href="https://www.publicissapient.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#e26cbb', textDecoration: 'none' }}>Publicis Sapient</a>.
                <br />
                You can usually find me creating a SPA using ReactJS, Redux, Javascript, Java, or watching anime/TV series.
                <br />
                In my not so busy day, I usually keep myself engaged in other developer's post and try to code more on new projects ideas.
                <br />
                I never want to let my guard down from learning new things.
            </StyledBioSection>
            <StyledSocialContactSection>
                <StyledBioSection>Connect with me on:</StyledBioSection>
                <a href="https://github.com/akrsh24" target="_blank" rel="noopener noreferrer">
                    <GithubFilled className="social-links" />
                </a>
                <a href="https://www.linkedin.com/in/akarsh-srivastava-409263105" target="_blank" rel="noopener noreferrer">
                    <LinkedinFilled className="social-links" />
                </a>
                <a href="https://akrsh24-srivastava.medium.com/" target="_blank" rel="noopener noreferrer">
                    <MediumCircleFilled className="social-links" />
                </a>
                <a href="https://codepen.io/akrsh24" target="_blank" rel="noopener noreferrer">
                    <CodepenCircleFilled className="social-links" />
                </a>
                <a href="https://twitter.com/akrsh24" target="_blank" rel="noopener noreferrer">
                    <TwitterCircleFilled className="social-links" />
                </a>
            </StyledSocialContactSection>
        </StyledAboutContainer >
    );
}
export default Abouts;