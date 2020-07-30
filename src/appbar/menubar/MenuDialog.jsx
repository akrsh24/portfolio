import React, { useRef, useEffect } from 'react';
import { Paper, Dialog, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    dialog: {
    }
}));

const MenuDialog = props => {
    const handleClose = () => {
        props.toggleDialog(false);
    }
    console.log("MenuDialog");
    const wrapper = useRef();
    useEffect(() => wrapper.current && wrapper.current.focus());
    const classes = useStyles();

    return (
        <div ref={wrapper} >
            <Dialog onClose={handleClose} open={props.open}
                PaperProps={{
                    style: {
                        backgroundColor: 'opaque',
                        boxShadow: 'none',
                        fullScreen: false
                    },
                }}
            >
                <Paper children={"Hello","Hell2"} className={classes.dialog} />
            </Dialog>
        </div >
    );
}

export default MenuDialog;