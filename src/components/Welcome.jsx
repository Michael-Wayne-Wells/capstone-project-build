import React from "react";
import Blob from "./Blob";

function Welcome(props) {
  const user = props.user;
  return (
    <div>
      <h2>Welcome {user} </h2>
      <Blob />
    </div>
  );
}

export default Welcome;
