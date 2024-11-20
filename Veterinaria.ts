import { Persona } from "./Persona";
import { Cliente } from "./Cliente";
import { Paciente } from "./Paciente";
import { Proveedor } from "./Proveedor";
import { Sucursal } from "./Sucursal";

console.log(" ");
console.error(" -----------------------------------------------------------------------------------------------------------------------");
console.error(" ------------------------------------------ 🐾 Veterinaria Pocas Pulgas 🐾 -------------------------------------------");
console.log(" ");
let id: number = 0;

console.error(" ------------------------------------------------- 🐾 Sucursales 🐾 --------------------------------------------------");
//OJO!!!!! Ver campo condicionVip --> tenemos q usarla para definir VIP al cliente????
id += 1;
let sucursal1: Sucursal = new Sucursal(id,"Marta Suarez", "Avda. Colón 1845", "Olavarría", 5);
console.warn(sucursal1.mostrarDatosSucursal());

console.error(" --------------------------------------------------- 🐾 Clientes 🐾 ---------------------------------------------------");
id += 1;
let cliente1: Cliente = new Cliente(id,"Adriana","Rivadavia 1234", 15656869, 17568123);
id += 1;
cliente1.agregarMascota(id,"Mishi","gato","hembra",11012019,"Es muy asustadiza");
id += 1;
cliente1.agregarMascota(id,"Salem","gato","macho",24052018,"Se enoja fácil");
id += 1;
let cliente2: Cliente = new Cliente(id,"Alberto","Avda. Alberdi 4125", 15445577, 23123456);
id += 1;
cliente2.agregarMascota(id,"Malevo","perro","macho",1102010,"Le faltan varios dientes");
console.log(cliente1.mostrarDatos());
console.log(cliente1.getListaMascotas());
console.log("🐾 🐾 🐾 🐾 🐾");
console.log(cliente2.mostrarDatos());
console.log(cliente2.getListaMascotas());

console.error(" ------------------------------------------------- 🐾 Proveedores 🐾 --------------------------------------------------");
id += 1;
let proveedor1: Proveedor = new Proveedor (id, "Juan Perez", "Moya 2244", 15454545,12345678,"Alimento Balanceado", 20123456789);
console.log(proveedor1.mostrarDatos());
console.error(" -----------------------------------------------------------------------------------------------------------------------");
console.error(" -----------------------------------------------------------------------------------------------------------------------");
console.log(" ");

console.error(" -------------------------------------------------- 🐾 Pacientes 🐾 ---------------------------------------------------");
id += 1;
let paciente1: Paciente = new Paciente (id,"Rocco","perro","macho",11012019,"Tiene insuficiencia renal");
console.log(paciente1.mostrarDatosPaciente());
cliente1.agregarPaciente(paciente1);
console.log(cliente1.getListaMascotas());
console.error(" ------------------------------------------------------------------------------------------------------------------------");
