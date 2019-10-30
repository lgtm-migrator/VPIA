import React from "react";
import Login from "./login.jsx";
import SearchForm from "./searchform.jsx";
import { Link, hashHistory } from "react-router";
import Alert from "react-s-alert";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillMount() {
    if (window.localStorage.getItem("userToken") == null) {
      hashHistory.push("login");
    }
  }

  handleLogout() {
    window.localStorage.setItem("userToken", "");
    Alert.success("You've been successfully logged out");
  }

  render() {
    var that = this;
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          {window.localStorage.getItem("userToken") ? (
            <div className="navbar">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link
                to="home"
                className="navbar-brand"
                aria-label="homepage link"
              >
                <img
                  class="navbar-brand"
                  src="../assets/logo.png"
                  width="181"
                  height="auto"
                  alt="VPIA logo"
                  aria-label="VPIA logo"
                ></img>
              </Link>
            </div>
          ) : (
            <div className="container-fluid">
              <div className="navbar-brand nav-left">
                <Link
                  to="landing"
                  className="navbar-brand"
                  aria-label="homepage link"
                >
                  <img
                    className="navbar-brand"
                    src="../assets/logo.png"
                    width="181"
                    height="auto"
                    alt="VPIA logo"
                    aria-label="VPIA logo"
                  ></img>
                </Link>
              </div>
              <nav className="navbar navbar-expand-md">
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <button type="button" className="btn">
                        <Link to="/user_signup" className="joinnow-text">
                          Join Now!
                        </Link>
                      </button>
                    </li>
                    <li className="nav-item">
                      <button type="button" className="btn signin-btn">
                        <Link to="login" className="signin-text">
                          Sign In
                        </Link>
                      </button>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          )}
          {window.localStorage.getItem("userToken") ? (
            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav navbar-right">
                {window.localStorage.getItem("userId") == 1 ? (
                  <li>
                    <Link to="admin" className="">
                      Admin
                    </Link>
                  </li>
                ) : (
                  ""
                )}
                <li>
                  <Link to="article/new" className="">
                    New Article
                  </Link>
                </li>
                <li>
                  <a href="" onClick={this.handleLogout}>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <div />
          )}
        </nav>
        <div className="content">{that.props.children}</div>
        <footer className="footer">
          <div className="container bottom_border">
            <div className="row">
              <div className="col col-lg-2">
                <img
                  src="../assets/logo.png"
                  width="auto"
                  height="76"
                  alt="VPIA logo"
                  aria-label="VPIA logo"
                ></img>
              </div>
              <div className="col col-lg-2">
                <ul className="footer_ul">
                  <li>
                    <a href="">Home</a>
                  </li>

                  <li>
                    <a href="">VPIA</a>
                  </li>

                  <li>
                    <a href="">Artwork</a>
                  </li>

                  <li>
                    <a href="">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="col col-lg-2">
                <ul className="footer_ul">
                  <li>
                    <a href="">Help</a>
                  </li>

                  <li>
                    <a href="">Terms</a>
                  </li>

                  <li>
                    <a href="">Tutorials</a>
                  </li>

                  <li>
                    <a href="">Careers</a>
                  </li>
                </ul>
              </div>

              <div className="col-sm-4 col-4 col">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control email-form"
                    placeholder="Email"
                    ref="search"
                  />
                  <div className="input-group-append">
                    <button
                      type="submit"
                      className="btn btn-outline-secondary email-button"
                    >
                      <i className="fa fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
                <p>Stay in touch with us!</p>
              </div>
            </div>
          </div>
        </footer>
        <Alert stack={{ limit: 3 }} position="bottom" />
      </div>
    );
  }
}

export default App;
