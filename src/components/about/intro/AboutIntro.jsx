import React from 'react';
import styled from 'styled-components';
import SocialLinks from '../../../util/social/SocialLinks';

const StyledIntroHeader = styled.header`
    text-transform:uppercase;
    margin:4%;
`;

const StyledAboutName = styled.section`
    font-weight:bold;
    font-size:2vmax;
    padding:2%;
`;

export const StyledAboutHeadline = styled.section`
    font-size:1.25vmax;
`;

const AboutIntro = () => {
    return (
        <StyledIntroHeader>
            <StyledAboutName>
                Akarsh Srivastava
            </StyledAboutName>
            <StyledAboutHeadline>
                Frontend Engineer &amp; Web Developer
            </StyledAboutHeadline>
            <SocialLinks/>
        </StyledIntroHeader>
    );
}
export default AboutIntro;