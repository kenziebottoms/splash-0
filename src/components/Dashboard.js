import React from "react";

import authService from "../services/auth";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: !!authService.currentUserToken()
    };
  }
  componentDidMount() {
    if (!this.state.authenticated) authService.authenticate();
  }
  render() {
    return this.state.authenticated ? (
      <h3>Authenticated</h3>
    ) : (
      <h3>Unauthenticated</h3>
    );
  }
}
