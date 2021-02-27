import React from 'react';
import styled from 'styled-components';
import video from './videos.mp4';
const StyledVideo = styled.video`
    width: 100%;
    height: 100vh;
    object-fit: cover;
`
const BackgroundVideo = () => {
    return (
        <StyledVideo autoPlay loop muted>
            <source src={video} type="video/mp4" />
        </StyledVideo>
    );
}
export default BackgroundVideo; 