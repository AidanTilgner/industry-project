import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import Setup from '../../components/Setup/Setup';

function GettingStarted() {
    return (
        <div className="getting-started">
            <Switch>
                <Route path="/1" 
                    render={props => {
                        <Setup
                            content="1"
                            buttonContent="proceed"
                            nextLink="/2"
                        />
                    }}
                />
                <Route path="/2" 
                    render={props => {
                        <Setup
                            content="2"
                            buttonContent="generate"
                            nextLink="/3"
                        />
                    }}
                />
                <Route path="/3" 
                    render={props => {
                        <Setup
                            content="3"
                            buttonContent="proceed"
                            nextLink="/4"
                        />
                    }}
                />
                <Route path="/4" 
                    render={props => {
                        <Setup
                            content="4"
                            buttonContent="proceed"
                            nextLink="/5"
                        />
                    }}
                />
                <Route path="/5" 
                    render={props => {
                        <Setup
                            content="5"
                            buttonContent="proceed"
                            nextLink="/6"
                        />
                    }}
                />
                <Route path="/6" 
                    render={props => {
                        <Setup
                            content="6"
                            buttonContent="proceed"
                            nextLink="/7"
                        />
                    }}
                />
                <Route path="/7" 
                    render={props => {
                        <Setup
                            content="7"
                            buttonContent="done"
                            nextLink="/home"
                        />
                    }}
                />
            </Switch>
        </div>
    )
}

export default GettingStarted
