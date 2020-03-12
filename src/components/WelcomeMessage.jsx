import React from "react";

function WelcomeMessage() {
  return (
    <>
      <style jsx>{`
        a:hover {
          text-decoration: none;
        }
      `}</style>
      <a className="link" href="/learn" style={{}}>
        <h2
          style={{
            fontSize: "20vw",
            textAlign: "center",
            background: "black",
            color: "white"
          }}
        >
          OWASP TOP 10
        </h2>
      </a>

      <p>
        A primary aim of the OWASP Top 10 is to educate developers, designers,
        architects, managers, and organizations about the consequences of the
        most common and most important web application security weaknesses. The
        Top 10 provides basic techniques to protect against these high risk
        problem areas, and provides guidance on where to go from here.
      </p>
      <p>
        Visit the <a href="https://owasp.org/">official OWASP website</a> for
        more information!
      </p>
    </>
  );
}

export default WelcomeMessage;
