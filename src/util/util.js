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
        "link": "/home"
    },
    {
        "name": "About",
        "link": "/about"
    },
    {
        "name": "Resume",
        "link": "/resume"
    },
    {
        "name": "Certifications",
        "link": "/certifications"
    },
    {
        "name": "Contact",
        "link": "/contact"
    }
];
//----------------------
