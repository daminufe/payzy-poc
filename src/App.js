import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import {DemoDashboard, DemoDashboardHome} from './services/DemoDashboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <DemoDashboard>
            <Switch>
              <Route exact path="/" component={DemoDashboardHome}/>

            </Switch>
          </DemoDashboard>
        </Switch>
      </BrowserRouter>

    );
  }
}

export default App;
