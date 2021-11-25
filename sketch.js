let w = window.innerWidth;
let h = window.innerHeight;
let n = 5; //大きくするほど雪の端がぼやける
let t = 0
let snows = new Array(80); //雪の数
let v = 2; //雪のおちる速さ

function setup() {
  createCanvas(w, h);
  for(i = 0; i < snows.length; i++){
    snows[i] = [random(w), random(h), random(3,10), random(120)];
  }
}

function draw() {
  t++;
  clear();
  noStroke();
  background(0);
  for(j = 0; j < snows.length; j++){
    drawLight(snows[j]);
    snows[j][1] += v;
  }
}

function drawLight(snow){
  for(i = 0; i < n; i++){
    fill(255, 255 / n);
    circle(snow[0] + 20 * sin(t / 120 + snow[3]), (snow[1]) % h, (snow[2] / n) * (n - i));
  }
}

function windowResized() {
  resizeCanvas(w, h);
  reset();
}
function reset() {
  w = window.innerWidth;
  h = window.innerHeight;
  for(i = 0; i < snows.length; i++){
    snows[i] = [random(w), random(h), random(3,10), random(120)];
  }
}