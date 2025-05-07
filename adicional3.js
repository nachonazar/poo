//Crea un objeto libro que tenga propiedades título, autor, año y género.
// Luego, escribe una función que reciba un array de libros y un género y devuelva un array con los libros de ese género usando filter.
// Usa prompt para ingresar los datos de los libros y el género.

const libro = {
  titulo: "",
  autor: "",
  año: "",
  género: "",
};

function filtrarGenero(libro, género) {
  return libro.género === género;
}
for(let i =0; i<3; i++){
const titulo = prompt("Ingrese el título del libro");
libro.titulo = titulo;

const autor = prompt("Ingrese el autor del libro");
libro.autor = autor;

const año = parseInt(prompt("Ingrese el año del libro"));
libro.año = año;

const género = prompt("Ingrese el género del libro");
libro.género = género;
}

document.writeln(filtrarGenero(libro, libro.género));
