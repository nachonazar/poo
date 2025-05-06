//Crea un objeto persona que contenga las propiedades nombre, edad y hobbies (los hobbies son un array de strings).
// Luego, escribe una función que reciba un objeto persona y un nuevo hobby y añada este hobby a la lista de hobbies de la persona.
// Finalmente, imprime los hobbies de la persona usando un bucle. Usa prompt para ingresar los datos de la persona y el nuevo hobby.

const persona = {
  nombre: "Ignacio",
  edad: 18,
  hobbies: ["fútbol", "play", "escuchar música"],
};
function nuevoHobby(persona, hobby) {
  persona.hobbies[persona.hobbies.length] = hobby;
}

const nombre = prompt("Ingrese su nombre");
const edad = parseInt(prompt("Ingrese su edad"));
const hobby = prompt("Ingrese su hobby");

nuevoHobby(persona, hobby);

for (let i = 0; i < persona.hobbies.length; i++) {
  document.writeln(persona.hobbies[i]);
}
