import React from 'react';
import {
  Container
} from 'reactstrap';
import {withRouter} from 'react-router-dom';

import Navbar from '../../components/Navbar';
import BiaptLogo from '../../assets/logo-biapt.svg';

const menuItems = [
  { url: '/payment-flow', title: 'e-commerce demo' },
  { url: '/payment-flow', title: <div><span className="fa fa-shopping-basket" /> 2</div> }
];

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Navbar logo={BiaptLogo} items={menuItems}/>

        <Container style={{ marginTop: '3.5rem', paddingTop: '1rem' }}>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default withRouter(Layout);
