import React, { useState } from "react";
import FormError from "./FormError";
import firebase from "./Firebase";
import { withRouter } from "react-router-dom";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = e => {
    var registrationInfo = {
      email,
      password
    };
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(
        registrationInfo.email,
        registrationInfo.password
      )
      .then(() => {
        props.history.push("/");
      })
      .catch(error => {
        if (error.message !== null) {
          setErrorMessage(error.message);
        } else {
          setErrorMessage(null);
        }
      });
  };

  return (
    <form className="mt-3" onSubmit={handleLogin}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card bg-light">
              <div className="card-body">
                <h3 className="font-weight-light mb-3">Login</h3>
                <div className="form-row">
                  {errorMessage !== null ? (
                    <FormError theMessage={errorMessage} />
                  ) : null}
                </div>
                <section className="form-group">
                  <label className="form-control-label sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    required
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </section>
                <div className="form-row">
                  <section className="col-sm-6 form-group">
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </section>
                </div>
                <div className="form-group text-right mb-0">
                  <button className="btn btn-primary" type="submit">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default withRouter(Login);
