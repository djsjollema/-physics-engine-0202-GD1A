const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

for(let i=0; i<100;i++){
  let x = getRandomInt(0,width);
  let y = getRandomInt(0,height);
  let radius = getRandomInt(10,50);
  let r =getRandomInt(0,255);
  let g = getRandomInt(0,255);
  let b = getRandomInt(0,255);
  let a = 0.4;
  let color = "rgba(" + r + "," + g + "," + b + "," + a +")";
  let myPoint = new Point(x,y,radius,color);
  myPoint.draw(context);
}
