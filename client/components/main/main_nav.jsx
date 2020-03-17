/* --------------------------------------------------------------------------------------------------------------------------------------------
  Main navigation logic for the site lives here - please note that the user settings would live in the app.jsx component, not here.
*/
import React from "react";
import SearchForm from "../search/searchform.jsx";
import { Link } from "react-router";

class MainNav extends React.Component {
  constructor(props) {
    super(props);
  }

  // --------------------------------------------------------------------------------------------------------------------------------------------
  // Renders about page, home nav and other necessary pages.
  render() {
    return (
      <div>
        <div id="mainheader" className="container-fluid">
          <div className="row row-centered">
            <div id="mainlogo" className="col-lg-2">
              <Link to="landing">
                <img
                  src="../assets/images/logo-white.png"
                  width="auto"
                  height="180px"
                  alt="VPIA logo"
                  aria-label="VPIA logo"
                />
              </Link>
            </div>

            <div className="col-lg-8 col-lg-offset-2 align-self-end">
              <div className="navcontainer">
                <div className="main-nav-item">
                  <Link to="landing" activeClassName="active-yellow">
                    <svg
                      width="60%"
                      height="60%"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 189.41 222.04"
                    >
                      <path
                        d="M600.43,247.42c-0.19-5.19-.36-10.4-1-15.55-1.07-9.19-2.54-18.33-3.66-27.52-0.57-4.67.1-9.65-1.28-14a214.69,214.69,0,0,0-9.85-25c-5.75-12.47-13.41-23.75-22-34.52-10-12.55-19.14-25.77-28.6-38.74-2.35-3.22-5.6-6.29-6.54-9.91-3.81-14.59-10.65-27.62-19-40-1-1.46-3.07-2.19-4.65-3.26a36.07,36.07,0,0,0-2.73,4.72c-2.64,6.72-4.57,13.78-7.85,20.17-2.48,4.84-6.87,8.66-10,13.25-7.7,11.46-15,23.19-22.73,34.62-5.49,8.11-11.34,16-17.22,23.81-6.9,9.21-14.2,18.13-21,27.45-2.87,4-5,8.53-7.13,13-1.64,3.36-4,7-4,10.44,0,11,.93,22,1.71,33,0.26,3.68,1.23,7.3,1.81,11,0.67,4.27,1.65,8.53,1.78,12.82,0.14,4.7-.76,9.43-0.68,14.14,0,1.31,1.89,3.69,2.95,3.72,5.34,0.11,10.69-.37,16-0.69,4.86-.3,9.73-1,14.58-0.94,10.19,0.1,20.37.84,30.55,0.67,2.49,0,5.41-1,4.49-6.13-1.51-8.41-1.2-17.18-1.16-25.8a50,50,0,0,1,1.9-12.79c0.79-2.87-.5-7.67,5.5-7.58,8.93,0.31,17.41.51,25.86,1,4,0.22,7.19,1.62,7,6.64-0.18,4.74-.16,9.49,0,14.23,0.19,5.71.59,11.41,0.91,17.11,0.39,6.75,4.38,10.19,11.06,9.81,7.41-.42,14.84-0.94,22.27-0.9,11.12,0.06,22.24.65,33.36,0.81,3,0.05,6.59.21,8.7-1.33C601.25,254.11,600.52,250.08,600.43,247.42Zm-23.17-6.84c-6.12.23-12.23,0.79-18.35,0.85a78.42,78.42,0,0,1-12.24-1c-0.95-.15-2.17-1.84-2.35-3-0.37-2.28,0-4.67-.13-7-0.27-7.06-.8-14.11-0.85-21.16,0-4.71.72-9.42,0.83-14.14,0.12-5.29-1.83-7.44-6.95-7-7.91.64-15.77,1.94-23.67,2.65-2.48.23-5-.78-7.57-0.81-9.53-.11-19-0.06-28.58,0-5.84,0-7.65,2.68-7.4,8.41,0.23,5.26-.69,10.57-1.16,15.86-0.7,7.64-4.17,15-1.62,23,1,3-.67,5.3-4.42,5.26-6.92-.07-13.84,0-20.77,0-5.57,0-7.3-1.55-7.5-7.06-0.36-10.33-.49-20.67-1-31-0.32-6.47-1.51-12.91-1.67-19.38a16.72,16.72,0,0,1,2.43-8.28c3.9-6.71,8.15-13.21,12.45-19.68,6.11-9.21,12.13-18.48,18.65-27.4,8.79-12,18-23.74,27-35.58,1.28-1.67,2.65-3.28,4-4.92,1.91-2.53,3.28-4.64,4.79-6.64,2.42-3.17,4.49-3.06,6.5.58a149.36,149.36,0,0,0,8.69,14.65c4.43,6.23,9.47,12,14.15,18.06,6.12,7.91,12.28,15.8,18.2,23.86,6.21,8.46,11.9,17.33,18.31,25.64,8.13,10.53,13.17,21.72,13,35.48-0.12,11.15,1.63,22.33,2.62,33.49C583,238,581,240.43,577.26,240.58Z"
                        transform="translate(-411.3 -38.98)"
                        className="main-icon"
                      />
                    </svg>
                    <span>Home</span>
                  </Link>
                </div>
                <div className="main-nav-item">
                  <Link to="about" activeClassName="active-yellow">
                    <svg
                      width="60%"
                      height="60%"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 113.3 222.82"
                    >
                      <path
                        d="M1363.43,167.18a1.35,1.35,0,0,1-.05-0.66,49.76,49.76,0,0,0-1.32-9.88c-0.82-13.07-1.21-26.14-1.54-39.21a21.63,21.63,0,0,1,.16-4.61,46.16,46.16,0,0,1-1.1-15.76,8.42,8.42,0,0,1-.6-1.48,84.59,84.59,0,0,0-3-10.93c-5-12.13-8.9-24.54-21.8-34.87a41.18,41.18,0,0,0-43.71-4.61,45.35,45.35,0,0,0-15.92,12.46,82.76,82.76,0,0,0-18.12,33.49c0.44,5.33.6,10.65,0.55,15.92a41.1,41.1,0,0,1-2.86,15.21c-0.55,8.46-2,16.86-3,25.26a7.86,7.86,0,0,1-.71,2.53,28.86,28.86,0,0,1,.27,4.89c-0.05,2.42-.38,4.83-0.55,7.19a7.69,7.69,0,0,1,.82,1.65c2.09,6.26,3.07,12.68,4.67,19,2.09,8.51,4.28,17.08,6.59,25.59,1,2.2,2.14,4.34,3.18,6.53l1.65,2.64a28.72,28.72,0,0,1,3.73,8.62,68.69,68.69,0,0,1,3.9,5.66c6.15,9.28,11,19,24.16,26,16.47,8.84,36.19,8.24,47.06-4.94a66.12,66.12,0,0,0,14.55-36v-0.16a6.81,6.81,0,0,1-.16-1.48,52.26,52.26,0,0,1,2.36-12.68,21,21,0,0,1,.71-5.22,10.58,10.58,0,0,0,0-2.64c0-3.18.05-6.31,0.05-9.5a3.71,3.71,0,0,1-.11-0.77A120.52,120.52,0,0,1,1363.43,167.18Zm-20.92-2.2c-2.25,14.44.16,28.88-1.1,43.32a158.48,158.48,0,0,1-3.13,20.26,40.46,40.46,0,0,1-4.45,12.24c-1.76,2.86-7.58,12.35-14.83,10.82a0.67,0.67,0,0,1-.66.27,16.26,16.26,0,0,1-5.6-1,0.39,0.39,0,0,1-.28-0.47v0a38.26,38.26,0,0,1-20.26-17.08,23.89,23.89,0,0,1-3.35-6.15,1.15,1.15,0,0,1-.22-0.33,24.91,24.91,0,0,1-2.25-5.11c-1.21-1.43-2.69-2.86-3.68-4.06a17,17,0,0,1-4.72-11.2,25.34,25.34,0,0,1-3.73-11.92,156.69,156.69,0,0,1-4.06-26.69,8.3,8.3,0,0,1-.55-4,20.23,20.23,0,0,1-.82-5.71,21.23,21.23,0,0,1,.16-2.64,14.94,14.94,0,0,1,2-6.31,14.13,14.13,0,0,1,.05-3.4,42.42,42.42,0,0,0-.55-10.87,84.41,84.41,0,0,1-1.43-12.3,64.67,64.67,0,0,1,.88-9.77,6,6,0,0,1-.05-1c0.38-4.94-1.26-12.52,2.58-17.74a24.41,24.41,0,0,1,1-6A42.11,42.11,0,0,1,1280,70.59a75.28,75.28,0,0,1,10.49-12.74,18,18,0,0,1,12.41-5.38C1314,52.31,1322,60,1326.91,65c5.82,6,14.61,31.35,15.48,37.34a411.45,411.45,0,0,1,.11,62.65h0Z"
                        transform="translate(-1250.15 -40.93)"
                        className="main-icon"
                      />
                    </svg>
                    <span>About</span>
                  </Link>
                </div>
                <div className="main-nav-item">
                  <Link to="results" activeClassName="active-yellow">
                    <svg
                      width="50%"
                      height="50%"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 332.72 167.71"
                    >
                      <path
                        d="M1065.52,122.66c-1.27.62-2.79,1-3.77,1.89-4.51,4.26-8.48,9.18-13.38,12.9-5.66,4.3-12.68,6.89-18.05,11.45-9.47,8-20.36,8.23-31.6,7.59-1,0-2.58-2-2.72-3.15-0.71-6.35-1.16-12.74-1.48-19.12-0.67-13-.73-26.09-2-39-0.5-5-2.06-10.89-7.11-13.76-3.43-2-7.58-2.82-11.51-3.71a110,110,0,0,0-12.91-2c-6.42-.66-12.86-1.29-19.31-1.47-5.19-.15-10.43.81-15.61,0.55-17.93-.88-35.84-2.08-53.75-3.17-0.8,0-1.6-.12-2.39-0.18l-11.65-.91c-7.71-.6-15.43-1.09-23.13-1.85a100.56,100.56,0,0,1-14.81-2.2c-4.23-1.07-8.27.42-8.62,4.83-1,12.42-3,24.85-.28,37.35,1.59,7.28-1.78,11.89-8.53,13.49-4.58,1.08-9.43,2.3-13.32,4.76-10.14,6.42-20.35,12.8-28.81,21.6-6.63,6.9-13.94,13.14-20.84,19.79a51,51,0,0,0-6.27,7.26c-0.51.72,0.32,2.38,0.54,3.6a11.62,11.62,0,0,0,2.61-1.32c4.71-4.18,8.84-9.28,14.12-12.51,17.29-10.57,35-20.43,56.14-20.79,2.74,0,5.1.67,5.22,4,0.16,3.88,0,7.76.11,11.64,0.26,8.29.51,16.59,1,24.87,0.47,8.83,1.6,17.64,1.61,26.47,0,7.84,5.26,15.35,13.2,16.53,11.46,1.72,23,3.21,34.46,4.63a147.6,147.6,0,0,0,15,1.16c7.76,0.16,15.52,0,23.28-.06,14.88-.11,29.76-0.28,44.64-0.34,12.44-.06,24.88,0,37.32,0,7.45,0,11.3-4.45,10.63-11.54-0.52-5.5-.66-11-0.63-16.57,0-4.21.86-8.41,0.86-12.61,0-4.58,2.28-6.46,6.42-7.6a84.33,84.33,0,0,0,25-11.92,13,13,0,0,0,2.71-1.72c7.12-5.25,15.57-9.41,21-16,7-8.45,11.65-18.84,17.11-28.51C1066.58,125.9,1065.72,124.09,1065.52,122.66Zm-91.88,93.68a24,24,0,0,1-10,2c-8.67-.06-17.33-0.85-26-0.92-16-.15-32,0.16-48,0-4.64-.06-9.24-1.48-13.89-1.91-9.61-.9-19.25-1.55-28.88-2.3a15.78,15.78,0,0,0-3.34-.23c-5.45.78-7.43-.18-7.84-5-0.79-9.44-1.12-18.92-1.71-28.37-0.55-8.67-1.25-17.33-1.76-26a16.82,16.82,0,0,1,.75-4.07c8.91-1.59,16.45,2,24.07,4.36,10.78,3.31,21.24,7.7,31.74,11.88,10.2,4,20.2,8.57,30.4,12.61,11,4.35,22,8.68,34,9.51a156.6,156.6,0,0,1,17.22,2.36,4.47,4.47,0,0,1,3,2.94c0.51,5.5.62,11,.74,16.57C974.17,212,974.63,215.88,973.64,216.34ZM832,132.84c0.11-1.12.5-2.65,1.33-3.17a8.5,8.5,0,0,1,4.29-1c14.89-.12,29.12,3.22,42.91,8.54,14.83,5.73,29.47,11.94,44.38,17.4,8.74,3.2,17.84,5.43,26.82,8,5.39,1.52,10.82,2.92,16.29,4.15,4.06,0.91,3.73,3.82,3.15,6.61s-2.88,3.27-5.49,2.89c-11.05-1.57-22-3.63-32.4-7.75-10.88-4.31-21.57-9.11-32.34-13.7-9.91-3.34-18.93-6.45-27.8-9.91-12.59-4.92-25.29-9.31-38.84-10.75C833.43,134,831.94,133.2,832,132.84ZM974.31,97.27c-0.69,7.05-1.15,14.13-1.7,21.2,0,4.14-.65,7.74-0.84,11.37-0.33,6.1-.54,12.22-0.46,18.33,0.06,4.32-2.31,4.79-5.48,3.92-8.41-2.31-16.94-4.34-25.12-7.33-17.86-6.52-35.37-14-53.34-20.19-9.38-3.23-18.61-7.06-28.86-8.11-8.16-.83-16.09-2.27-24.29-0.74-0.76.14-2.63-1.44-2.67-2.28-0.33-6.79-.35-13.59-0.44-20.4,0-.79.17-1.59,0.17-2.39,0-7.79,0-7.91,7.74-7.15,8.95,0.88,17.85,2.28,26.8,3,10.56,0.8,21.15,1.12,31.73,1.57,7.06,0.31,14.14.27,21.2,0.75,14.41,1,28.8,2.26,43.21,3.3,2.43,0.17,4.89-.27,7.33-0.34C973.07,91.64,974.69,93.37,974.31,97.27Z"
                        transform="translate(-733.48 -66.14)"
                        className="main-icon"
                      />
                    </svg>
                    <span>Artwork</span>
                  </Link>
                </div>
                <div className="main-nav-item">
                  <a href="https://wapatah.com/events/" className="none-deco">
                    <svg
                      width="60%"
                      height="60%"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 270.77 171.28"
                    >
                      <path
                        d="M281.65,217.74c-7.61.25-15.12,0-22.33-2.86A11,11,0,0,0,256,214c-9.71-.57-17.82-7.46-19.11-17.32-1.38-10.52-2-21.13-2.9-31.71-0.7-8.35-.83-16.77-2-25-1.71-12.11-7.25-22-18.17-28.57-2.32-1.4-3.9-4.51-5.13-7.16-2.4-5.12-4.16-10.49-8.87-14.21a37.2,37.2,0,0,1-6.63-6.64c-6-7.89-15-11.49-23.47-14.65-11.48-4.3-23.89-5.25-36.46-3.37a73.84,73.84,0,0,0-29.59,11.27c-9.54,6.26-18,14.69-25.45,23.44-5.66,6.64-9.72,15-13.23,23.07-5.41,12.55-6.15,26.33-8.62,40.12-0.62,6.16-1.09,11.88-1.92,17.54-1,7.06-3,13.86-8.08,19.18-9.42,9.94-19,19.7-28.54,29.54a10.92,10.92,0,0,0-2.26,2.36,17.09,17.09,0,0,0-.91,3.84,15.19,15.19,0,0,0,3.57-1c9.26-5.28,18.09-11.49,27.77-15.8,13.63-6.06,28.33-8.1,43.31-7.74,6.89,0.16,13.93.9,20.63-.24,5.79-1,9.8.58,14.36,3.6,5.66,3.76,11.69,7.39,18.08,9.54,6.81,2.28,14.34,2.29,21.34,4.15A85.05,85.05,0,0,0,196.92,230c10.06-1.3,20.19-2.12,30.31-2.85,11.31-.82,22.68-1,34-2,7.06-.65,14-2.31,21-3.74,1.19-.24,2.14-1.63,3.2-2.48C284.14,218.47,282.88,217.7,281.65,217.74ZM97,158.92c0.88,10.21,1.07,20.79,7,29.88a11.37,11.37,0,0,1,1,1.93c2.29,5.6,1.8,5.87-4.15,6.36-11.71,1-23.39,2.4-35.07,3.7-3.12.34-3.93-.82-2.9-3.68,1.61-4.5,4-8.93,4.53-13.57,1.19-10.63,1.18-21.39,2.13-32.06,1.07-12.06,2.93-24.1,10.38-34.14,3.13-4.23,7.37-7.7,11.4-11.17,6.87-5.92,13.78-11.83,21-17.23,6.22-4.62,13.07-9.86,20.94-9.1,12.16,1.19,24.75-1.43,36.47,3.53,3.07,1.3,5.81,3.38,8.69,5.1,4.22,3.9,8,7.31,11.68,10.79a6.43,6.43,0,0,1,.94,2c-0.76.14-1.65,0.61-2.25,0.36-9.42-3.93-19.44-4.16-29.14-3-10.13,1.21-20,4.33-30,6.79-1.34.33-2.5,1.61-3.61,2.6-6.05,5.37-12.35,10.51-18,16.28-5.18,5.26-6.82,12.48-8.5,19.43C98.39,148.71,96.55,153.95,97,158.92Zm25,33.77c-8.11-6-10.33-14.79-12.14-24A46.22,46.22,0,0,1,115,136.84c7.87-13.89,19.86-23.78,37.19-24.42,5.56-.21,11.12-0.48,16.66-1,9.95-.86,18.62,3,26.81,7.75,2.24,1.3,4.21,5.07,4.29,7.77,0.45,15.58-3.4,30.31-12.18,43.18-8.93,13.09-22,21.12-37,25.79-2.57.79-5.6,0.11-8.42,0.11C134.32,198.23,127.94,197.14,121.94,192.69ZM221.23,215a213.36,213.36,0,0,1-45.35,2.6c-7.27-.42-14.49-1.91-21.7-3.11A88.24,88.24,0,0,1,143.94,212c-0.82-.24-1.4-1.3-2.1-2,1-.57,1.89-1.61,2.87-1.65,14.87-.6,27.42-7.06,38.19-16.55,6.52-5.74,11.55-13.2,17.18-19.94a40,40,0,0,0,2.84-4.45c2.82-7.49,5.31-14.46,7.45-21.53,0.77-2.55.57-5.38,1.07-8,0.2-1,1-2.51,1.72-2.69a3.31,3.31,0,0,1,2.82,1.5c1.2,2.79,2.53,5.71,2.81,8.67,0.65,7,.78,14.14,1,21.21,0.35,9.79.31,19.6,1.09,29.36,0.39,4.89,2.23,9.68,3.38,14.52C224.93,213,224.63,214.45,221.23,215Z"
                        transform="translate(-14.62 -64.36)"
                        className="main-icon"
                      />
                    </svg>
                    <span>Events</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="searchform" className="container-fluid">
          <div className="col-md-5 col-centered">
            <SearchForm
              onBlur={this.props.onBlur}
              onFocus={this.props.onFocus}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default MainNav;
