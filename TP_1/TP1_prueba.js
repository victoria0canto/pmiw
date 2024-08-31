//https://www.youtube.com/watch?v=uSBJMpsbGeE
// VARIABLES
let img; // variable para la foto
let alternateColors = 0; // variable para alternar colores

function preload() {
  // Carga la imagen antes de iniciar el sketch
  img = loadImage("data/Opart.png"); // imagen desde data
}

function setup() {
  createCanvas(800, 400); // tamaño de la ventana
}

function draw() {
  background(255); // fondo

  // Foto en posición (0, 0), tamaño 400x400
  image(img, 0, 0, 400, 400);
  
  // Configuración de cuadrícula
  let gridSize = 10; // cuadricula (10x10)
  let squareSize = 40; // tamaño de cada cuadrado (400px / 10)
  
  // Cuadrícula en el lado derecho
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      // Coordenadas de cada cuadradito
      let x = 400 + i * squareSize;
      let y = j * squareSize;
      
      // Alternar colores de cuadrados y elipses
      let squareColor;
      let ellipseColor;

      if (alternateColors === 0) { // blanco y negro
        if ((i + j) % 2 === 0) {
          squareColor = color(0); // negro
          ellipseColor = color(255); // blanco
        } else {
          squareColor = color(255); // blanco
          ellipseColor = color(0); // negro
        }
      } else if (alternateColors === 1) { // violeta y naranja
        if ((i + j) % 2 === 0) {
          squareColor = color(87, 17, 228); // violeta
          ellipseColor = color(255, 81, 0); // naranja
        } else {
          squareColor = color(255, 81, 0); // naranja
          ellipseColor = color(87, 17, 228); // violeta
        }
      } else { // Colores aleatorios
        squareColor = color(random(255), random(255), random(255));
        ellipseColor = color(255 - red(squareColor), 255 - green(squareColor), 255 - blue(squareColor));
      }

      fill(squareColor);
      rect(x, y, squareSize, squareSize);
      
      fill(ellipseColor);
      ellipse(x + squareSize / 2, y + squareSize / 2, squareSize / 2, squareSize / 2);
    }
  }
}

// función para eventos de mouse
function mousePressed() {
  alternateColors = (alternateColors + 1) % 3; // Alternar entre 0, 1 y 2
}

// función para eventos de teclado
function keyPressed() {
  alternateColors = (alternateColors + 1) % 3; // Alternar entre 0, 1 y 2
}
