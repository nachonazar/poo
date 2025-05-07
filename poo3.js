class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  perimetro() {
    return 2 * (this.alto + this.ancho);
  }
  area() {
    return this.alto * this.ancho;
  }
}

const rectangulos = [
  new Rectangulo(6, 4),
  new Rectangulo(5, 8),
  new Rectangulo(12, 10),
  new Rectangulo(20, 5),
];

for (let i = 0; i < rectangulos.length; i++) {
  document.writeln("<p>El perimetro es: " + rectangulos[i].perimetro() + "</p>");
  document.writeln("<p>El area es: " + rectangulos[i].area() + "</p>");
}
