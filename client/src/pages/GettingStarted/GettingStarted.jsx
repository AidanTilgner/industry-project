import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import Setup from '../../components/Setup/Setup';

class GettingStarted extends React.Component{
    state={
        page: 'welcome',
    }

    clickHandler = (nextPage) => {
        this.setState({
            page: nextPage,
        })
    }

    render(){
        return (
            <div className="getting-started">
                {
                    this.state.page === 'welcome' &&
                    <Setup
                        content="welcome"
                        buttonContent="Continue"
                        clickHandler={this.clickHandler}
                        nextPage="generate"
                    />
                }
                {
                    this.state.page === "generate" &&
                    <Setup
                        content="generate"
                        buttonContent="Generate"
                        clickHandler={this.clickHandler}
                        nextPage="smart-seed"
                    />
                }
                {
                    this.state.page === "smart-seed" &&
                    <Setup
                        content="smart-seed"
                        buttonContent="Continue"
                        clickHandler={this.clickHandler}
                        nextPage="verify-smart-seed"
                    />
                }
                {
                    this.state.page === "verify-smart-seed" &&
                    <Setup
                        content="verify-smart-seed"
                        buttonContent=""
                        clickHandler={this.clickHandler}
                        nextPage="ready"
                    />
                }
                {
                    this.state.page === "ready" &&
                    <Setup
                        content="ready"
                        buttonContent=""
                        clickHandler={this.clickHandler}
                        nextPage="success"
                    />
                }
                {
                    this.state.page === "success" &&
                    <Setup
                        content="success"
                        buttonContent="Done"
                        clickHandler={() => {
                            this.props.history.push('/verify')
                        }}
                    />
                }
            </div>
        )
    }
}

export default GettingStarted
