class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimeDatos() {
    return `Codigo: ${this.codigo}, Nombre: ${this.nombre}, Precio: ${this.precio}`;
  }
}

const objeto1 = new Producto("X92", "Auriculares Bluetooth", 49.99);
const objeto2 = new Producto("F50", "Camiseta de futbol Argentina 2025", 79.99);
const objeto3 = new Producto("TV30", "Televisor Smart 50 pulgadas", 349.99);

const objetos = [objeto1, objeto2, objeto3];

document.writeln("<p> " + objeto1.imprimeDatos() + "</p>");
document.writeln("<p> " + objeto2.imprimeDatos() + "</p>");
document.writeln("<p>" + objeto3.imprimeDatos() + "</p>");
