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
                    <img className="Badge__avatar" src="https://www.gravatar.com/avatar?d=identicon" alt="" />
                    <h1>Martin <br/> Roldan</h1>
                </div>

                <div className="Badge__section-info">
                    <h3>FullStack Developer</h3>
                    <span>@martinrol</span>
                </div>

                <div className="Badge__footer">
                    <p>#PlatziConf</p>
                </div>
            </div>
        )
    }
}

export default Badge;