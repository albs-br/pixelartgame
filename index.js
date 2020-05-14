import './style.css';

const PIXEL_SIZE = 4;

const canvas = document.getElementsByTagName('canvas')[0];

var ctx = canvas.getContext("2d");

ctx.moveTo(0, 0);
ctx.lineTo(640, 480);
ctx.stroke(); 

ctx.fillStyle = "#FF0000"; 
// ctx.fillRect(20, 20, 150, 100);
// ctx.fillRect(220, 20, 150, 200);



var putPixel = (x, y) => {
  ctx.fillRect(x * PIXEL_SIZE, y * PIXEL_SIZE, (x * PIXEL_SIZE) + 4, (y * PIXEL_SIZE) + 4);
};

putPixel(0, 0);
