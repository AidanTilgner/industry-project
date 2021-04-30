import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import Setup from '../../components/Setup/Setup';

class GettingStarted extends React.Component{
    state={
        page: 'welcome',
    }
    render(){
        return (
            <div className="getting-started">
                {
                    this.state.page === 'welcome' &&
                    <Setup
                        content="welcome"
                        buttonContent="Continue"
                    />
                }
                {
                    this.state.page === "generate" &&
                    <Setup
                        content="generate"
                        buttonContent="Generate"
                    />
                }
                {
                    this.state.page === "smart-seed" &&
                    <Setup
                        content="smart-seed"
                        buttonContent="Continue"
                    />
                }
                {
                    this.state.page === "verify-smart-seed" &&
                    <Setup
                        content="verify-smart-seed"
                        buttonContent=""
                    />
                }
                {
                    this.state.page === "ready" &&
                    <Setup
                        content="ready"
                        buttonContent=""
                    />
                }
                {
                    this.state.page === "success" &&
                    <Setup
                        content="success"
                        buttonContent="Done"
                    />
                }
            </div>
        )
    }
}

export default GettingStarted
