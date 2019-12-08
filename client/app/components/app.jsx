import React from "react";
import Login from "./login.jsx";
import Landing from "./landing.jsx";
import SearchForm from "./searchform.jsx";
import { Link, hashHistory } from "react-router";
//import Alert from "react-s-alert";
import MainNav from "./main_nav.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillMount() {
    if (window.localStorage.getItem("userToken") == null) {
      hashHistory.push("landing");
    }
  }

  handleLogout() {
    window.localStorage.setItem("userToken", "");
    window.localStorage.setItem("user_id", "");
    window.localStorage.setItem("admin", "");
    //Alert.success("You've been successfully logged out");
  }

  render() {
    var that = this;
    return (
      <div>
        <nav className="navbar navbar-expand-md mainheader">
          {window.localStorage.getItem("userToken") ? (
            <div className="navbar">
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#collapsibleNavbar"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
          ) : (
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item px-2">
                  <button
                    type="button"
                    className="btn btn-outline-light btn-round"
                  >
                    <Link to="user_signup" className="none-deco">
                      Join Now!
                    </Link>
                  </button>
                </li>
                <li className="nav-item">
                  <button type="button" className="btn btn-secondary btn-round">
                    <Link to="login" className="btn-text">
                      Sign In
                    </Link>
                  </button>
                </li>
              </ul>
            </div>
          )}
          {window.localStorage.getItem("userToken") ? (
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
              <ul className="navbar-nav ml-auto">
                {window.localStorage.getItem("admin") === "1" ? (
                  <li className="nav-item px-2">
                    <button
                      type="button"
                      className="btn btn-secondary btn-round"
                    >
                      <Link to="admin" className="btn-text">
                        Admin
                      </Link>
                    </button>
                  </li>
                ) : (
                  ""
                )}
                <li className="nav-item px-2">
                  <button type="button" className="btn btn-secondary btn-round">
                    <Link to="article/new" className="btn-text">
                      New Article
                    </Link>
                  </button>
                </li>
                <li className="nav-item">
                  <button type="button" className="btn btn-secondary btn-round">
                    <a href="" className="btn-text" onClick={this.handleLogout}>
                      Logout
                    </a>
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div />
          )}
        </nav>
        <MainNav />
        <div>{that.props.children}</div>
        <footer>
          <div className="footer-darkgrey">
            <div className="container bottom_border">
              <div id="full-page" className="row justify-content-between">
                <div className="col-md-3">
                  <div className="row">
                    <div className="col-4">
                      <img
                        id="footer-logo"
                        src="../assets/logos/VPIA-logo-white.png"
                        alt="VPIA logo"
                        aria-label="VPIA logo"
                      ></img>
                    </div>

                    <div className="col-6 align-self-center footer-list">
                      <ul className="footer_ul">
                        <li>
                          <a href="">About</a>
                        </li>

                        <li>
                          <a href="">User Agreement</a>
                        </li>

                        <li>
                          <a href="">Privacy Policy</a>
                        </li>

                        <li>
                          <a href="">Tutorials</a>
                        </li>
                        <li>
                          <a href="">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-3">
                  <div className="social-icons">
                    <ul className="social-network">
                      <li>
                        <a href="#" aria-label="Instagram icon">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" aria-label="Twitter icon">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" aria-label="Facebook icon">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" aria-label="Website icon">
                          <i className="fa fa-globe"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control email-form"
                      placeholder="Stay in touch"
                      ref="search"
                      aria-label="Write an Email here"
                    />
                    <div className="input-group-append">
                      <button
                        type="submit"
                        className="btn btn-outline-secondary email-button"
                        aria-label="Email button"
                      >
                        <i className="fa fa-paper-plane"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-lightgrey">
            <div className="container bottom_border">
              <div className="row">
                <div className="col">
                  <p>
                    We acknowledge the support of the Canada Council for the
                    Arts.
                  </p>
                  <img
                    src="../assets/logos/CCA_RGB_white_e.png"
                    alt="CCA logo"
                    height="33"
                    aria-label="CCA logo"
                  />
                </div>
                <div className="col"></div>
              </div>
            </div>
          </div>
        </footer>
        {/*<Alert stack={{ limit: 3 }} position="bottom" />*/}
      </div>
    );
  }
}

export default App;
