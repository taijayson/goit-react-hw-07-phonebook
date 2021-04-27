import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../redux/auth/authOperations";

class RegisterPage extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onRegister(this.state);
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit} autocomplete="off">
          <label>
            Name
            <input
              type="name"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { onRegister: register };

export default connect(null, mapDispatchToProps)(RegisterPage);
