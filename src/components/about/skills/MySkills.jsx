import React from 'react';
import styled from 'styled-components';
import { StyledAboutHeadline } from '../intro/AboutIntro';

const StyledSkillsTitle = styled(StyledAboutHeadline)`
   margin:2%;
   text-align:left;
   text-decoration:underline;
   font-size:1.5vmax;
   text-transform:uppercase;
   font-weight:bold;
`;

const StyledSkillSection = styled.section`
    display:flex;
    flex-wrap:wrap;
    justify-content:flex-start;
    align-content:center;
    align-items:center;
    width:100%;
`;

const StyledSkillsItem = styled.img`
    width:20%;
    margin:1% 5%;
`;


const SKILLS_PATH_URL = `./assets/images/skills`

const skillsUrl = ['react-logo.png', 'redux-logo.png', 'js.png', 'html-logo.png', 'css-logo.png', 'git-logo.png'];

const MySkills = () => {
    return (
        <>
            <StyledSkillsTitle>
                Skills
            </StyledSkillsTitle>
            <StyledSkillSection>
                {
                    skillsUrl.map(skill => {
                        return (
                            <StyledSkillsItem src={`${SKILLS_PATH_URL}/${skill}`} alt={skill.split(".")[0]} />
                        )
                    })
                }
            </StyledSkillSection>
        </>
    );
}
export default MySkills;