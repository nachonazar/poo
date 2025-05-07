class Persona {
  constructor(nombre, edad, profesión) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesión = profesión;
  }

  saludar() {
    return `¡Hola! Mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesión}`;
  }

  despedirse() {
    return `¡Hasta luego! Soy ${this.nombre} y espero verte pronto`;
  }
}

const personas = [
  new Persona("Ignacio", 25, "Programador"),
  new Persona("Adrian", 21, "Electricista"),
];

document.writeln("<p>" + personas[0].saludar() + "</p>");
document.writeln("<p>" + personas[0].despedirse() + "</p>");
document.writeln("<p>" + personas[1].saludar() + "</p>");
document.writeln("<p>" + personas[1].despedirse() + "</p>");
