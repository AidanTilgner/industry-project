import './App.scss';
import {
  Switch, 
  Link,
  Route,
  Redirect
} from 'react-router-dom';
import GettingStarted from './pages/GettingStarted/GettingStarted';
import Home from './pages/Home/Home';

class App extends React.Component(){
  state={
    isUser: false,
  }

  render(){
    return (
      <div className="App">
        <Switch>
          {this.state.isUser ? <Redirect exact from="/" to="/home"/> : <Redirect exact from="/" to="/getting-started"/>}
          <Route path="/getting-started"
            render={props =>{
              <GettingStarted/>
            }}
          />
          <Route path="/home"
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
