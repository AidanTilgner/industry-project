import React from 'react';
import SetupContent from '../SetupContent/SetupContent';
import { ReactComponent as Logo } from '../../assets/images/Logo.svg';

function Setup(props) {
    return (
        <div>
            <p>Hey I'm rendering</p>
            <Logo/>
            <SetupContent/>
            <button>{props.buttonContent}</button>
        </div>
    )
}

export default Setup;
