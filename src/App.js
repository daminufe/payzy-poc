import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import {DemoDashboard, DemoDashboardHome, DemoDashboardAbout} from './services/DemoDashboard';
import {PaymentFlow, PaymentFlowHome} from './services/PaymentFlow';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={(props) => (
            <DemoDashboard>
              <DemoDashboardHome {...props}/>
            </DemoDashboard>
          )} />
          <Route exact path="/about" render={(props) => (
            <DemoDashboard>
              <DemoDashboardAbout {...props}/>
            </DemoDashboard>
          )} />
          <Route exact path="/payment-flow" render={(props) => (
            <PaymentFlow>
              <PaymentFlowHome {...props}/>
            </PaymentFlow>
          )} />
        </Switch>
      </BrowserRouter>

    );
  }
}

export default App;


