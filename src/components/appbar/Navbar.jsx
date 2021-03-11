import React from 'react';
import { StyledNavLink } from '../../util/StyledComponent';
import styled from 'styled-components';
import { appBarList } from '../../util/util';

const StyledNavDiv = styled.div`
    position:fixed;
    top:0;
    
    z-index:100;
    width:100%;
    height: 6vh;
    color:white;
    padding:0 2%;

    display:flex;
    justify-content:space-between;
    align-items:center;
`;

const StyledTitle = styled.header`
    flex-grow:1;
    font-size:2.5vmax;
    color: white;
`;

const StyledMenu = styled.div`
    flex-grow:2;
   
    display:flex;
    justify-content:flex-end;
    align-items:center;
`;

const StyledMenuList = styled.div`
    padding:0 2%;
`;

const GetTitle = () => {
    return (
        <StyledTitle>
            Akarsh Srivastava
        </StyledTitle>
    )
}

const GetMenus = () => {
    return (
        <StyledMenu>
            <GetNavMenuList />
        </StyledMenu>
    )
}

const GetNavMenuList = () => {
    return (
        appBarList.map(barList => {
            return (
                <StyledMenuList key={barList.name}>
                    <StyledNavLink exact to={barList.link}
                        activeStyle={{
                            borderBottom: "1px solid white"
                        }}
                    >
                        {barList.name}
                    </StyledNavLink>
                </StyledMenuList>
            )
        })
    )
}

const Navbar = () => {
    return (
        <StyledNavDiv>
            {/* <GetTitle /> */}
            <GetMenus />
        </StyledNavDiv>
    )
}

export default Navbar;