import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Signin from "./components/Registro/Registro";
import Listing from "./components/Listado/Listado";
import Ad from "./components/DetalleAnuncio/DetalleAnuncio";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <Router>
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              {/*<a className="navbar-brand" href="#">
                <img src={logo} className="App-logo" alt="logo" />
              </a>*/}

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <Link to="/signin" class="nav-link">
                      SignIn
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/login" class="nav-link">
                      Login
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/listing" class="nav-link">
                      Listing
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>

            <hr />
            <Switch>
              <Route path="/signin" component={Signin} />
              <Route path="/login" component={Login} />
              <Route path="/listing" component={Listing} />
              <Route path="/ad-details/:idAnuncio" component={Ad} />
              <Redirect to="/" />
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
