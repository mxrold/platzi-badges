import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '../api';
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import MiniLoader from '../components/MiniLoader';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';


class Badges extends Component {
    state = {
        loading: true,
        error: null,
        data: undefined
    }

    componentDidMount() {
        this.fetchData();

        this.invervalId = setInterval(this.fetchData, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.invervalId);
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null });

        try {
            const data = await api.badges.list();
            this.setState({ loading: false, data: data });
        } catch(error) {
            this.setState({ loading: false, error: error });
        }
    }

    render () {
        if(this.state.loading === true && !this.state.data) {
            return <PageLoading />;
        }

        if(this.state.error) {
            return <PageError error={this.state.error} />;
        }

        return (
            <>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt="Conf Logo" />
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                    </div>

                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgesList badges={this.state.data} />
                        </div>
                    </div>
                    {this.state.loading && <MiniLoader />}
                </div>
            </>
        );
    };
}

export default Badges;