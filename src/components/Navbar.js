import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from 'reactstrap';
import {Link} from 'react-router-dom';

const logoStyle = {
  height: '3rem',
  position: 'absolute',
  top: '0.3rem'
};

const navBarStyle = {
  boxShadow: '0 0 0.3rem 0 #333e48',
  background: '#fff'
};

class PayzyNavbar extends React.Component {
  render() {
    return (
      <Navbar color="faded" fixed="top" light expand="md" style={navBarStyle}>
        <Container>
          <NavbarBrand tag="div">
            <Link to="/">
              <img src={this.props.logo} alt="PAYZY" style={logoStyle}/>
            </Link>
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            {this.props.items.map((item, index) => (
              <NavItem key={index}>
                {item.url && (
                  <Link className="nav-link" to={item.url}>{item.title}</Link>
                )}
                {!item.url && item.title}
              </NavItem>
            ))}
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default PayzyNavbar;
