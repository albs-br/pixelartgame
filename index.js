import './style.css';
// import { * } from './constants.js';
const PIXEL_SIZE = 4;
const SCREEN_WIDTH = 160;
const SCREEN_HEIGHT = 120;

const RED = "#FF0000";
const GREEN = "#00FF00";
const BLUE = "#0000FF";



const canvas = document.getElementsByTagName('canvas')[0];

var ctx = canvas.getContext("2d");

ctx.moveTo(0, 0);
ctx.lineTo(640, 480);
ctx.stroke();



let setColor = (color) => {
  ctx.fillStyle = color;
}

let putPixel = (x, y) => {
  ctx.fillRect(x * PIXEL_SIZE, y * PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);
};

let putPixel = (x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x * PIXEL_SIZE, y * PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);
};

let rnd = (min, max) => {
  //Math.floor(Math.random() * 10);     // returns a random integer from 0 to 9
  return Math.floor(Math.random() * (max-min+1)) + min;     // returns a random integer between min and max (inclusive)
}



setColor(BLUE);
//ctx.fillStyle = "#FF0000"; 
// ctx.fillRect(20, 20, 150, 100);
// ctx.fillRect(220, 20, 150, 200);


putPixel(0, 0);
putPixel(1, 1);
putPixel(2, 2);

let dateTimeStart = new Date()
for(let y=0; y<SCREEN_HEIGHT; y++) {
  for(let x=0; x<SCREEN_WIDTH; x++) {
    putPixel(x, y);
  }
}
let dateTimeEnd = new Date()
let timePerFrame = dateTimeEnd - dateTimeStart;
console.info('timePerFrame: ' + timePerFrame + ' ms');
console.info(1000/timePerFrame + ' fps');
