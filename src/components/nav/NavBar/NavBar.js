import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import Anonymous from "../menus/Anonymous";
import SignedIn from "../menus/SignedIn";

class NavBar extends Component {
  state = {
    isAuth: false,
  };

  handleSignIn = () => {
    this.setState({
      isAuth: true,
    });
  };
  handleSignOut = () => {
    this.setState({
      isAuth: false,
    });
    this.props.history.push("/");
  };
  render() {
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} to="/" header>
            <img src="assets/images/logo.png" alt="logo" />
            Re-vents
          </Menu.Item>
          <Menu.Item name="Events" as={NavLink} to="/events" />
          <Menu.Item name="People" as={NavLink} to="/people" />
          <Menu.Item>
            <Button
              floated="right"
              positive
              inverted
              content="Create Event"
              as={Link}
              to="/createEvent"
            />
          </Menu.Item>
          {this.state.isAuth ? (
            <SignedIn signout={this.handleSignOut} />
          ) : (
            <Anonymous signin={this.handleSignIn} />
          )}
        </Container>
      </Menu>
    );
  }
}
export default withRouter(NavBar);
