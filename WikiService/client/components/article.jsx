/* --------------------------------------------------------------------------------------------------------------------------------------------
  This component renders the main Wiki page Article and deals
  with all of the API needed.
*/
import React from "react";
import { Link, hashHistory } from "react-router";
import Loader from "./helpers/loader.jsx";
import InfoBox from "./infobox.jsx";
import StatusAlert, { StatusAlertService } from "react-status-alert";

class ViewArticle extends React.Component {
  constructor(props) {
    super(props);
    this.deleteArticle = this.deleteArticle.bind(this);
    this.state = { article: {}, user: {}, loading: true };
  }

  /* --------------------------------------------------------------------------------------------------------------------------------------------
  On initial load, GET ONE Article from Article API
*/
  componentDidMount() {
    let myHeaders = new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
      "x-access-token": window.localStorage.getItem("userToken")
    });

    let myInit = { method: "GET", headers: myHeaders };
    let that = this;

    fetch("/api/articles/" + that.props.params.articleId, myInit)
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        if (response.error.error) {
          StatusAlertService.showError(response.error.message);
        } else {
          that.setState({ article: response.data });
        }
        that.setState({ loading: false });
      })
      .then(() => {
        let myHeaders = new Headers({
          "Content-Type": "application/x-www-form-urlencoded",
          "x-access-token": window.localStorage.getItem("userToken")
        });

        let myInit = { method: "GET", headers: myHeaders };
        let that = this;

        fetch(
          `${process.env.USERSERVICE}/api/users/` +
            that.state.article[0].user_id,
          myInit
        )
          .then(function(response) {
            return response.json();
          })
          .then(function(response) {
            if (response.error.error) {
              StatusAlertService.showError(response.error.message);
            } else {
              that.setState({ user: response.data });
            }
            that.setState({ loading: false });
          });
      });
  }

  /* --------------------------------------------------------------------------------------------------------------------------------------------
  deleteArticle() - takes id, sends Delete request to Article and redirects
  user back to home.
*/
  deleteArticle(e) {
    e.preventDefault();
    let del = confirm("Are you sure you want to delete this article?");

    if (del) {
      let myHeaders = new Headers({
        "Content-Type": "application/x-www-form-urlencoded",
        "x-access-token": window.localStorage.getItem("userToken")
      });

      let myInit = {
        method: "DELETE",
        headers: myHeaders,
        body: "id=" + this.state.article[0].id
      };

      fetch("/api/articles/", myInit)
        .then(function(response) {
          return response.json();
        })
        .then(function(response) {
          if (response.error.error) {
            StatusAlertService.showError(response.error.message);
          } else {
            StatusAlertService.showSuccess("Article has been deleted");
            hashHistory.push("home");
          }
        });
    }
  }

  /* --------------------------------------------------------------------------------------------------------------------------------------------
  This renders all of the information relating to the Article as pulled from
  the database. If user is admin, more functions become available.
*/
  render() {
    let user_name = "";
    if (this.state.loading) return <Loader />;
    else if (this.state.article[0] && this.state.article[0].user_id) {
      if (this.state.user[0]) {
        user_name = this.state.user[0].name;
      }
      return (
        <div className="container-fluid">
          <StatusAlert />
          <div className="row">
            <InfoBox
              photo={this.state.article[0].photo}
              photo_license={this.state.article[0].photo_license}
              user_name={user_name}
              institution={this.state.article[0].institution}
              artwork_type={this.state.article[0].artwork_type}
              culture_group={this.state.article[0].culture_group}
              material={this.state.article[0].material}
              tags={this.state.article[0].tags}
              what_changed={this.state.article[0].what_changed}
              delete={this.deleteArticle}
            />

            <div className="col-md-6 tabBar-content">
              <div className="tabBar row justify-content-between align-items-end">
                <nav aria-label="breadcrumb col">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Search</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a
                        href="#"
                        dangerouslySetInnerHTML={{
                          __html: this.state.article[0].artwork_type
                        }}
                      ></a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {this.state.article[0].title}
                    </li>
                  </ol>
                </nav>
                <div className="col tabBar-align">
                  <Link
                    to={"/article/history/" + this.state.article[0].id}
                    className="none-deco tabBar-tab history-tab"
                    aria-label="Histyory tab, go to see the history of this article"
                  >
                    Edit History
                  </Link>
                  <Link
                    to={"/article/edit/" + this.state.article[0].id}
                    className="none-deco tabBar-tab edit-tab"
                    aria-label="Edit tab, go to edit the article"
                  >
                    Edit
                  </Link>
                  <Link
                    to={"/article/institution/" + this.state.article[0].id}
                    className="bottom-align-text tabBar-tab institution-tab"
                    aria-label="Artwork article tab, see the current published state of the article"
                  >
                    Institution
                  </Link>
                  <Link
                    className="bottom-align-text tabBar-tab vpia-tab is-active"
                    aria-label="Artwork article tab, see the current published state of the article"
                  >
                    VPIA
                  </Link>
                </div>
              </div>
              <div className="tab-bar-card">
                <div className="article-heading">
                  <h1 className="single-article-title">
                    #{this.state.article[0].id}&nbsp;
                    {this.state.article[0].title}
                  </h1>
                  <div className="article-body">
                    <br />
                    <h3 className="single-article-title">Overview</h3>
                    <hr />
                    <div
                      id="article-photo"
                      className="single-article-body"
                      dangerouslySetInnerHTML={{
                        __html: this.state.article[0].body
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default ViewArticle;
