import React from 'react'

function Banner() {
    return (
        <div>
            <div className="setup__banner">
                <h3 className="setup__title">Are you ready?</h3>
                <p className="setup__paragraph">
                These words enable you to access your digital assets. 
                
                </p>
                <p className="setup__title">
                    If you lose these words, or someone else gains access to 
                    them you might lose your digital assets.
                </p>
                <p className="setup__title"> 
                    By using this app, you acknowledge that it is your responsibility 
                    to keep these words private and safe.
                </p>
                <button
                    className="setup__button setup__button__banner-button"
                    onClick={() => {
                        () => {this.props.clickHandler(this.props.nextPage)}
                    }}
                >
                    Accept
                </button>
                <button
                    className="setup__button setup__button__banner-button"
                    onClick={() => {
                        alert('Please Accept')
                    }}
                >
                    Decline
                </button>
            </div>
        </div>
    )
}

export default Banner
