"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente_1 = require("./Cliente");
console.log(" ");
console.log(" ---------------------------------------- 🐾 Veterinaria Pocas Pulgas 🐾 ----------------------------------------");
var id = 0;
// generar ids
id += 1;
var cliente1 = new Cliente_1.Cliente(id, "Adriana", "Rivadavia 1234", 15656869, 17568123);
console.log(cliente1.mostrarDatos());
