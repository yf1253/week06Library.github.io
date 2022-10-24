// preload images
let record;
let handle;

function preload() {
  record = loadImage("images/record.png");
  handle = loadImage("images/handle.png");
}
//slider for sacle
let scale = 1;
let scaleSlider; //slider for scale
let angle = 1;
let spinSlider; //slider for rotate

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);

  //scale slider
  scaleSlider = createSlider(0.5, 1.2, 1, 0.1); //min, max,default value,increment
  scaleSlider.position(80, 110);
  scaleSlider.style("width", "350px");

  //spin slider
  spinSlider = createSlider(0, 360, 180);
  spinSlider.position(80, 60);
  spinSlider.style("width", "350px");
  spinSpeed = 180;
}

function draw() {
  background(255);
  //frame
  noFill();
  stroke("#222222");
  strokeWeight(10);
  rectMode(CENTER);
  rect(300, 300, 590, 590, 30);
  //handle
  imageMode(CENTER);
  image(handle, 460, 350, 90, 350);
  //text
  fill(10);
  textSize(16);
  noStroke();
  textStyle(BOLD);
  text("spin", 450, 73);
  text("scale", 450, 125);

  //record
  imageMode(CENTER);
  translate(width / 2 - 50, height / 2 + 50); //move origin to center of record
  scale = scaleSlider.value(); //store slider value in scale variable  
  rotate(angle);
  angle = spinSlider.value();
  image(record, 0, 0, 350 * scale, 350 * scale);
}