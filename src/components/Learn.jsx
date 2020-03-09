import React, { useState, useCallback } from "react";
import Vulnerabilities from "./Vulnerabilities";
import { useTransition, animated } from "react-spring";
import vulns from "./Data";
const pages = vulns.map((vuln, index) => ({ style }) => (
  <animated.div style={{ ...style, background: "#2e2e2e" }}>
    <Vulnerabilities name={vuln.name} rank={vuln.rank} key={index} />
  </animated.div>
));
function Learn() {
  const [index, set] = useState(0);
  const onClick = useCallback(() => set(state => (state + 1) % 10), []);
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" }
  });
  return (
    <div className="simple-trans-main" onClick={onClick}>
      <style jsx>{`
        .simple-trans-main > div {
          cursor: pointer;
          position: absolute;
          width: 100%;
          padding: 10%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-weight: 800;
          font-size: 5em;
          will-change: transform, opacity;
          text-shadow: 0px 2px 40px #00000020, 0px 2px 5px #00000030;
        }
      `}</style>
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item];
        return <Page key={key} style={props} />;
      })}
    </div>
  );
}

export default Learn;
