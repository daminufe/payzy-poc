import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import {DemoDashboard, DemoDashboardHome, DemoDashboardAbout} from './services/DemoDashboard';
import {BiaPT, BiaPTHome, BiaPTCancelTransaction} from './services/BiaPT';
import {BankSimulation, BankSimulationHome, BankSimulationConfirmation, BankSimulationSmsToken} from './services/BankSimulation';

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


          <Route exact path="/bia.pt/cart" render={(props) => (
            <BiaPT>
              <BiaPTHome {...props}/>
            </BiaPT>
          )} />
          <Route exact path="/bia.pt/cancel/:transactionId" render={(props) => (
            <BiaPT>
              <BiaPTCancelTransaction {...props}/>
            </BiaPT>
          )} />


          <Route exact path="/bank-simulation/:bank/login" render={(props) => (
            <BankSimulation>
              <BankSimulationHome {...props}/>
            </BankSimulation>
          )} />
          <Route exact path="/bank-simulation/:bank/confirmation" render={(props) => (
            <BankSimulation>
              <BankSimulationConfirmation {...props}/>
            </BankSimulation>
          )} />
          <Route exact path="/bank-simulation/:bank/sms-token" render={(props) => (
            <BankSimulation>
              <BankSimulationSmsToken {...props}/>
            </BankSimulation>
          )} />
        </Switch>
      </BrowserRouter>

    );
  }
}

export default App;


