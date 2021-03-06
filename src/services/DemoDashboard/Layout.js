import React from 'react';
import {
  Container
} from 'reactstrap';

import Navbar from '../../components/Navbar';
import PayzyLogo from '../../assets/logo-payzy.svg';

const menuItems = [
  { url: '/about', title: 'About us' }
];

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Navbar logo={PayzyLogo} items={menuItems} />

        <Container style={{ marginTop: '3.5rem', paddingTop: '1rem' }}>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default Layout;
