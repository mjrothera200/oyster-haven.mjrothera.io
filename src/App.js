import React, { Component } from 'react';
import './App.scss';

import OysterHeader from './components/OysterHeader';
import { Content } from 'carbon-components-react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';

class App extends Component {
  render() {
    return (
      <div>
        <OysterHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
          </Switch>
        </Content>
      </div>
    );
  }
}

export default App;