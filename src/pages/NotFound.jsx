import React from 'react';
import { Link } from 'react-router-dom';

import './styles/NotFound.css';
import imgError from '../images/404-error.svg';


function NotFound() {
    return (
        <>
        <div className="Not__Found">
            <div className="container">
                <div className="row ">
                    <div className="col-12 col-md-6 mb-4 Not__Found-text">
                        <h1>Oops...</h1>
                        <h4>We did not find what you were looking for</h4>
                        <Link to="/home" className="btn btn-primary">Back to top</Link>
                    </div>
                    <div className="col-12 col-md-6">
                        <img src={imgError} alt="404-Not Found"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default NotFound;