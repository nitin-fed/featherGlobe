

export const initDancingLetter = () => {
  const canvas = document.querySelector("#dancingLetter");

  const canvasWidth = 500;
  const canvasHeight = 300;
  const canvasBackground = "#e7e7e7";

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  canvas.style.background = canvasBackground;

  window.addEventListener("resize", () => {
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
  });

  const drawLetter = () => {
    var ctx = canvas.getContext("2d");

    ctx.font = "60px Arial";
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#FF0000";
    ctx.translate(20, 50); // set canvas context to center
    ctx.rotate((Math.PI / 180) * 10); // 1/2 a degree
    //ctx.rotate((3 * Math.PI) / 180);
    ctx.fillText("A", 20, 50);
  };

  canvas.addEventListener("click", () => {
    drawLetter();
  });
};
