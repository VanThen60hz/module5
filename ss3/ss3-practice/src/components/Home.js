import React, { Component } from "react";

class Home extends Component {
  state = {};
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Welcome</h1>
        <button onClick={this.props.onLogout}>Log out</button>
      </div>
    );
  }
}

export default Home;
