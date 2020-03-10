import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Learn from "./components/Learn";
import Register from "./components/Register";
import Login from "./components/Login";
import FlashCards from "./components/FlashCards";
import firebase from "./components/Firebase";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  useHistory
} from "react-router-dom";

function App(props) {
  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState(null);
  const [userId, setUserId] = useState(null);

  const registerUser = userName => {
    firebase.auth().onAuthStateChanged(FBUser => {
      FBUser.updateProfile({
        displayName: userName
      }).then(() => {
        setUser(FBUser);
        setDisplayName(FBUser.displayName);
        setUserId(FBUser.uid);
      });
    });
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(FBUser => {
      if (FBUser) {
        setUser(FBUser);
        setDisplayName(FBUser.displayName);
        setUserId(FBUser.uid);
      }
    });
  }, []);
  const logoutUser = e => {
    e.preventDefault();
    setUser(null);
    setDisplayName(null);
    setUserId(null);
    firebase.auth().signOut();
  };
  return (
    <div>
      <Header user={user} logoutUser={logoutUser} />

      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register registerUser={registerUser} />
        </Route>
        <Route exact path="/">
          <Welcome user={displayName} />
        </Route>
        <Route path="/learn">
          <Learn />
        </Route>
        <Route path="/flashcards">
          <FlashCards />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
