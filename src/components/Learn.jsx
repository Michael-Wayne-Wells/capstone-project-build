import React, { useState, useEffect } from "react";
import Vulnerabilities from "./Vulnerabilities";
import firebase from "./Firebase";

function Learn() {
  const [vulns, setVulns] = useState(null);

  useEffect(() => {
    const ref = firebase.database().ref("owasp");
    ref.on("value", snapshot => {
      let FBVulns = snapshot.val();
      setVulns(FBVulns);
    });
  });
  return (
    <div>
      Learn
      <Vulnerabilities vulns={vulns} />
    </div>
  );
}

export default Learn;
