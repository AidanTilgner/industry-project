import React from 'react';
import { ReactComponent as Unlocked } from '../../assets/icons/unlocked.svg'

class SetupContent extends React.Component{
    render(){
    return (
        <div>
            {
                this.props.content === "welcome" &&
                <>
                    <h3 className="setup__title">Welcome</h3>
                    <p className="setup__paragraph">
                        Smart Seed is a digital identity builder. We use blockchain technology to keep all your 
                        online transactions secure. 
                    </p>
                    <p className="setup__paragraph">
                        We will take you through the creation of your Smart Seed 12-word 
                        phrase used to secure your digital ID. 
                    </p>
                    <p className="setup__paragraph">
                        Please write down your 12-word phase, in order, and keep 
                        in a safe place. You will not be able to recover your phrase if you lose or forget it.
                    </p>
                </>
            }
            {
                this.props.content === "generate" &&
                <>
                    <Unlocked className="setup__icon"/>
                    <p className="setup__paragraph">
                        We will now generate your Smart Seed 12-word phrase. 

                        Please be prepared to take 5 minutes:
                    </p>
                    <ul className="setup__list">
                        <li className="setup__list-item">
                            Write this down with pen and paper
                        </li>
                        <li className="setup__list-item">
                            Store it in a safe place
                        </li>
                        <li className="setup__list-item">
                            Do not screenshot or store this digitally
                        </li>
                    </ul>
                </>
            }
        </div>
    )}
}

export default SetupContent
