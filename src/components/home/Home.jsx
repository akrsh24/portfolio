import React from 'react';
import './Home.scss';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles } from '@material-ui/core';
import { theme } from '../../util/util';

const useStyles = makeStyles(() => ({
    socialLinks: {
        color: "white",
        [theme.breakpoints.only('xs')]: {
            fontSize: 20
        },
        [theme.breakpoints.only('sm')]: {
            fontSize: 25
        },
        [theme.breakpoints.only('md')]: {
            fontSize: 30
        },
        [theme.breakpoints.only('lg')]: {
            fontSize: 35
        },
        [theme.breakpoints.only('xl')]: {
            fontSize: 35
        },
        [theme.breakpoints.only('xxl')]: {
            fontSize: 35
        },
    },
}));

function Home() {
    const classes = useStyles();

    return (
        <>
            <div className="home-container">
                <div className="home-section">
                    <div className="home-name-title">
                        <p>Akarsh Srivastava</p>
                    </div>

                    <div className="home-description">
                        <p>I'm a passionate Frontend Engineer</p>
                    </div>
                    <div className="home-social">
                        <div><a href="https://github.com/akrsh24" target="_blank" rel="noopener noreferrer"><GitHubIcon className={classes.socialLinks} /></a></div>
                        <div><a href="https://www.linkedin.com/in/akarsh-srivastava-409263105/" target="_blank" rel="noopener noreferrer"><LinkedInIcon className={classes.socialLinks} /></a></div>
                        <div><a href="https://twitter.com/akrsh24" target="_blank" rel="noopener noreferrer"><TwitterIcon className={classes.socialLinks} /></a></div>
                    </div>
                </ div>
            </div>
        </>
    );
}

export default Home;
