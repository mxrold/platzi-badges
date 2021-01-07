import React, { Component } from 'react';

class BadgeForm extends Component {
    handleChange = e => {
        console.log({ 
            name: e.target.name,
            value: e.target.value 
        });
    }

    handleClick = e => {
        console.log('Botón presionado');
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('Formulario se envio')
    }

    render() {
        return (
            <div>
                <h1>New Attendant</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="firstName"/>

                        <button onClick={this.handleClick} className="btn btn-primary mt-4">Save</button>
                    </div>
                </form>
            </div>
        );
    };
}

export default BadgeForm;