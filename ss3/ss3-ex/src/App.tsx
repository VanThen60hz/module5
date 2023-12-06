// App.tsx
import React, { Component, ChangeEvent } from "react";
import "./App.css";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";

interface FormState {
  email: string;
  password: string;
  isRemember: boolean;
}

interface AppState {
  form: FormState;
  isValid: boolean;
  isLoggedIn: boolean;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      form: { email: "", password: "", isRemember: false },
      isValid: false,
      isLoggedIn: false,
    };
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    this.setState(
      (prevState) => ({
        form: {
          ...prevState.form,
          [name]: value,
        },
      }),
      this.checkValidForm
    );
  };

  handleChangeCheckbox = () => {
    const { form } = this.state;
    form.isRemember = !form.isRemember;
    this.setState({ form }, this.checkValidForm);
  };

  checkValidForm = () => {
    const { email, password } = this.state.form;
    const isValid = email && password;
    this.setState({ isValid: !!isValid });
  };

  handleSubmit = () => {
    if (this.state.isValid) {
      this.setState({ isLoggedIn: true });
    }
  };

  handleLogOut = () => {
    this.setState({ isLoggedIn: false });
    const { form } = this.state;
    if (!form.isRemember) {
      this.setState({ form: { email: "", password: "", isRemember: false } });
    }
  };

  render() {
    const { isLoggedIn, form } = this.state;

    if (isLoggedIn) {
      return <Home onLogOut={this.handleLogOut} />;
    }

    return (
      <Login
        form={form}
        onChange={this.handleChange}
        onChangeCheckbox={this.handleChangeCheckbox}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default App;
