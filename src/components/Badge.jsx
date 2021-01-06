import React from 'react';

import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
    render () {
        return (
            <div className="container">
                <div>
                    <img src={confLogo} alt="Conference Logotype"/>
                </div>

                <div>
                    <img src="https://www.gravatar.com/avatar?d=identicon" alt="" />
                    <h1>Martin <br/> Roldan</h1>
                </div>

                <div className="">
                    <p>FullStack Developer</p>
                    <p>@martinrol</p>
                </div>

                <div>
                    <p>#PlatziConf</p>
                </div>
            </div>
        )
    }
}

export default Badge;