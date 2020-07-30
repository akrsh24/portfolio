import { createMuiTheme } from "@material-ui/core";

// -------custom-breakpoints-----------------//
export const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 321,
            md: 426,
            lg: 769,
            xl: 1025,
            xxl: 1441
        },
    },
});
//----------------------

// -------appbar-menu-----------------//
export const appBarList = [
    {
        "name": "Home",
        "link": "/portfolio/home"
    },
    {
        "name": "About",
        "link": "/portfolio/about"
    },
    {
        "name": "Resume",
        "link": "/portfolio/resume"
    },
    {
        "name": "Certifications",
        "link": "/portfolio/certifications"
    },
    {
        "name": "Contact",
        "link": "/portfolio/contact"
    }
];
//----------------------
