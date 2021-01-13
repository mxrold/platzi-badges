import React, { Component } from 'react';

import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

import './styles/BadgeNew.css';
import logoHero from '../images/badge-header.svg';

class BadgeNew extends Component {
    state = { 
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

    render() {
        return (
            <>
                <div className="BadgeNew__hero container-fluid py-4">
                    <img className="img-fluid" src={logoHero} alt="Logotype" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 mt-4">
                            <Badge
                                firstName={this.state.form.firstName}
                                lastName ={this.state.form.lastName}
                                twitter={this.state.form.twitter}
                                jobTitle={this.state.form.jobTitle}
                                email={this.state.form.email}
                                avatarURL="https://www.gravatar.com/avatar/?d=identicon"
                            />
                        </div>
                        <div className="col-12 col-md-6 my-4">
                            <BadgeForm 
                            onChange = {this.handleChange}
                            formValues = {this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    };
}

export default BadgeNew;