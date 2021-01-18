import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Gravatar from './Gravatar';

import './styles/BadgesList.css';
import logoTwitter from '../images/logo-twitter.svg';


class BadgesList extends Component {
    render() {
        if(this.props.badges.length === 0) {
            return (
                <div>
                    <h3>No badges were found</h3>
                    <Link className="btn btn-primary" to="/badges/new">Create new badge</Link>
                </div>
            )
        }

        const items = this.props.badges.reverse();
        return (
            <ul className="list-unstyled Badges__list">
                {items.map((badge) => {
                    return (
                        <li key={badge.id} className="Badges__list-item">
                                <Link className="text-reset text-decoration-none" to={`badges/${badge.id}/edit`}>
                                <div className="Badges__list-item--img">
                                    <Gravatar className="Badges__list-item--img-img" email={badge.email} alt={"Photo of " + badge.firstName}/>
                                </div>
                                <div className="Badges__list-item-user">
                                    <h2>{badge.firstName} {badge.lastName}</h2>
                                    <p>{badge.jobTitle}</p>
                                    <div className="Badges__list-item--user--media">
                                        <figure>
                                            <img src={logoTwitter} alt="Twitter logo"/>
                                        </figure>
                                        <p>@{badge.twitter}</p>    
                                    </div>
                                </div>
                                <div className="Badges__list-item--colors">
                                    <span className="color1"></span>
                                    <span className="color2"></span>
                                    <span className="color3"></span>
                                </div>
                        </Link>
                            </li>
                    );
                })}
            </ul>
        );
    }
}

export default BadgesList;