import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack || Front-End Developer",
          "Autodidacticism",
          "MERN Stack Developer",
          "Not afraid of Css",
          "Team Player",
          "Python",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
