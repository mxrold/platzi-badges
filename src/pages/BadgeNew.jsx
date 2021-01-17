import React, { Component } from 'react';

import api from '../api';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';

import './styles/BadgeNew.css';
import logoHero from '../images/platziconf-logo.svg';


class BadgeNew extends Component {
    state = { 
        loading: false,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            emailName: '',
            jobTitle: '',
            twitter: '',
        } 
    };

    handleChange = e => {
        // const nextForm = this.state.form;
        // nextForm[e.target.name] = e.target.value
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ loading: true, error:null })

        try {
            await api.badges.create(this.state.form);
            this.setState({ loading: false });

            this.props.history.push('/badges')
        } catch(error) {
            this.setState({ loading: false, error:error });
        }
    }

    render() {
        if(this.state.loading) {
            return <PageLoading />
        }

        return (
            <>
                <div className="BadgeNew__hero container-fluid py-4">
                    <img className="BadgeNew__hero-img img-fluid" src={logoHero} alt="Logotype" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 mt-4">
                            <Badge
                                firstName={this.state.form.firstName || 'First Name'}
                                lastName ={this.state.form.lastName || 'Last Name'} 
                                twitter={this.state.form.twitter || 'Twitter'}
                                jobTitle={this.state.form.jobTitle || 'Job Title'}
                                email={this.state.form.email || 'Email'}
                                avatarURL="https://www.gravatar.com/avatar/?d=identicon"
                            />
                        </div>
                        <div className="col-12 col-md-6 my-4">
                            <BadgeForm 
                            onChange = {this.handleChange}
                            onSubmit={this.handleSubmit}
                            formValues = {this.state.form}
                            error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    };
}

export default BadgeNew;