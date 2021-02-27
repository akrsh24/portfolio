import React from 'react';
import styled from 'styled-components';
import { StarOutlined } from '@ant-design/icons';

const StyledHireMeButton = styled.button`
    width:50%;
    background-color:#D31996;
    color:#ffffff;

    border:none;
    border-radius:5px;
    line-height:32px;

    font-size:1vmax;
    max-height:3rem;

    /* Position it center */
    position:relative;
    left:50%;
    transform:translateX(-50%);

    &:hover{
      cursor: pointer;
    }

    outline:none;

`;

const HireMeButton = () => {

    const handleHireMe = () => {
        window.location.href = `mailto:akrsh24@gmail.com`
    }

    return (
        <StyledHireMeButton onClick={handleHireMe}>
            <StarOutlined /> Hire Me
        </StyledHireMeButton>
    );
}
export default HireMeButton;