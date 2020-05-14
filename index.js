import './style.css';

const PIXEL_SIZE = 4;
const SCREEN_WIDTH = 160;
const SCREEN_HEIGHT = 120;

const canvas = document.getElementsByTagName('canvas')[0];

var ctx = canvas.getContext("2d");

ctx.moveTo(0, 0);
ctx.lineTo(640, 480);
ctx.stroke(); 

ctx.fillStyle = "#FF0000"; 
// ctx.fillRect(20, 20, 150, 100);
// ctx.fillRect(220, 20, 150, 200);



var putPixel = (x, y) => {
  ctx.fillRect(x * PIXEL_SIZE, y * PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);
};

putPixel(0, 0);
putPixel(1, 1);
putPixel(2, 2);

let dateTimeStart = new Date()
for(let y=0; y<SCREEN_HEIGHT; y++) {
  for(let x=0; x<SCREEN_WIDTH; x++) {
    //ctx.fillStyle = "#FF0000"; 
    putPixel(x, y);
  }
}
let dateTimeEnd = new Date()
let timePerFrame = dateTimeEnd - dateTimeStart;
console.info('timePerFrame: ' + timePerFrame + ' ms');
console.info(1000/timePerFrame + ' fps');
