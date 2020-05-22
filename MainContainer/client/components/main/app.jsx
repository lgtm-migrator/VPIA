/* --------------------------------------------------------------------------------------------------------------------------------------------
  This is the main App container component along with the main headers and footer.
*/
import React from "react";
import { Link, hashHistory } from "react-router";
import StatusAlert, { StatusAlertService } from "react-status-alert";
import MainNav from "./main_nav.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.state = { isFocused: false };
  }

  /* --------------------------------------------------------------------------------------------------------------------------------------------
  Onload, If the user is not signed in, forcibly redirect them to the landing page.
*/
  componentWillMount() {
    if (window.localStorage.getItem("userToken") == null) {
      hashHistory.push("landing");
    }
  }
  // --------------------------------------------------------------------------------------------------------------------------------------------
  // Set states when focusing(clicking) on the search bar

  onBlur() {
    if (this.state.isFocused) {
      this.setState({
        isFocused: false
      });
    }
  }

  onFocus() {
    this.setState({ isFocused: true });
  }
  /* --------------------------------------------------------------------------------------------------------------------------------------------
  handleLogout() - Clears all localstorage variables on logout.
*/
  handleLogout() {
    window.localStorage.setItem("userToken", "");
    window.localStorage.setItem("user_id", "");
    window.localStorage.setItem("admin", "");
    StatusAlertService.showSuccess("You've been successfully logged out");
  }

  /* --------------------------------------------------------------------------------------------------------------------------------------------
  Displays headers, footers, checks if user is admin and gives link to Admin component.
*/
  render() {
    var that = this;
    return (
      <div>
        <StatusAlert />
        <nav className="navbar navbar-expand-lg navbar-dark mainheader">
          <div
            class="alert alert-secondary alert-dismissible fade show"
            role="alert"
          >
            This platform is currently an Alpha - meaning that the design and
            features are subject to change. If you identify any major bugs or
            would like to comment on the platform's functionality, please{" "}
            <a href="mailto:vpia@ocadu.ca">send us an email.</a>
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          {window.localStorage.getItem("userToken") ? (
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          ) : (
            <div>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
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
                  <li className="nav-item px-2">
                    <button
                      type="button"
                      className="btn btn-secondary btn-round"
                    >
                      <Link to="login" className="btn-text">
                        Sign In
                      </Link>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {window.localStorage.getItem("userToken") ? (
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
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
                <li className="nav-item px-2">
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
        <MainNav onBlur={this.onBlur} onFocus={this.onFocus} />
        <div
          className={
            this.state.isFocused ? "SearchOverlay-focus" : "SearchOverlay-blur"
          }
        ></div>
        <div>{that.props.children}</div>
        <footer>
          <div className="footer-darkgrey">
            <div className="container bottom_border">
              <div id="full-page" className="row justify-content-between">
                <div className="col-md-3">
                  <div className="row">
                    <div className="col-lg-4">
                      <img
                        id="footer-logo"
                        src="../assets/images/VPIA-logo-white.png"
                        alt="VPIA logo"
                        aria-label="VPIA logo"
                      ></img>
                    </div>

                    <div className="col-lg-6 align-self-center footer-list">
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

                <div className="col-lg-3">
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
                <div className="col col-lg">
                  <p className="acknowledge-text">
                    We acknowledge the support of the Canada Council for the
                    Arts.
                  </p>
                  <img
                    src="../assets/images/CCA_RGB_white_e.png"
                    alt="CCA logo"
                    height="33"
                    aria-label="CCA logo"
                  />
                </div>
                <div className="col col-lg">
                  <img
                    src="../assets/images/Wapatah-logo-white.png"
                    alt="Wapatah logo"
                    height="60"
                    aria-label="Wapatah logo"
                  />
                </div>
                <div className="col col-lg">
                  <img
                    src="../assets/images/CFI-logo.png"
                    alt="CFI logo"
                    height="70"
                    aria-label="CFI logo"
                  />
                </div>
                <div className="col col-lg">
                  <img
                    src="../assets/images/Onsite-logo.png"
                    alt="Onsite logo"
                    height="60"
                    aria-label="Onsite logo"
                  />
                </div>
                <div className="col col-lg">
                  <img
                    src="../assets/images/OCAD-University-Logo.png"
                    alt="OCAD logo"
                    height="70"
                    aria-label="OCAD logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;