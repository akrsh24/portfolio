import React from 'react';
import './About.scss';
import { Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    aboutPaper: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
    }
}));

function About() {

    const classes = useStyles();

    return (
        <div className="about-container">
            <Paper
                elevation={3}
                className={classes.aboutPaper}
            >
                <div className="about-text-container">
                    <h4 style={{ marginBottom: 0 }}>ABOUT</h4>
                    <h1>LEARN MORE ABOUT ME</h1>
                    <div className="about-text-div">
                        <div className="about-text-image">
                            <img src="personal_dp.jpeg" alt="akarsh_image" />
                        </div>
                        <h1>LEARN MORE ABOUT ME</h1>
                        <h1>LEARN MORE ABOUT ME</h1>
                        <h1>LEARN MORE ABOUT ME</h1>
                        <h1>LEARN MORE ABOUT ME</h1>
                        <h1>LEARN MORE ABOUT ME</h1>

                    </div>
                </div>
            </Paper>
        </div>
    );
}

export default About;
