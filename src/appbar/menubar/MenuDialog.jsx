import React, { useRef, useEffect } from 'react';
import { Dialog, List, ListItem, makeStyles, Zoom } from '@material-ui/core';
import { appBarList } from '../../util/util';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    listItem: {
        textDecoration: "none",
        color: "white",
        fontFamily: 'Bangers',
        fontSize: "16px",
    },
    activeListItem: {
        borderBottom: "2px solid white "
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Zoom direction="down" ref={ref} {...props} />;
});

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
                        width: "90%",
                        height: "50%"
                    },
                }}
                TransitionComponent={Transition}
            >
                <List>
                    {
                        appBarList.map((barList) => (
                            <ListItem button key={barList.name}>
                                <NavLink exact to={barList.link} className={classes.listItem} activeClassName={classes.activeListItem} onClick={handleClose}>
                                    {barList.name}
                                </NavLink>
                            </ListItem>
                        ))
                    }
                </List>
            </Dialog>
        </div >
    );
}

export default MenuDialog;