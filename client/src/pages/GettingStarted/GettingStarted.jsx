import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';

function GettingStarted() {
    return (
        <div className="getting-started">
            <Switch>
                <Route path="/welcome"
                    render={props => {
                        <Setup
                            content={<Component/>}
                            nextLink="/1"
                        />
                    }}
                />
                <Route path="/1" 
                    render={props => {
                        <Setup
                            content={<Component/>}
                            nextLink="/2"
                        />
                    }}
                />
                <Route path="/2" 
                    render={props => {
                        <Setup
                            content={<Component/>}
                            nextLink="/3"
                        />
                    }}
                />
                <Route path="/3" 
                    render={props => {
                        <Setup
                            content={<Component/>}
                            nextLink="/4"
                        />
                    }}
                />
            </Switch>
        </div>
    )
}

export default GettingStarted
