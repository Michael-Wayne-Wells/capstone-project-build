import React, { useState, useCallback } from "react";
import Vulnerabilities from "./Vulnerabilities";
import { useTransition, animated } from "react-spring";
import vulns from "./Data";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

const pages = vulns.map((vuln, index) => ({ style }) => (
  <animated.div style={{ ...style, background: "#2e2e2e" }}>
    <Vulnerabilities name={vuln.name} rank={vuln.rank} key={index} />
  </animated.div>
));
function Learn() {
  const [index, set] = useState(0);
  const forwardClick = useCallback(() => set(state => (state + 1) % 10), []);
  const backClick = useCallback(() => {
    if (index < 2) {
      set(state => (state + 9) % 10);
    } else {
      set(state => (state - 1) % 10);
    }
  }, []);
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: "translate3d(0,100%, 0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" }
  });
  return (
    <div>
      <style jsx>{`
        .forward {
          z-index: 2;
          margin-top: 45%;
          position: absolute;
          width: 50px;
          height: 50px;
          right: 0;
          color: white;
          cursor: pointer;
        }
        .back {
          z-index: 3;
          margin-top: 45%;
          position: absolute;
          right: 100;
          width: 50px;
          height: 50px;
          color: white;
          cursor: pointer;
        }
        .simple-trans-main > div {
          position: absolute;
          width: 100%;
          padding: 10%;
          height: 100%;
          justify-content: center;
          display: flex;
          z-index: 1;

          align-items: center;
          color: white;
          font-weight: 800;
          font-size: 5em;
          will-change: transform, opacity;
          text-shadow: 0px 2px 40px #00000020, 0px 2px 5px #00000030;
        }
      `}</style>
      <FiArrowRightCircle className="forward" onClick={forwardClick} />

      <FiArrowLeftCircle className="back" onClick={backClick} />
      <div className="simple-trans-main">
        {transitions.map(({ item, props, key }) => {
          const Page = pages[item];
          return <Page key={key} style={props} />;
        })}
      </div>
    </div>
  );
}

export default Learn;
