import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Certifications from '../components/certifications/Certifications';
import Resume from '../components/resume/Resume';

function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/certifications" component={Certifications} />
                <Route exact path="/resume" component={Resume} />
            </Switch>
        </div>
    );
}

export default Routes;
