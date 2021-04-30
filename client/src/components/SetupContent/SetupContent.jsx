import React from 'react';
import SeedForm from '../../components/SeedForm/SeedForm';
import { ReactComponent as Unlocked } from '../../assets/icons/unlocked.svg';
import { ReactComponent as Key } from '../../assets/icons/key.svg';
import { ReactComponent as Keyhole } from '../../assets/icons/keyhole.svg';
import { ReactComponent as Locked } from '../../assets/icons/locked.svg';
import './SetupContent.scss';

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
            {
                this.props.content === "smart-seed" &&
                <>
                    <Key className="setup__icon"/>
                    <p>Here is your Smart Seed Phrase. For your safety, do not screenshot.</p>
                    <SeedForm 
                        formType="generate"
                    />
                </>
            }
            {
                this.props.content === "verify-smart-seed" &&
                <>
                    <Keyhole className="setup__icon"/>
                    <SeedForm 
                        formType="verify"
                        bannerClickHandler={this.props.bannerClickHandler}
                    />
                </>
            }
            {
                this.props.content === "success" &&
                <>
                    <Locked className="setup__icon"/>
                    <h3 className="setup__title">Success!</h3>
                    <p className="setup__paragraph">
                        We don’t need any personal information, 
                        but we will need you to input your Smart Seed to access this app. 
                    </p>
                    <p className="setup__paragraph">
                        The more protected you keep your Smart Seed, the more secure your wallet will be.
                    </p>
                </>
            }
        </div>
    )}
}

export default SetupContent;
