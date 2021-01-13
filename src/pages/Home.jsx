import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
import heroImg from '../images/astronauts.svg';
import confLogo from '../images/platziconf-logo.svg';


function Home() {
    return(
        <div className="Home">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 pb-4 Home-text">
                        <figure>
                            <img src={confLogo} alt="" />
                        </figure>
                        <h1>PRINT YOUR BADGES</h1>
                        <p>The easiest way to manage your conference</p>
                        <Link to="/badges/new" className="btn btn-primary">Start Now</Link>
                    </div>
                    <div className="col-12 col-md-6">
                        <img className="Hero-img" src={heroImg} alt="Background"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;