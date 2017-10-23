import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

import logo from '../../assets/logo.svg';

const logoStyle = {
  height: '3rem',
  position: 'absolute',
  top: '0.3rem'
};

const navBarStyle = {
  boxShadow: '0 0 0.3rem 0 #333e48',
  background: '#fff'
};

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="faded" fixed="top" light expand="md" style={navBarStyle}>
          <Container>
            <NavbarBrand href="/"><img src={logo} alt="PAYZY" style={logoStyle} /></NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
              </NavItem>
            </Nav>
          </Container>
        </Navbar>

        <Container style={{ marginTop: '3.5rem', paddingTop: '1rem' }}>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default Layout;