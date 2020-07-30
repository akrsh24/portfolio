import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FirstPage from '../FirstPage';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Certifications from '../components/certifications/Certifications';
import Resume from '../components/resume/Resume';
import Home from '../components/home/Home';

function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={FirstPage} />
                <Route exact path="/portfolio/" component={Home} />
                <Route exact path="/portfolio/about" component={About} />
                <Route exact path="/portfolio/contact" component={Contact} />
                <Route exact path="/portfolio/certifications" component={Certifications} />
                <Route exact path="/portfolio/resume" component={Resume} />
            </Switch>
        </div>
    );
}

export default Routes;
