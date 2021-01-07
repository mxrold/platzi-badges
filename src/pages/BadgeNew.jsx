import React, { Component } from 'react';

import Badge from '../components/Badge';
import Navbar from '../components/Navbar';

import './styles/BadgeNew.css';
import logoHero from '../images/badge-header.svg';

class BadgeNew extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero container-fluid py-4">
                    <img className="img-fluid" src={logoHero} alt="Logotype" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                                firstName="Martin"
                                lastName ="Roldan"
                                twitter="martinrol"
                                jobTitle="FullStack Developer"
                                avatarURL="https://www.gravatar.com/avatar/?d=identicon"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default BadgeNew;