import { Persona } from "./Persona";
import { Cliente } from "./Cliente";
import { Paciente } from "./Paciente";


console.log(" ");
console.log(" **************************************** Veterinaria Pocas Pulgas ****************************************");

let id: number = 0;
// generar ids
id += 1;

let cliente1: Cliente = new Cliente(id,"Adriana","Rivadavia 1234", 15656869, 17568123)
console.log(cliente1.mostrarDatos())
