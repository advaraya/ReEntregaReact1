import React from "react";
import { render } from "@testing-library/react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
  Redirect,
} from "react-router-dom";
import login from "../../services/ServicioLogin";

class MyLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", err: "", messageOK: "" };

    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    let loginResponse = await login(this.state.username, this.state.password);
    if (loginResponse.data.success) {
      localStorage.setItem("cookie-login", this.state.username);
      return this.props.history.push("/listing");
    } else {
      alert("Something went wrong, please try again");
    }
  }
  handleChangeUser(event) {
    console.log(event.target.value);
    this.setState({
      username: event.target.value,
    });
  }
  handleChangePassword(event) {
    console.log(event.target.value);
    this.setState({
      password: event.target.value,
    });
  }
  render() {
    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="exampleInputEmail1">Username:</label>

            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={this.state.username}
              onChange={this.handleChangeUser}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password:</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
          </div>
          <button type="submit" className="btn btn-primary" value="Submit">
            Submit
          </button>
        </form>
        <Link to="/signin" className="enlace">
          Don´t have an account? Sign in
        </Link>
      </div>
    );
  }
}

export default MyLogin;
