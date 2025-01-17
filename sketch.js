let images;
let imageX;
let image_width = 300
let scrollSpeed = 1;

function preload() {
  images = [
    loadImage('images/1.png'),
    loadImage('images/2.png'),
    loadImage('images/3.png'),
    loadImage('images/4.png'),
    loadImage('images/5.png'),
    loadImage('images/6.png'),
    loadImage('images/7.png'),
    loadImage('images/8.png'),
    loadImage('images/9.png'),
    loadImage('images/10.png'),
    loadImage('images/11.png'),
  ];
  imageX = Array(images.length).fill(0).map((x,i) => i * image_width * 1.1)
}



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  for (let i = 0; i < images.length; i++) {
    images[i].width = image_width
    images[i].height = 600
    image(images[i], imageX[i], 0);
    imageX[i] = (imageX[i] < -image_width * 1.1 ? (images.length - 1) * image_width * 1.1 : imageX[i]) - scrollSpeed
  }
  loop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}