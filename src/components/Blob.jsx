import React from "react";
import { useTrail, animated } from "react-spring";

const fast = { tension: 180, friction: 40 };
const slow = { tension: 200, friction: 40 };
const trans = (x, y) =>
  `translate3d(${x}px,${y}px,0) translate3d(-100%, -100%,0)`;

export default function Goo() {
  const [trail, set] = useTrail(5, () => ({
    xy: [0, 0],
    config: i => (i === 0 ? fast : slow)
  }));
  return (
    <>
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />

          <feColorMatrix
            in="blur"
            values="1 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0 40 -12"
          />
        </filter>
      </svg>

      <div
        className="hooks-main"
        onMouseMove={e => set({ xy: [e.clientX, e.clientY] })}
      >
        <style jsx>{`
          .hooks-main > svg {
            display: none;
          }

          .hooks-main > div {
            position: absolute;
            will-change: transform;
            border-radius: 50%;
            background: rgb(255, 255, 255);
            box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
            opacity: 0.6;
          }

          .hooks-main > div:nth-child(1) {
            width: 100px;
            height: 100px;
          }

          .hooks-main > div:nth-child(2) {
            width: 30px;
            height: 30px;
          }

          .hooks-main > div:nth-child(3) {
            width: 50px;
            height: 50px;
          }
          .hooks-main > div:nth-child(4) {
            width: 10px;
            height: 40px;
          }

          .hooks-main > div:nth-child(5) {
            width: 50px;
            height: 50px;
          }

          .hooks-main > div::after {
            content: "dgdf";
            position: absolute;
            top: -100px;
            left: -20px;
            width: 100px;
            height: 100px;
            border-radius: 60%;
            background: rgba(0, 0, 0, 0.8);
          }

          .hooks-main > div:nth-child(2)::after {
            top: 0px;
            left: 10px;
            width: 10px;
            height: 30px;
          }

          .hooks-main > div:nth-child(3)::after {
            top: 10px;
            left: -10px;
            border-radius: 50%;
            width: 30px;
            height: 30px;
          }
          .hooks-main > div:nth-child(4)::after {
            top: 80px;
            left: 10px;
            width: 10px;
            height: 70px;
          }

          .hooks-main > div:nth-child(5)::after {
            top: 10px;
            left: 10px;
            width: 50px;
            height: 50px;
          }

          .hooks-main {
            position: absolute;
            width: 100%;
            height: 100%;
            filter: url("#goo");
            overflow: hidden;
          }
        `}</style>
        {trail.map((props, index) => (
          <animated.div
            key={index}
            style={{ transform: props.xy.interpolate(trans) }}
          />
        ))}
      </div>
    </>
  );
}
