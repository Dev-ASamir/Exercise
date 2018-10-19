import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from '../containers/Login';
import Results from '../containers/Results';
import Profile from '../containers/Profile';
import Register from '../containers/Register';


const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                {/* App Intro */}
                <Scene hideNavBar key="login" component={Login} />
                <Scene hideNavBar key="register" component={Register} />
                <Scene hideNavBar key="results" component={Results} />
                <Scene hideNavBar key="profile" component={Profile} />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
