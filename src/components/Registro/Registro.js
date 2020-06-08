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
import registro from "../../services/ServicioRegistro";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ username: event.target.value });
  }

  handleChangePassword(event) {
    console.log(event.target.value);
    this.setState({
      username: this.state.username,
      password: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    var result = await registro(this.state.username, this.state.password);
    if (result.data.success) {
      return this.props.history.push("/login");
    } else {
      alert("Something went wrong, please try again");
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Sign in</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="exampleInputEmail1">Username:</label>

            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <small id="emailHelp" class="form-text text-muted">
              (You can trust us)
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password:</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
          </div>
          <button type="submit" class="btn btn-primary" value="Submit">
            Submit
          </button>
        </form>
        <Link to="/login" className="enlace">
          Already have an account?
        </Link>
      </div>
    );
  }
}

export default Signin;
