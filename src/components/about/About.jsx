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
                    <h4 style={{ marginBottom: 0, marginTop: "5px" }}>ABOUT</h4>
                    <h2>LEARN MORE ABOUT ME</h2>
                    <div className="about-text-div">
                        <div className="about-text-image">
                            <img src="personal_dp.jpeg" alt="akarsh_image" />
                        </div>
                        <p className="about-text-description">
                            Hi there! My name is Akarsh, and I'm a Frontend Engineer at <a href="https://www.publicissapient.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#fddb3a" }}>PublicisSapient</a>.
                            <br />
                            You can usually find me creating a SPA using ReactJS, Redux, Javascript, Java, or watching anime/TV series.
                            <br />
                            In my not so busy day, I usually keep myself engaged in other developer's post and try to code more on new projects ideas.
                            <br />
                            I never want to let my guard down from learning new things. You can drop me a mail anytime.
                            <a href="mailto:akrsh24@gmail.com">
                                <span class="material-icons" style={{ marginLeft: "10px", marginTop: "2px", textDecoration: "none", color: "white" }}>email</span>
                            </a>
                        </p>
                    </div>
                </div>
            </Paper>
        </div>
    );
}

export default About;
