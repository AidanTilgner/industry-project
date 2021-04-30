import React from 'react'

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
                    
                </>
            }
        </div>
    )}
}

export default SetupContent
