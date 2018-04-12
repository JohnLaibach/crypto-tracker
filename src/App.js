import React, { Component } from 'react'; 
import { BrowserRouter, Route, Switch } from "react-router-dom";

import List from './containers/List';
import Details from './containers/Details';
import Settings from './containers/Settings';
import Toolbar from './containers/Toolbar';
import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Toolbar />
          <Switch>
            <Route path="/details/:symbol" render={
              (props) => <Details {...props} />
            } />
            <Route path="/settings" component={Settings} />
            <Route path="*" component={List} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
