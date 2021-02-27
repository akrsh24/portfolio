import React from 'react';
import styled from 'styled-components';
import MySkills from '../skills/MySkills';

export const StyledBioSection = styled.section`
   margin:2%;
   line-height:1.8rem;

   font-size:1vmax;
   color:#ffffff;
   text-align:justify;
`;

const BioText = styled(StyledBioSection)`
`;

const AboutBioComponent = () => {
    return (
        <StyledBioSection >
            <BioText>
                Hi there! My name is Akarsh. I'm a Frontend Developer based out of India. I have been developing web application using ReactJS for the last 2+ years.
            </BioText>
            <MySkills />

        </StyledBioSection>
    );
}
export default AboutBioComponent;