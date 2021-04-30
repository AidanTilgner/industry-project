import React from 'react';
import SetupContent from '../SetupContent/SetupContent';
import { ReactComponent as Logo } from '../../assets/images/Logo.svg';
import './Setup.scss';

function Setup(props) {
    return (
        <div className="setup">
            <Logo/>
            <SetupContent
                content={props.content}
            />
            {
                props.buttonContent &&
                <button className="setup-button"
                    onClick={() => {
                        props.clickHandler(props.nextPage)
                    }}
                >
                    {props.buttonContent}
                </button>
            }
        </div>
    )
}

export default Setup;
