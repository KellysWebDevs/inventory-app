import React from "react";

class LoadingSplash extends React.Component {
  state = {
    backColor: "red",
  };

  backColors = ["red", "orange", "yellow", "green", "blue", "purple"];
  backColorIndex = 0;

  loadingCircles = [];

  generateLoadingCircles = () => {
    for (let i = 0; i < 4; i++) {
      const circle = {
        angle: 0,
        width: Math.random() * (Math.PI / 2) + Math.PI / 4,
        height: Math.random() * 50 + 50,
        speed: Math.random() * 0.1 + 0.05,
        color: Math.floor(Math.random() * 16777215).toString(16),
        alpha: Math.random() * 0.5 + 0.5,
      };

      this.loadingCircles.push(circle);
    }
  };

  drawLoadingCircles = () => {
    const { ctx } = this;

    this.loadingCircles.forEach((circle, i) => {
      ctx.fillStyle = `#${circle.color}`;
      ctx.globalAlpha = circle.alpha;

      circle.angle += circle.speed;
      if (circle.angle > Math.PI * 2) {
        circle.angle -= Math.PI * 2;
      }

      ctx.beginPath();
      ctx.arc(
        this.Canvas.width / 2,
        this.Canvas.height / 2,
        circle.height,
        circle.angle,
        circle.angle + circle.width
      );
      ctx.lineTo(this.Canvas.width / 2, this.Canvas.height / 2);
      ctx.fill();
    });
  };

  changeBackColor = () => {
    if (this.backColorIndex > this.backColors.length - 1) {
      this.backColorIndex = 0;
    }

    this.setState({ backColor: this.backColors[this.backColorIndex] });

    this.backColorIndex++;
  };

  componentDidMount() {
    const ctx = (this.ctx = this.Canvas.getContext("2d"));

    this.changeBackColor();
    this.backColorInterval = setInterval(this.changeBackColor, 1000 * 1.5);

    this.generateLoadingCircles();

    this.canvasInterval = setInterval(() => {
      ctx.clearRect(0, 0, this.Canvas.width, this.Canvas.height);

      this.drawLoadingCircles();
    }, 1000 / 60);
  }

  componentWillUnmount() {
    clearInterval(this.backColorInterval);
    clearInterval(this.canvasInterval);
  }

  render() {
    return (
      <div
        className={`${this.state.backColor}`}
        style={{
          position: "absolute",
          zIndex: "999",
          width: `${window.innerWidth}px`,
          height: `${window.innerHeight}px`,
          transition: "background-color 1s",
        }}
      >
        <canvas
          width="200"
          height="200"
          style={{
            transform: `translate(${window.innerWidth / 2 - 100}px, ${
              window.innerHeight / 2 - 100
            }px)`,
          }}
          ref={(Canvas) => {
            this.Canvas = Canvas;
          }}
        ></canvas>
      </div>
    );
  }
}

export default LoadingSplash;
