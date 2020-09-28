import React, { useState } from 'react';
import { Toolbar, AppBar, IconButton, Typography, makeStyles, useMediaQuery } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuDialog from './menubar/MenuDialog';
import { theme, appBarList } from '../util/util';
import { NavLink } from 'react-router-dom';

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
    appBarListStyle: {
        marginRight: theme.spacing(2),
        fontFamily: 'Bangers',
        fontSize: "16px",
    },
    navLinkStyle: {
        textDecoration: "none",
        color: "white",
    },
    activeListItem: {
        borderBottom: "2px solid white "
    }
}));

function Navbar() {

    const [open, handleOpen] = useState(false);
    const breakpointMatches = useMediaQuery(theme.breakpoints.down('lg'));

    const handleClick = () => {
        handleOpen(true);
    }

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Typography className={classes.title}>
                        <NavLink exact to="/" className={classes.navLinkStyle}>
                            Akarsh Srivastava
                        </NavLink>
                    </Typography>
                    {
                        breakpointMatches ?
                            <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
                                <MenuIcon />
                            </IconButton>
                            :
                            appBarList.map(barList => {
                                return (
                                    <Typography key={barList.name} className={classes.appBarListStyle}>
                                        <NavLink exact to={barList.link} className={classes.navLinkStyle} activeClassName={classes.activeListItem}>
                                            {barList.name}
                                        </NavLink>
                                    </Typography>
                                )
                            })
                    }
                </Toolbar>
            </AppBar>
            {
                open &&
                <MenuDialog
                    open={open}
                    toggleDialog={handleOpen}
                />
            }
        </div>
    );
}

export default Navbar;
