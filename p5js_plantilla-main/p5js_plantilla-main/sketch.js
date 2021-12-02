var ball = {
x: 20,
y: 30,
r: 30,
vx:0,
vy:0,
color:["lightblue","lightgreen","orange","yellow"]
};
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle (ball.x,ball.y,ball.r);
  fill(ball.color[2]);
  ball.vx=2;
  ball.x=ball.x+ball.vx
}
