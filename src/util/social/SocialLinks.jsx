import React from 'react';
import { LinkedinFilled, GithubFilled, MediumCircleFilled, CodepenCircleFilled, TwitterCircleFilled } from '@ant-design/icons';
import styled from 'styled-components';
import './SocialLinks.css';

const StyledSocialContactSection = styled.section`
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    align-content:center;
    align-items:center;

    font-size:1.8vmax;
    padding:2%;
`;

const SocialLinks = () => {
    return (
        <StyledSocialContactSection>
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
    );
}
export default SocialLinks;