import React from 'react';
import styled from 'styled-components';
import { StyledNavLink } from '../../../util/StyledComponent';
import { appBarList } from '../../../util/util';
import { device } from '../../../util/util';

const StyledNavOptions = styled(StyledNavLink)`
    @media ${device.mobileSmin && device.tabletmax}{
        font-size:2rem;
    }
`;

const StyledNavMenuContainer = styled.section`
   
    position:absolute;
    top:10vh;
    left:50%;
    transform:translateX(-50%);

    width:50vw;

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

    /* Hide scrollbar */

    overflow-y: auto;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; // Internet Explorer 10+

    &::-webkit-scrollbar{
    /* WebKit */
    width: 0;
    height: 0;
    }
`;

const NavMenus = ({ openNavMenus }) => {
    return (
        <StyledNavMenuContainer>
            {
                appBarList.map(barList => {
                    return (
                        <StyledNavOptions exact to={barList.link}
                            activeStyle={{
                                borderBottom: "1px solid white"
                            }}
                        >
                            {barList.name}
                        </StyledNavOptions>
                    )
                })
            }
        </StyledNavMenuContainer >
    );
}
export default NavMenus;