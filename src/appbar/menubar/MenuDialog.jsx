import React, { useRef, useEffect } from 'react';
import { Dialog, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    listItem: {
        color: 'white'
    }
}));

const MenuDialog = props => {
    const handleClose = () => {
        props.toggleDialog(false);
    }
    const wrapper = useRef();
    useEffect(() => wrapper.current && wrapper.current.focus());

    const classes = useStyles();

    return (
        <div ref={wrapper} >
            <Dialog onClose={handleClose} open={props.open}
                PaperProps={{
                    style: {
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        boxShadow: 'none',
                        width:"90%",
                        height:"50%"
                    },
                }}
            >
                <List>
                    {props.appBarList.map((menuList) => (
                        <ListItem button key={menuList}>
                            <ListItemText primary={menuList} className={classes.listItem} />
                        </ListItem>
                    ))}
                </List>
            </Dialog>
        </div >
    );
}

export default MenuDialog;