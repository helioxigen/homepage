import React from 'react';

class Canvas extends React.PureComponent {
  componentDidMount() {
    this.renderCanvas();
  }
  renderCanvas() {
    const canvas = document.getElementById('canvas');
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#ffffff';

    const point = (x, y) => {
      ctx.fillRect(x, y, 10, 1);
    };

    const draw = () => {
      let rand = Math.floor(Math.random() * 100);
      let offset = rand;
      let startPoint = rand;

      while (offset < canvasHeight) {
        rand = Math.floor(Math.random() * 100);
        if (startPoint > canvasWidth) {
          offset += rand / 2;
          startPoint = 1;
        }
        point(startPoint, offset);
        startPoint += rand;
      }
    };

    const refresh = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    setInterval(draw, 30);
    setInterval(refresh, 59);
  }
  render() {
    return (
      <canvas
        id="canvas"
        width={`${window.innerWidth}px`}
        height={`${window.innerHeight}px`}
        style={{ background: 'black' }}
      />
    );
  }
}

export default Canvas;
