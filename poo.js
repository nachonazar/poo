const auto = {
    color: "Gris plata",
    marca: "Honda",
    modelo: "Civic 2023",
    estado: false,
  
    encender: function () {
      this.estado = true;
      document.writeln("<p>auto encendido</p>");
    },
    apagar: function () {
      this.estado = false;
      document.writeln("<p>El auto se apagó</p>");
    },
  };
  
  auto.encender();
  auto.apagar();