import React from 'react'
import { ReactComponent as MasterCardTitle } from '../../assets/images/MasterCardTitle.svg';
import './Home.scss';

function Home() {
    return (
        <div className="home">
            <div className="home-image">
                <MasterCardTitle />
            </div>
            <h1 className="home-welcome">
                Welcome to the pinnacle of online safety
            </h1>
            <button className="home-button">Sign Up</button>
            <button className="home-button">Login</button>
        </div>
    )
}

export default Home
