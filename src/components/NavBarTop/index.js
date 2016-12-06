import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { IndexLink } from 'react-router';
import { logout } from 'redux/modules/auth';
import { push } from 'react-router-redux';
import { Icon } from './../Helper';

@connect(
  state => ({
    notifs: state.notifs,
    user: state.auth.user
  }),
  { logout, pushState: push })
export default class NavBarTop extends React.Component {

  static propTypes = {
    brandName: React.PropTypes.string.isRequired,
    user: React.PropTypes.object,
    pushState: React.PropTypes.func.isRequired,
    logout: React.PropTypes.func.isRequired,
  };

  static contextTypes = {
    store: React.PropTypes.object.isRequired,
  };

  componentWillReceiveProps(nextProps) {
    if (!this.props.user && nextProps.user) {
      // login
      this.props.pushState('/loginSuccess');
    } else if (this.props.user && !nextProps.user) {
      // logout
      this.props.pushState('/');
    }
  }

  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    const styles = require('./NavBarTop.scss');
    const { brandName, user } = this.props;
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <IndexLink to="/" className={styles.title}>
              <span>{brandName}</span>
            </IndexLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav navbar activeKey={0} pullRight>

            {/*
            <LinkContainer to="/about">
              <NavItem eventKey={4}>About Us</NavItem>
            </LinkContainer>


            {!user && <LinkContainer to="/login">
              <NavItem eventKey={5}>Login</NavItem>
            </LinkContainer>}
            {!user && <LinkContainer to="/register">
              <NavItem eventKey={6}>Register</NavItem>
            </LinkContainer>}
            {user && <LinkContainer to="/logout">
              <NavItem eventKey={7} className="logout-link" onClick={this.handleLogout}>
                Logout
              </NavItem>
            </LinkContainer>}
            */}
            <NavItem
              eventKey={1}
              href="https://twitter.com/Sponsors4athle1"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon name="twitter" />
            </NavItem>

            <NavItem
              eventKey={2}
              target="_blank"
              title="Instagram"
              href="https://www.instagram.com/sponsors4athletes/"
            >
              <Icon name="instagram" />
            </NavItem>

          </Nav>
          {user && <p className="navbar-text">
            Logged in as <strong>{user.email}</strong>.
          </p>}
        </Navbar.Collapse>


      </Navbar>
    );
  }
}
