import React, { Component } from "react";
import Home from "./components/Home";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogIn: false,
    };
  }

  handleLogin = () => {
    this.setState({
      isLogIn: true,
    });
  };

  handleLogout = () => {
    this.setState({
      isLogIn: false,
    });
  };

  render() {
    const { isLogIn } = this.state;
    if (isLogIn) {
      return <Home onLogout={this.handleLogout} />;
    }
    return (
      <div style={{ textAlign: "center" }}>
        <div>
          <h1>Please log in</h1>
          <button onClick={this.handleLogin}>Log in</button>
        </div>
      </div>
    );
  }
}

export default App;
