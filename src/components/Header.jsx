import React from "react";
import { FaUsers } from "react-icons/fa";

class Header extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <nav className="site-nav family-sans navbar navbar-expand bg-dark navbar-dark higher">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <img style={{ height: "25px" }} src="goose.png" alt="goose" /> OWASP
            trainer
          </a>
          <div className="navbar-nav ml-auto">
            <a className="nav-item nav-link" href="/learn">
              Learn the OWASP top 10
            </a>

            {!user && (
              <a className="nav-item nav-link" href="/login">
                log in
              </a>
            )}
            {!user && (
              <a className="nav-item nav-link" href="/register">
                register
              </a>
            )}
            {user && (
              <a className="nav-item nav-link" href="/login">
                log out
              </a>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
