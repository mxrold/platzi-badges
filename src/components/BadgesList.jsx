import React, { Component } from 'react';

import './styles/BadgesList.css';
import logoTwitter from '../images/logo-twitter.svg';

class BadgesList extends Component {
    render() {
        return (
            <ul className="list-unstyled Badges__list">
                {this.props.badges.map((badge) => {
                    return (
                        <li key={badge.id} className="Badges__list-item">
                            <div className="Badges__list-item--img">
                                <img src={badge.avatarURL} alt={"Photo of" + badge.firstName}/>
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
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default BadgesList;