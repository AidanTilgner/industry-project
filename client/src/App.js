import './App.scss';
import React from 'react';
import {
  Switch, 
  Link,
  Route,
  Redirect
} from 'react-router-dom';
import GettingStarted from './pages/GettingStarted/GettingStarted';
import Home from './pages/Home/Home';

class App extends React.Component{
  state={
    isUser: false,
  }

  render(){
    return (
      <div className="App">
        <p>Hello</p>
        <Switch>
          {this.state.isUser ? <Redirect exact from="/" to="/home"/> : <Redirect exact from="/" to="/getting-started"/>}
          <Route exact path="/getting-started">
            <GettingStarted/>
          </Route>
          <Route path="/test">
            <p>hey</p>
          </Route>
          <Route exact path="/home"
            render={props => {
              <Home/>
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
