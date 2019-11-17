

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {

    render() {
        return (
            <div>
                <h1>Welcome to HealthyMeWe!</h1>
                
                <h1>Where your Health and our Health are One!</h1>
                <br></br>

                <h2>Follow the Steps Below to Get Started</h2>
                <br></br>

                <h3>Step 1: Create your user profile here: <Link to="/user" className="nav-link">Create User</Link></h3>
                <br></br>

                <h3>Step 2: Login to your account here: <Link to="/login" className="nav-link">Login</Link></h3>
                <br></br>

                <h3>Step 3: Do your exercises and enter them here: <Link to="/entry" className="nav-link">Exercise Entry</Link></h3>
            </div>
        )
    }    
}   

