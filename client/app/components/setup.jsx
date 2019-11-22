import React from "react";
import { hashHistory } from "react-router";
import Loader from "./loader.jsx";
//import Alert from "react-s-alert";

class Setup extends React.Component {
  constructor(props) {
    super(props);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleSignUp() {
    var user = {
      name: encodeURIComponent(this.refs.user_name.value),
      about: encodeURIComponent(this.refs.user_about.value),
      email: encodeURIComponent(this.refs.user_email.value),
      password: encodeURIComponent(this.refs.user_password.value)
    };
    var myHeaders = new Headers({
      "Content-Type": "application/x-www-form-urlencoded"
    });
    var myInit = {
      method: "POST",
      headers: myHeaders,
      body:
        "name=" +
        user.name +
        "&about=" +
        user.about +
        "&email=" +
        user.email +
        "&password=" +
        user.password
    };
    var that = this;
    fetch("/setup", myInit)
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        if (response.error.error) {
        } //Alert.error(response.error.message);
        else {
          //Alert.success("Admin user generated");
          hashHistory.push("login");
        }
      });
  }

  render() {
    return (
      <div id="fullpage" className="container-fluid">
        <div className="row">
          <div className="col-4 left-panel">
            <img
              src="../assets/logos/logo-white.png"
              width="auto"
              height="250px"
              alt="VPIA logo"
              aria-label="VPIA logo"
            />
            <div className="setup-form container">
              <div className="col-md-12 col-sm-12">
                <form>
                  <div className="col-sm-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      ref="user_name"
                      id="inputUserName"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-sm-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      ref="user_about"
                      id="inputUserAbout"
                      placeholder="About"
                    />
                  </div>
                  <div className="col-sm-12 form-group">
                    <input
                      type="email"
                      className="form-control"
                      ref="user_email"
                      id="inputUserEmail"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-sm-12 form-group">
                    <input
                      type="password"
                      className="form-control"
                      ref="user_password"
                      id="inputUserPassword"
                      placeholder="Password"
                    />
                  </div>
                  <div className="col-sm-12 form-group">
                    <button
                      onClick={this.handleSignUp}
                      className="btn btn-outline-light btn-block"
                    >
                      Setup My Admin Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-8 BGimage image-fade">
            <img
              src="../assets/logos/logo.png"
              width="auto"
              height="400px"
              alt="VPIA logo"
              aria-label="VPIA logo"
              id="logo-bottom-right"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Setup;
