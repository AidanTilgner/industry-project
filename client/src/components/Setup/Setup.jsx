import React from 'react';
import SetupContent from '../SetupContent/SetupContent';
import { ReactComponent as Logo } from '../../assets/images/Logo.svg';

function Setup(props) {
    return (
        <div>
            <Logo/>
            <SetupContent
                content={props.content}
            />
            <button>{props.buttonContent}</button>
        </div>
    )
}

export default Setup;
