import { useEffect, useRef } from "react";
import styled from "styled-components";
import anime from 'animejs/lib/anime.es.js';
import './Introduction.css';

const StyledIntroArticle = styled.article`
    padding:2%;
    height:100%;
    width:100%;

    display:flex;
    justify-content:center;
    text-align:center;
    align-items:center;
`;

const StyledIntroSection = styled.section`
   width:50%;
   height:50%;
`;

const StyledIntroText = styled.div`
   margin-bottom:0;
   
   font-weight: 900;
   font-size: 3.5vmax;

   color: #ffffff;
`;

const titleSet = ["Software Engineer", "Frontend Engineer", "Enthusiastic Coder"];

const Introduction = () => {

    const titleRef = useRef();

    useEffect(() => {
        let text = titleRef.current;
        text.innerHTML = text.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        anime.timeline({ loop: true })
            .add({
                targets: '.ml2 .letter',
                scale: [4, 1],
                opacity: [0, 1],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 950,
                delay: (el, i) => 100 * i
            })
    });

    return (
        <StyledIntroArticle>
            <StyledIntroSection>
                <StyledIntroText>
                    <h1>Hi , I'm Akarsh!</h1>
                </StyledIntroText>
                <StyledIntroText>
                    <h1 className="ml2" ref={titleRef}>I'm a {titleSet[0]}</h1>
                </StyledIntroText>
            </StyledIntroSection>
        </StyledIntroArticle>
    )
}

export default Introduction;