import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
function Header(props) {
  const handleLogoutUser = e => {
    props.logoutUser(e);
    props.history.push("/");
  };
  console.log(props.user);
  return (
    <nav className="site-nav family-sans navbar navbar-expand bg-dark navbar-dark higher">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          <img style={{ height: "25px" }} src="goose.png" alt="goose" /> OWASP
          trainer
        </NavLink>
        <div className="navbar-nav ml-auto">
          <NavLink className="nav-item nav-link" to="/learn">
            Learn the OWASP top 10
          </NavLink>

          {!props.user && (
            <NavLink className="nav-item nav-link" to="/login">
              log in
            </NavLink>
          )}
          {!props.user && (
            <NavLink className="nav-item nav-link" to="/register">
              register
            </NavLink>
          )}
          {props.user && (
            <NavLink
              className="nav-item nav-link"
              to="/login"
              onClick={e => handleLogoutUser(e)}
            >
              log out
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

export default withRouter(Header);
