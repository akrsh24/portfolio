// -------screen breakpoints-----------------//
const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = {
    mobileSmin: `(min-width: ${size.mobileS})`,
    mobileSmax: `(max-width: ${size.mobileM - 1})`,
    mobileMmin: `(min-width: ${size.mobileM})`,
    mobileMmax: `(max-width: ${size.mobileL - 1})`,
    mobileLmin: `(min-width: ${size.mobileL})`,
    mobileLmax: `(max-width: ${size.tablet - 1})`,
    tabletmin: `(min-width: ${size.tablet})`,
    tabletmax: `(max-width: ${size.laptop - 1})`,
    laptopmin: `(min-width: ${size.laptop})`,
    laptopmax: `(max-width: ${size.laptopL - 1})`,
    laptopLmin: `(min-width: ${size.laptopL})`,
    laptopLmax: `(max-width: ${size.desktop - 1})`,
    desktopmin: `(min-width: ${size.desktop})`,
};

// -------appbar-menu-----------------//
export const appBarList = [
    {
        "name": "Home",
        "link": "/portfolio/"
    },
    // {
    //     "name": "Blogs",
    //     "link": "/portfolio/blogs"
    // },
    // {
    //     "name": "Experience",
    //     "link": "/portfolio/experience"
    // },
    {
        "name": "About",
        "link": "/portfolio/about"
    }
];
//----------------------
