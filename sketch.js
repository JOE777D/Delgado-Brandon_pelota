let posX;
let posY;
let diametro;
let radio;
let fondo;
let colcir;
let vel;

function setup() {
  createCanvas(windowWidth, windowHeight);
  posX = windowWidth / 2;
  posY = windowHeight / 2;
  diametro = 30;
  radio = diametro / 2;
  fondo = color(25, 100, 50);
  colcir = color(random(10, 100), random(10, 100), random(10, 100));
  vel = random(1, 20);
  // frameRate(2);
  // print(posX);
  // posX = 234;
  // print(posX);
  // posX = posX + 25;
  // print(posX);
  // posX = posX * 2;
  // print(posX);
  // posX = posX / 5;
  // print(posX);
  // posX *= 8;
  // print(posX);
  // posX += 1;
  // print(posX);
  // posX ++;
  // print(posX);
}

function draw() {
  background(fondo);

  posX -= vel;
  if (posX < -radio) {
    diametro = random(10, 100);
    radio = diametro / 2;
    fondo = color(255, random(100, 255), 50);
    colcir = color(255, random(100, 255), 255);
    posX = windowWidth + radio;
  }

  fill(colcir);
  circle(posX, posY, diametro);

  print(posX);
  posY;
}
