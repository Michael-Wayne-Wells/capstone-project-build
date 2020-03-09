import React from "react";
import Blob from "./Blob";
import WelcomeMessage from "./WelcomeMessage";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

class Welcome extends React.Component {
  render() {
    return (
      <>
        <style jsx>{`
          .blob {
            z-index: 0;
            opacity: 0.5;
          }
          .welcomeTop {
            height: 400px;
            overflow: hidden;
            z-index: 2;
          }
          .welcomeMid {
            height: 400px;
            overflow: hidden;
          }
          .welcomeBottom {
            height: 400px;
            overflow: hidden;
          }
        `}</style>
        <Parallax pages={3} scrolling={true} ref={ref => (this.parallax = ref)}>
          <ParallaxLayer offset={0} speed={0.5}>
            <Blob className="blob" />

            <div className="welcomeTop">
              <h2 style={{ fontSize: "20vw", textAlign: "center" }}>Welcome</h2>
              {this.props.user && (
                <h2 style={{ fontSize: "18vw", textAlign: "center" }}>
                  {this.props.user}
                </h2>
              )}
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0.5} speed={1}>
            <WelcomeMessage className="welcomeMid" />
            <div className="welcomeBottom"></div>
          </ParallaxLayer>
        </Parallax>
      </>
    );
  }
}

export default Welcome;
