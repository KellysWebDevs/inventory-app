import React from "react";

class Footer extends React.Component {
  containers = [];
  cars = [];

  generateContainers = () => {
    for (let i = 0; i < 4; i++) {
      const container = {
        x: this.Canvas.width - 100,
        y: (this.Canvas.height / 4) * i + 10,
        width: 80,
        height: 50,
      };

      this.containers.push(container);
    }
  };

  drawContainers = () => {
    const { ctx } = this;

    ctx.fillStyle = "brown";

    this.containers.forEach((container) => {
      ctx.fillRect(container.x, container.y, container.width, container.height);
    });
  };

  drawStorage = () => {
    const { ctx } = this;

    ctx.lineWidth = 4;
    ctx.strokeStyle = "#7d7d7d";

    ctx.fillStyle = "#999999";

    ctx.fillRect(90, this.Canvas.height / 2 - 50, 50, 100);
    ctx.strokeRect(92, this.Canvas.height / 2 - 48, 46, 96);

    ctx.fillStyle = "#bdbdbd";

    ctx.fillRect(0, 0, 100, this.Canvas.height);
    ctx.strokeRect(2, 2, 96, this.Canvas.height - 4);
  };

  generateCars = () => {
    for (let i = 0; i < 1; i++) {
      const car = {
        x: this.Canvas.width / 2 - 20,
        y: this.Canvas.height / 2 - 15,
        width: 40,
        height: 30,
      };
      this.cars.push(car);
    }
  };

  drawCars = () => {
    const { ctx } = this;

    ctx.fillStyle = "orange";

    this.cars.forEach((car) => {
      ctx.fillRect(car.x, car.y, car.width, car.height);
    });
  };

  // componentDidMount() {
  //   if (this.Canvas.width > 500) {
  //     const { ctx } = this;
  //
  //     this.generateContainers();
  //     this.generateCars();
  //
  //     console.log(this.cars);
  //
  //     setInterval(() => {
  //       ctx.clearRect(0, 0, this.Canvas.width, this.Canvas.height);
  //
  //       this.drawContainers();
  //       this.drawStorage();
  //       this.drawCars();
  //     }, 1000 / 30);
  //   }
  // }

  render() {
    return (
      <footer className="page-footer black">
        {/*<div className="center">
          <canvas
            width={window.innerWidth / 1.3}
            height="300"
            ref={(Canvas) => {
              this.Canvas = Canvas;
              this.ctx = Canvas.getContext("2d");
            }}
          ></canvas>
        </div>*/}
        <div className="footer-copyright black">
          <div className="container white-text">
            © 2021 | Made with ♥ by{" "}
            <a
              style={{ textDecoration: "underline" }}
              className="white-text"
              href="https://kelly-devs-portfolio.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kelly Web Devs
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
