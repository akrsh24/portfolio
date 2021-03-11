import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import NavMenus from './NavMenus';
const HamburgerMenu = () => {

    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

    const openNavMenus = (flag) => {
        setIsNavMenuOpen(flag);
    }

    return (
        <>
            <FaBars onClick={() => openNavMenus(true)} />
            {
                isNavMenuOpen &&
                <NavMenus
                    openNavMenus={openNavMenus}
                />
            }
        </>
    );
}
export default HamburgerMenu;