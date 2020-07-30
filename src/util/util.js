import { createMuiTheme } from "@material-ui/core";

// -------custom-breakpoints-min-values-----------------//
export const breakpointsValues = {
    xs: 0,
    sm: 320.01,
    md: 425.01,
    lg: 768.01,
    xl: 1024.01,
    xxl: 1440.01
}
//----------------------

// -------custom-breakpoints-----------------//
export const theme = createMuiTheme({
    breakpoints: {
        values: breakpointsValues,
    },
});
//----------------------

// -------appbar-menu-----------------//
export const appBarList = [
    {
        "name": "Home",
        "link": "/portfolio/"
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
