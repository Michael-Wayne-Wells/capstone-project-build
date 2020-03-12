import React, { useState, useRef } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import PropTypes from "prop-types";
import Editable from "./Editable";
import Contents from "./Contents";

function InformationDisplay(props) {
  const [description, setDescription] = useState(props.description);
  const inputRef = useRef();
  let parallex;

  return (
    <Parallax ref={ref => (parallex = ref)} pages={2 + props.content.length}>
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
          text={description}
          style={{ fontSize: "4vw" }}
          placeholder={description}
          childRef={inputRef}
          type="input"
        >
          <textarea
            ref={inputRef}
            rows="4"
            cols="20"
            type="text"
            name="text"
            placeholder={description}
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </Editable>
      </ParallaxLayer>

      {props.content.map((section, index) => {
        return (
          <ParallaxLayer
            key={index}
            offset={2 + index}
            speed={0.75}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "50px",
              justifyContent: "center"
            }}
          >
            <Contents section={section} index={index} />
          </ParallaxLayer>
        );
      })}
    </Parallax>
  );
}
InformationDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired
};
export default InformationDisplay;
