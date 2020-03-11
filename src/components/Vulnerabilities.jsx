import React, { useState, useRef } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import PropTypes from "prop-types";
import Editable from "./Editable";
function Vulnerabilities(props) {
  const [text, setText] = useState("");
  const inputRef = useRef();
  let parallex;
  return (
    <Parallax ref={ref => (parallex = ref)} pages={4}>
      <ParallaxLayer
        offset={0}
        speed={1}
        style={{
          display: "flex",

          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <h2 style={{ fontSize: "30vw" }}>{props.rank}</h2>
      </ParallaxLayer>
      <ParallaxLayer
        offset={0.9}
        speed={0}
        style={{
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "white"
        }}
      />
      <ParallaxLayer
        offset={0.8}
        speed={0.5}
        style={{
          display: "flex",
          alignItems: "center",

          justifyContent: "center",
          color: "black"
        }}
      >
        <h2 style={{ fontSize: "12vw" }}>{props.name}</h2>
      </ParallaxLayer>

      <ParallaxLayer
        offset={1.5}
        speed={1}
        style={{
          display: "flex",
          alignItems: "center",
          padding: "50px",
          justifyContent: "center"
        }}
      >
        <Editable
          text={text}
          style={{ fontSize: "4vw" }}
          placeholder={props.description}
          childRef={inputRef}
          type="input"
        >
          <textarea
            ref={inputRef}
            rows="4"
            cols="20"
            type="text"
            name="text"
            placeholder={props.description}
            value={props.description}
            onChange={e => setText(e.target.value)}
          />
        </Editable>
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={1}
        style={{
          display: "flex",
          alignItems: "center",
          padding: "50px",
          justifyContent: "center"
        }}
      >
        <Editable
          text={text}
          style={{ fontSize: "4vw" }}
          placeholder="Write a task name"
          childRef={inputRef}
          type="input"
        >
          <textarea
            rows="4"
            cols="20"
            ref={inputRef}
            type="text"
            name="text"
            placeholder="Write a new section"
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </Editable>
      </ParallaxLayer>
    </Parallax>
  );
}
Vulnerabilities.propTypes = {
  name: PropTypes.string,
  rank: PropTypes.number,
  description: PropTypes.string
};
export default Vulnerabilities;
