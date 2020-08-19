import { createMuiTheme } from "@material-ui/core";

// -------custom-breakpoints-min-values-----------------//
export const breakpointsValues = {
    xs: 0,
    sm: 321.01,
    md: 426.01,
    lg: 769.01,
    xl: 1025.01,
    xxl: 1441.01
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
    // {
    //     "name": "Resume",
    //     "link": "/portfolio/resume"
    // },
    // {
    //     "name": "Certifications",
    //     "link": "/portfolio/certifications"
    // },
    // {
    //     "name": "Contact",
    //     "link": "/portfolio/contact"
    // }
];
//----------------------
