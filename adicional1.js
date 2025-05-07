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
