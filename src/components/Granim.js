import React, { useEffect, useRef } from "react";
import Granim from "granim";

const GradientCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const granimInstance = new Granim({
      element: canvasRef.current,
      direction: "diagonal",
      isPausedWhenNotInView: true,
      states: {
        "default-state": {
          gradients: [
            ["#00F260", "#0575E6"], // Updated to match the website's theme
            ["#ff1f24", "#ff5e62"], // Updated to match the website's theme
            ["#e1eec3", "#f05053"], // Updated to match the website's theme
          ],
          transitionSpeed: 10000, // Slowed down the transition speed to 8 seconds
        },
      },
    });

    return () => {
      granimInstance.destroy(); // Cleanup on component unmount
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="canvas-basic"
      style={{
        position: "absolute",
        display: "block",
        width: "100%",
        height: "100%",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: -1,
      }}
    ></canvas>
  );
};

export default GradientCanvas;
