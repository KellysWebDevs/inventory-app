import React from "react";

class MotionBlur extends React.Component {
  state = {
    blur: 0,
  };

  prevScroll = 0;
  scrolled = false;

  makeScrollBlur = () => {
    if (this.prevScroll - window.scrollY) {
      this.setState({ blur: Math.abs(this.prevScroll - window.scrollY) / 30 });
      this.prevScroll = window.scrollY;

      this.scrolled = true;
    } else if (this.scrolled) {
      this.setState({ blur: 0 });

      this.scrolled = false;
    }
  };

  componentDidMount() {
    this.blurInterval = setInterval(this.makeScrollBlur, 1000 / 24);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.makeScrollBlur);
  }

  render() {
    return (
      <>
        <div style={{ filter: `blur(${this.state.blur}px)` }}>
          {this.props.children}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="filters"
        >
          <defs>
            <filter id="blur">
              <feGaussianBlur in="SourceGraphic" stdDeviation="0,0" />
            </filter>
          </defs>
        </svg>
      </>
    );
  }
}

export default MotionBlur;
