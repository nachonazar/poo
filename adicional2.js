const estudiantes = {
  nombre: [],
  nota: [],
};
function promedio(estudiantes) {
  let suma = 0;
  for (let i = 0; i < estudiantes.nota.length; i++) {
    suma += estudiantes.nota[i];
  }
  return suma / estudiantes.nota.length;
}
for (let i = 0; i < 4; i++) {
  const nombre = prompt("ingrese su nombre");
  estudiantes.nombre.push(nombre);

  const nota = parseInt(prompt("ingrese su nota"));
  estudiantes.nota.push(nota);
}

document.writeln(promedio(estudiantes));
