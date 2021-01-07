import React from 'react';

import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';


class Badge extends React.Component {
    render () {
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Conference Logotype"/>
                </div>

                <div className="Badge__section-name">
                    <img className="Badge__avatar" src={this.props.avatarURL} alt="Avatar"/>
                    <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
                </div>

                <div className="Badge__section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <span>@{this.props.twitter}</span>
                </div>

                <div className="Badge__footer">
                    <p>#PlatziConf</p>
                </div>
            </div>
        )
    }
}

export default Badge;