import React from "react";
import Quiz from "./Quiz";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import PropTypes from "prop-types";
class Vulnerabilities extends React.Component {
  render() {
    return (
      <Parallax ref={ref => (this.parallex = ref)} pages={3}>
        <ParallaxLayer
          offset={0}
          speed={1}
          style={{
            display: "flex",

            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <h2 style={{ fontSize: "30vw" }}>{this.props.rank}</h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0}
          style={{
            height: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "white"
          }}
        />
        <ParallaxLayer
          offset={0.9}
          speed={0.5}
          style={{
            display: "flex",
            alignItems: "center",

            justifyContent: "center",
            color: "black"
          }}
        >
          <h2 style={{ fontSize: "12vw" }}>{this.props.name}</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        ></ParallaxLayer>
      </Parallax>
    );
  }
}
Vulnerabilities.propTypes = {
  name: PropTypes.string,
  rank: PropTypes.number
};
export default Vulnerabilities;
