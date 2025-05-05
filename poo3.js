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

const rectangulos = new Rectangulo(6, 4);
const rectangulos2 = new Rectangulo(5, 8);
const rectangulos3 = new Rectangulo(12, 10);
const rectangulos4 = new Rectangulo(20, 5);

document.writeln("<p>El perimetro es: " + rectangulos.perimetro() + "</p>");
document.writeln("<p>El area es: " + rectangulos.area() + "</p>");

document.writeln("<p>El perimetro es: " + rectangulos2.perimetro() + "</p>");
document.writeln("<p>El area es: " + rectangulos2.area() + "</p>");

document.writeln("<p>El perimetro es: " + rectangulos3.perimetro() + "</p>");
document.writeln("<p>El area es: " + rectangulos3.area() + "</p>");

document.writeln("<p>El perimetro es: " + rectangulos4.perimetro() + "</p>");
document.writeln("<p>El area es: " + rectangulos4.area() + "</p>");
