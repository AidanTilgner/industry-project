import React from 'react';
import axios from 'axios';
import './SignUpForm.scss';
import './server/library.json';

export default class SignUpForm extends React.Component { 
    
    state = {
        name: {
            value: '',
            valid: false,
        },
        email: {
            value: '',
            valid: false,
        },
        verify: {
            value: '',
            valid: false,
        }
    }

    handleNameChange(event) {
        const valid = this.validateField(event.target.value);
        this.setState({
            name: {
                value: event.target.value,
                valid: valid
            }
        })
    }

    handleEmailChange(event) {
        const valid = this.validateField(event.target.value);
        this.setState({
            email: {
                value: event.target.value,
                valid: valid
            }
        })
    }

    validateField(value) { 
        if(value === "") {
            return false
        } else { 
            return true
        }
    }

    render () { 
        return (
            <form className="form">
                <input className="form__input" type="text" placeholder="Name" />
                <input className="form__input" type="text" placeholder="Email" />
                <input className="form__input" type="text" placeholder="Confirm Email" />
            </form>
        )
    }
}