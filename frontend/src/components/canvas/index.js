import React from "react";
import "./index.css";

const Canvas = () => {
  React.useEffect(() => {
    var canvas = document.getElementById("canvas1");
    var context = canvas.getContext("2d");
    context.fillRect(0, 0, 150, 120);
  }, []);

  return <canvas id="canvas1" height="400" width="400"></canvas>;
};

export default Canvas;
