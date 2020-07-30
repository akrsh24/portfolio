import React, { useState } from 'react';
import { Toolbar, AppBar, IconButton, Typography, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuDialog from './menubar/MenuDialog';

const useStyles = makeStyles((theme) => ({
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

    const handleClick = () => {
        console.log("OK");
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
                    <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
                        <MenuIcon />
                    </IconButton>
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
