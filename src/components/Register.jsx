import React, { useState } from "react";
import FormError from "./FormError";
import firebase from "./Firebase";
import { withRouter } from "react-router-dom";
function Register(props) {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [passOne, setPassOne] = useState("");
  const [passTwo, setPassTwo] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = e => {
    if (passOne !== passTwo) {
      setErrorMessage("Passwords no not match");
    } else {
      var registrationInfo = {
        displayName,
        email,
        password: passOne
      };
      e.preventDefault();

      firebase
        .auth()
        .createUserWithEmailAndPassword(
          registrationInfo.email,
          registrationInfo.password
        )
        .then(() => {
          props.registerUser(registrationInfo.displayName);
          props.history.push("/");
        })
        .catch(error => {
          if (error.message !== null) {
            setErrorMessage(error.message);
          } else {
            setErrorMessage(null);
          }
        });
    }
  };

  return (
    <form className="mt-3" onSubmit={handleSubmit}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card bg-light">
              <div className="card-body">
                <h3 className="font-weight-light mb-3">Register</h3>
                <div className="form-row">
                  {errorMessage !== null ? (
                    <FormError theMessage={errorMessage} />
                  ) : null}
                  <section className="col-sm-12 form-group">
                    <label
                      className="form-control-label sr-only"
                      htmlFor="displayName"
                    >
                      Display Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="displayName"
                      placeholder="Display Name"
                      name="displayName"
                      required
                      value={displayName}
                      onChange={e => setDisplayName(e.target.value)}
                    />
                  </section>
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
                      name="passOne"
                      placeholder="Password"
                      value={passOne}
                      onChange={e => setPassOne(e.target.value)}
                    />
                  </section>
                  <section className="col-sm-6 form-group">
                    <input
                      className="form-control"
                      type="password"
                      required
                      name="passTwo"
                      placeholder="Repeat Password"
                      value={passTwo}
                      onChange={e => setPassTwo(e.target.value)}
                    />
                  </section>
                </div>
                <div className="form-group text-right mb-0">
                  <button className="btn btn-primary" type="submit">
                    Register
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

export default withRouter(Register);
