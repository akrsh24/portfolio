import React, { useState } from 'react';
import { Toolbar, AppBar, IconButton, Typography, makeStyles, useMediaQuery, createMuiTheme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuDialog from './menubar/MenuDialog';

const appBarList = ["Home", "About", "Resume", "Certifications", "Contact"];
// -------custom-breakpoints-----------------//
const theme = createMuiTheme({
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

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        background: "#000000"
    },
    menuButton: {
        marginLeft: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontFamily: 'Bangers',
        fontSize: "24px"
    },
}));

function Navbar() {

    const [open, handleOpen] = useState(false);
    const breakpointMatches = useMediaQuery(theme.breakpoints.down('md'));
F
    const handleClick = () => {
        handleOpen(true);
    }

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Typography className={classes.title}>
                        Akarsh Srivastava
                    </Typography>
                    {
                        breakpointMatches &&
                        <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
                            <MenuIcon />
                        </IconButton>
                    }
                </Toolbar>
            </AppBar>
            {
                open &&
                <MenuDialog
                    open={open}
                    toggleDialog={handleOpen}
                    appBarList={appBarList}
                />
            }
        </div>
    );
}

export default Navbar;
