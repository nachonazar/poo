const cuenta = {
  titular: "Alex",
  saldo: 0,

  ingresar(cantidad) {
    this.saldo += cantidad;
  },

  extraer(cantidad) {
    this.saldo -= cantidad;
  },

  informar() {
    return `Titular: ${this.titular}, Saldo: ${this.saldo}`;
  },
};

const ingresar = parseFloat(prompt("Ingrese dinero a la cuenta"));
cuenta.ingresar(ingresar);
const extraer = parseFloat(prompt("Retire dinero de la cuenta"));
cuenta.extraer(extraer);
document.writeln(cuenta.informar());
