import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "./config/particles-config";

const ParticlesBackground = () => {
  return (
    <div>
      <Particles style={{ zIndex: "-10" }} params={particlesConfig} />
    </div>
  );
};

export default ParticlesBackground;
