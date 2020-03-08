import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Learn from "./components/Learn";
import Register from "./components/Register";
import Login from "./components/Login";
import FlashCards from "./components/FlashCards";
import firebase from "./components/Firebase";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const ref = firebase.database().ref("user");
    ref.on("value", snapshot => {
      let FBUser = snapshot.val();
      setUser(FBUser);
    });
  });

  return (
    <div>
      <Header user={user} />

      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path="/">
            <Welcome user={user} />
          </Route>
          <Route path="/learn">
            <Learn />
          </Route>
          <Route path="/flashcards">
            <FlashCards />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
