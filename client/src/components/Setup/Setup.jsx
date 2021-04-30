import React from 'react';
import SetupContent from '../SetupContent/SetupContent';
import { ReactComponent as Logo } from '../../assets/images/Logo.svg';
import './Setup.scss'

function Setup(props) {
    return (
        <div className="setup">
            <Logo className="setup__logo"/>
            <SetupContent
                content={props.content}
                nextPage={props.nextPage}
                bannerClickHandler={props.clickHandler}
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
