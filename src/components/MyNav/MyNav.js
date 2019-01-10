import React from 'react';
import authMethods from '../../helpers/authMethods/authMethods';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import './MyNav.scss';

class MyNav extends React.Component {
  state = {
    isOpen: false,
  }

  render() {
    if (this.props.authed) {
      return (
        <div>
          <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">Home for the Holidays</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="selector">
                  <NavLink>Friends</NavLink>
                </NavItem>
                <NavItem className="selector">
                  <NavLink>Holidays</NavLink>
                </NavItem>
                <NavItem className="selector">
                  <NavLink>New Friend</NavLink>
                </NavItem>
                <NavItem className="selector">
                  <NavLink>New Holidays</NavLink>
                </NavItem>
                <NavItem className="selector" onClick={authMethods.logout}>
                  <NavLink>Signout</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }

    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Home for the Holidays</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MyNav;
