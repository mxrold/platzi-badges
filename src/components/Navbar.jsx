import React, { Component } from 'react';

import './styles/Navbar.css';
import logo from '../images/logo.svg';


class Navbar extends Component {
    render() {
        return (
            <div className="Navbar py-1">
                <div className="container-fluid">
                    <a className="Navbar__brand" href="/">
                        <img className="Navbar__brand-logo" src={logo} alt="Logotype" />
                        <span className="font-weight-light">Platzi</span>
                        <span className="font-weight-bold">Conf</span>
                    </a>
                </div>
            </div>
        );
    };
}

export default Navbar;