

export const init = () => {
  const canvas = document.querySelector("#myCanvas");

  const canvasWidth = 500;
  const canvasHeight = 300;
  const canvasBackground = "#e99e9e";
  const circleCount = 50;

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  canvas.style.background = canvasBackground;

  window.addEventListener("resize", () => {
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
  });

  const drawCircle = () => {
    var ctx = canvas.getContext("2d");
    var rect = canvas.getBoundingClientRect();

    const circleArr = [];
    for (let i = 0; i < circleCount; i++) {
      var x = Math.random() * canvasWidth;
      var y = Math.random() * canvasHeight;
      var dx = Math.random() * -0.5 * 4;
      var dy = Math.random() * -0.5 * 8;
      const radius = Math.random() * 10;
      const randomColor = "hsl(" + 360 * Math.random() + ",100%,50%)";
      const circle = new Circle(x, y, dx, dy, radius, randomColor);
      circleArr.push(circle);
    }

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      for (let i = 0; i < circleArr.length; i++) {
        circleArr[i].update();
      }
      ctx.save();
    };
    animate();

    function Circle(x, y, dx, dy, radius, cirColor) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;

      this.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = cirColor;
        ctx.lineWidth = 1;
        // ctx.strokeStyle = "#FF0000";
        // ctx.stroke();
        ctx.fill();
      };

      this.update = function() {
        if (this.x + this.radius > canvasWidth || this.x - this.radius < 0) {
          this.dx = -this.dx;
        }

        if (this.y + this.radius > canvasHeight || this.y - this.radius < 0) {
          this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
      };
    }
  };

  canvas.addEventListener("click", () => {
    drawCircle();
  });
};
