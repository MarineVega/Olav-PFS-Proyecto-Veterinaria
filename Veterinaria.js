"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente_1 = require("./Cliente");
var Sucursal_1 = require("./Sucursal");
console.log(" ");
console.error(" -----------------------------------------------------------------------------------------------------------------------");
console.error(" ------------------------------------------ 🐾 🐈 Veterinaria Pocas Pulgas 🐩 🐾 ---------------------------------------");
console.log(" ");
var id = 0;
console.error(" ------------------------------------------------- 🐾 Sucursales 🐾 ----------------------------------------------------");
id += 1;
var sucursal1 = new Sucursal_1.Sucursal(id, "Marta Suarez", "Avda. Colón 1845", "Olavarría");
console.warn(sucursal1.mostrarDatosSucursal());
sucursal1.agregarCliente(id, "Adriana Varela", "Rivadavia 1284", 15656869, 17568123);
sucursal1.agregarCliente(id, "Carlos Gómez", "Sargento Cabral 2588", 15660898, 14906242);
console.log(sucursal1.getListaClientes());
sucursal1.eliminarCliente(id, "Adriana Varela");
console.log(sucursal1.getListaClientes());
console.warn(sucursal1.mostrarDatosSucursal());
console.error(" --------------------------------------------------- 🐾 Clientes 🐾 ---------------------------------------------------");
id += 1;
var cliente1 = new Cliente_1.Cliente(id, "Rosana Ciancio", "Alsina 2718", 156593503, 14780533);
id += 1;
var cliente2 = new Cliente_1.Cliente(id, "Fabricio Gonzaléz", "Dorrego 4525", 15320238, 32156928);
id += 1;
cliente1.agregarPaciente(id, "Mishi", "gato", "hembra", new Date('1990-05-15'), "Es muy asustadiza");
id += 1;
cliente1.agregarPaciente(id, "Salem", "gato", "macho", new Date('1990-05-15'), "Se enoja fácil");
id += 1;
var cliente3 = new Cliente_1.Cliente(id, "Alberto Capitanich", "Avda. Alberdi 4125", 15445577, 23123456);
id += 1;
cliente2.agregarPaciente(id, "Malevo", "perro", "macho", new Date('1990-05-15'), "Le faltan varios dientes");
console.log(cliente1.mostrarDatos());
console.log(cliente1.getListaPacientes());
cliente1.eliminarPaciente(3);
console.log(cliente1.mostrarDatos());
console.log(cliente1.getListaPacientes());
console.log("🐾 🐾 🐾 🐾 🐾");
console.log(cliente2.mostrarDatos());
console.log(cliente2.getListaPacientes());
/*console.error(" ------------------------------------------------- 🐾🧾 Proveedores 🦴🐾 --------------------------------------------------");
id += 1;
let proveedor1: Proveedor = new Proveedor (id, "Juan Perez", "Moya 2244", 15454545, 12345678, "Alimento Balanceado", 20123456789);
console.log(proveedor1.mostrarDatos());
console.error(" -----------------------------------------------------------------------------------------------------------------------");
console.error(" -----------------------------------------------------------------------------------------------------------------------");
console.log(" ");

console.error(" -------------------------------------------------- 🐾🏥 Pacientes 🩺🐾 ---------------------------------------------------");
id += 1;
let paciente1: Paciente = new Paciente (id,"Rocco","perro","macho",new Date('2008-05-15'),"Tiene insuficiencia renal");
let paciente2: Paciente = new Paciente (id,"Prueba","perro","macho",new Date('2010-06-25'),"Tiene insuficiencia renal");

// Crear una instancia de la clase Cliente
let cliente = new Cliente(1, "Juan Pérez", "Calle Falsa 123", 123456789, 987654321);

// Agregar pacientes usando el método agregarPaciente
cliente.agregarPaciente(paciente1.getID(), paciente1.getNombre(), paciente1.getEspecie(), paciente1.getSexo(), paciente1.getFechaNacimiento(), paciente1.getObservacion());
cliente.agregarPaciente(paciente2.getID(), paciente2.getNombre(), paciente2.getEspecie(), paciente2.getSexo(), paciente2.getFechaNacimiento(), paciente2.getObservacion());

// Intentar agregar un paciente duplicado
cliente.agregarPaciente(1, "Rocco", "perro", "macho", new Date('2015-02-11'), "Tiene insuficiencia renal");


// Mostrar lista de pacientes para verificar resultados
// console.log(cliente1.getListaPacientes()); Hay un error en cliente1, sugiere que usemos cliente

console.error(" ----------------------------------------------------------------------------------------------------------------------");

console.error(" ------------------------------------------------- 🐾 Sucursales 🐾 --------------------------------------------------");

// Arreglo para almacenar las sucursales
const sucursales: Sucursal[] = [];

// Función para agregar una sucursal con clientes y proveedores opcionales
function agregarSucursal(arregloSucursales: Sucursal[],  datosSucursal: { id: number, responsable: string, direccion: string, localidad: string, clientes?: Cliente[], proveedores?: Proveedor[] }): void {
    
    const sucursalExistente = arregloSucursales.find(sucursal => sucursal.getId() === datosSucursal.id);

    if (sucursalExistente) {
        console.log(`Error: La sucursal con ID ${datosSucursal.id} ya existe.`);
    } else {
        const nuevaSucursal = new Sucursal(datosSucursal.id, datosSucursal.responsable, datosSucursal.direccion, datosSucursal.localidad);
        
        // Agregar clientes y proveedores si se proporcionan
        if (datosSucursal.clientes) {
            datosSucursal.clientes.forEach(cliente => nuevaSucursal.getListaClientes().push(cliente));
        }
        if (datosSucursal.proveedores) {
            datosSucursal.proveedores.forEach(proveedor => nuevaSucursal.getListaProveedores().push(proveedor));
        }

        arregloSucursales.push(nuevaSucursal);
        console.log(`Sucursal con ID ${datosSucursal.id} agregada correctamente.`);
    }
}

// Función para modificar clientes y proveedores en una sucursal existente
function modificarListasSucursal(arregloSucursales: Sucursal[], idSucursal: number,  nuevosClientes?: Cliente[], nuevosProveedores?: Proveedor[]): void {
    
    const sucursalExistente = arregloSucursales.find(sucursal => sucursal.getId() === idSucursal);

    if (sucursalExistente) {
        // Agregar nuevos clientes si no existen
        if (nuevosClientes) {
            nuevosClientes.forEach(cliente => {
                const clienteExistente = sucursalExistente.getListaClientes().find(c => c.getId() === cliente.getId());
                if (!clienteExistente) {
                    sucursalExistente.getListaClientes().push(cliente);
                    console.log(`Cliente con ID ${cliente.getId()} agregado a la sucursal ${idSucursal}.`);
                } else {
                    console.log(`El cliente con ID ${cliente.getId()} ya existe en la sucursal ${idSucursal}.`);
                }
            });
        }

        // Agregar nuevos proveedores si no existen
        if (nuevosProveedores) {
            nuevosProveedores.forEach(proveedor => {
                const proveedorExistente = sucursalExistente.getListaProveedores().find(p => p.getId() === proveedor.getId());
                if (!proveedorExistente) {
                    sucursalExistente.getListaProveedores().push(proveedor);
                    console.log(`Proveedor con ID ${proveedor.getId()} agregado a la sucursal ${idSucursal}.`);
                } else {
                    console.log(`El proveedor con ID ${proveedor.getId()} ya existe en la sucursal ${idSucursal}.`);
                }
            });
        }
    } else {
        console.log(`Error: No se encontró una sucursal con ID ${idSucursal}.`);
    }
}

// pruebasssssssssss

// Crear clientes y proveedores
let cliente10 = new Cliente(10, "Cliente 1", "Dirección 1", 123456789, 11111111);
const cliente20 = new Cliente(20, "Cliente 2", "Dirección 2", 987654321, 22222222);
const proveedor12 = new Proveedor(12, "Proveedor 1", "Dirección A", 1122334455, 33333333, "Rubro A", 1234567890);
const proveedor21 = new Proveedor(21, "Proveedor 2", "Dirección B", 5566778899, 44444444, "Rubro B", 9876543210);

// Agregar una sucursal con listas iniciales de clientes y proveedores
agregarSucursal(sucursales, {
    id: 1,
    responsable: "Pepe Gómez",
    direccion: "Calle 123",
    localidad: "Sierras Bayas",
    clientes: [cliente10, cliente20],
    proveedores: [proveedor12]
});

// Modificar las listas de clientes y proveedores en una sucursal existente
modificarListasSucursal(sucursales, 1, [new Cliente(3, "Cliente 3", "Sin calle 3", 123123123, 55555555)], [proveedor21]);

// modificar una sucursal inexistente
modificarListasSucursal(sucursales, 2, [cliente10], [proveedor12]);

// Mostrar las sucursales
sucursales.forEach(sucursal => {
    console.log(sucursal.mostrarDatosSucursal());
});*/ 
