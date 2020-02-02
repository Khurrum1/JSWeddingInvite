import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Main, Welcome, Menu, Invitation, Songs, PicInvite, SeatingPlan } from '../Screens'


const Routes = () => (
    <Router>
            <Route path="/" exact component={Main} />
            <Route path="/Welcome" exact component={Welcome} />
            <Route path="/invitation" component={PicInvite} />
            <Route path="/rsvp" component={Invitation} />
            <Route path="/Menu" exact component={Menu} />
            <Route path="/seatingPlan" component={SeatingPlan} />
            <Route path="/orderOfTheDay"  exact component={Songs} />
    </Router>
);

export default Routes;