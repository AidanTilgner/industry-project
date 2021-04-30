import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import Setup from '../../components/Setup/Setup.jsx';
import SetupContent from '../../components/SetupContent/SetupContent.jsx'

function GettingStarted() {
    return (
        <div className="getting-started">
            <Switch>
                <Route path="/welcome"
                    render={props => {
                        <Setup
                            content={<SetupContent/>}
                            nextLink="/1"
                        />
                    }}
                />
                <Route path="/1" 
                    render={props => {
                        <Setup
                            content={<SetupContent/>}
                            nextLink="/2"
                        />
                    }}
                />
                <Route path="/2" 
                    render={props => {
                        <Setup
                            content={<SetupContent/>}
                            nextLink="/3"
                        />
                    }}
                />
                <Route path="/3" 
                    render={props => {
                        <Setup
                            content={<SetupContent/>}
                            nextLink="/4"
                        />
                    }}
                />
                <Route path="/4" 
                    render={props => {
                        <Setup
                            content={<SetupContent/>}
                            nextLink="/5"
                        />
                    }}
                />
                <Route path="/5" 
                    render={props => {
                        <Setup
                            content={<SetupContent/>}
                            nextLink="/6"
                        />
                    }}
                />
                <Route path="/6" 
                    render={props => {
                        <Setup
                            content={<SetupContent/>}
                            nextLink="/7"
                        />
                    }}
                />
            </Switch>
        </div>
    )
}

export default GettingStarted
