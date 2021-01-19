import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import Badge from '../components/Badge';

import './styles/BadgeDetails.css';
import confLogo from '../images/platziconf-logo.svg';


export default function BadgeDetails (props) {
    const badge = props.badge;
    return (
        <>
            <div className="BadgeDetails__hero">
                <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                    <img src={confLogo} alt="Logo de la Conferencia" />
                    </div>
                    <div className="col-12 col-md-6 BadgeDetails__hero-attendant-name">
                    <h1>
                        {badge.firstName} {badge.lastName}
                    </h1>
                    </div>
                </div>
                </div>
            </div>

            <div className="container">
                <div className="row my-4">
                    <div className="col-12 col-md-6">
                        <Badge
                        firstName={badge.firstName}
                        lastName={badge.lastName}
                        email={badge.email}
                        twitter={badge.twitter}
                        jobTitle={badge.jobTitle}
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <h2>Actions</h2>
                        <div className="BadgeDetails__buttons mb-4">
                            <div>
                                <Link className="btn btn-primary mb-2 BadgeDetails__buttons-link" to={`/badges/${badge.id}/edit`}>
                                Edit
                                </Link>
                            </div>

                            <div>
                                <button  className="btn btn-danger">Delete</button>
                                {ReactDOM.createPortal(
                                <h1>Hola, realmente no estoy aquí</h1>,
                                document.getElementById('modal')
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}