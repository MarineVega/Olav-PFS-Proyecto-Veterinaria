"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var Cliente_1 = require("./Cliente");
var Paciente_1 = require("./Paciente");
var Proveedor_1 = require("./Proveedor");
var Sucursal_1 = require("./Sucursal");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Datos globales
var sucursales = [];
var listaProvedores = [];
var listaClientes = [];
var listaPacientes = [];
function mostrarMenu() {
    console.log("\n  1. Crear Sucursal\n  2. Crear Proveedor\n  3. Crear Cliente\n  4. Crear Paciente\n  5. Mostrar Sucursales\n  6. Mostrar Provedores\n  7. Mostrar Clientes\n  8. Mostrar Pacientes\n  9. Salir\n  ");
}
function leerOpcion() {
    console.log('Bienvenido a 🐾 🐈 Veterinaria Pocas Pulgas 🐩 🐾');
    rl.question('Selecciona una opción: ', function (opcion) {
        switch (opcion) {
            case '1':
                crearSucursal();
                break;
            case '2':
                crearProveedor();
                break;
            case '3':
                crearCliente();
                break;
            case '4':
                crearPaciente();
                break;
            case '5':
                mostrarSucursales();
                break;
            case '6':
                mostrarListaProvedores();
                break;
            case '7':
                mostrarListaClientes();
                break;
            case '8':
                mostrarListaPacientes();
                break;
            case '9':
                rl.close();
                console.log("Salió correctamente del Sistema.\nGracias por ser parte de 🐾 🐈 Veterinaria Pocas Pulgas 🐩 🐾.");
                break;
            default:
                console.log('Opción no válida');
                leerOpcion();
        }
    });
}
var id = 0; // Inicializa el ID global para todas las clases?
//CREAMOS LA SUCURSAL
function crearSucursal() {
    console.log("ID Sucursal: ".concat(id + 1));
    id += 1; // Incrementar el ID global para el siguiente elemento que se crea
    rl.question('Nombre del Responsable de la Sucursal: ', function (responsable) {
        rl.question('Dirección de la sucursal: ', function (direccion) {
            rl.question('Localidad en la que se encuentra la sucursal: ', function (localidad) {
                var sucursal = new Sucursal_1.Sucursal(id, responsable, direccion, localidad);
                sucursales.push(sucursal);
                console.log('Sucursal creada exitosamente.');
                //console.log('-------------------------------------------------------------------------');
                console.log("🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾");
                leerOpcion();
            });
        });
    });
}
//CREAMOS PROVEEDORES
function crearProveedor() {
    console.log("ID Proveedor: ".concat(id + 1));
    id += 1;
    rl.question('Nombre del proveedor: ', function (nombre) {
        rl.question('Dirección del proveedor: ', function (direccion) {
            rl.question('Número de teléfono (sin guiones ni espacios): ', function (telefonoStr) {
                var telefono = parseInt(telefonoStr);
                if (isNaN(telefono) || telefonoStr.length < 10) {
                    console.log('Por favor, ingresa un número de teléfono válido (al menos 10 dígitos).');
                    return crearProveedor();
                }
                rl.question('Documento del proveedor: ', function (documentoStr) {
                    var documento = parseInt(documentoStr);
                    if (isNaN(documento) || documentoStr.length < 5) {
                        console.log('Por favor, ingresa un número de documento válido (al menos 5 dígitos).');
                        return crearProveedor();
                    }
                    rl.question('Rubro del proveedor: ', function (rubro) {
                        rl.question('CUIT del proveedor: ', function (CUITStr) {
                            var CUIT = parseInt(CUITStr);
                            if (isNaN(CUIT) || CUITStr.length < 11) {
                                console.log('Por favor, ingresa un número de CUIT válido (11 dígitos).');
                                return crearProveedor();
                            }
                            var proveedor = new Proveedor_1.Proveedor(id, nombre, direccion, telefono, documento, rubro, CUIT);
                            listaProvedores.push(proveedor); // Suponiendo que tienes un array 'listaClientes'
                            console.log('Proveedor creado exitosamente.');
                            //console.log('------------------------------------------------------------------');
                            console.log("🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾");
                            leerOpcion();
                        });
                    });
                });
            });
        });
    });
}
//CREAMOS CLIENTES
function crearCliente() {
    console.log("ID Cliente: ".concat(id + 1)); // Mostrar el próximo ID para el cliente
    id += 1; // Incrementar el ID global para el siguiente cliente
    rl.question('Nombre del cliente: ', function (nombre) {
        rl.question('Dirección del cliente: ', function (direccion) {
            rl.question('Número de teléfono (sin guiones ni espacios): ', function (telefonoStr) {
                var telefono = parseInt(telefonoStr); // Conversión de string a number
                if (isNaN(telefono) || telefonoStr.length < 10) {
                    console.log('Por favor, ingresa un número de teléfono válido (al menos 10 dígitos).');
                    return crearCliente(); // Volver a preguntar si el teléfono no es válido
                }
                rl.question('Documento del cliente: ', function (documentoStr) {
                    var documento = parseInt(documentoStr);
                    // Aquí puedes hacer más validaciones dependiendo de la estructura de tu documento
                    if (isNaN(documento) || documentoStr.length < 5) { // Suponiendo que el documento debe tener al menos 5 dígitos
                        console.log('Por favor, ingresa un número de documento válido (al menos 5 dígitos).');
                        return crearCliente(); // Volver a preguntar si el documento no es válido
                    }
                    var cliente = new Cliente_1.Cliente(id, nombre, direccion, telefono, documento);
                    listaClientes.push(cliente); // Suponiendo que tienes un array 'listaClientes'
                    console.log('Cliente creado exitosamente.');
                    //console.log('------------------------------------------------------------------');
                    console.log("🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾");
                    leerOpcion(); // Volver a mostrar el menú de opciones
                });
            });
        });
    });
}
function crearPaciente() {
    console.log("ID Paciente: ".concat(id + 1));
    id += 1;
    rl.question('Nombre del paciente: ', function (nombre) {
        rl.question('Especie del paciente: ', function (especie) {
            rl.question('Sexo del paciente: ', function (sexo) {
                if (sexo !== 'Macho' && sexo !== 'Hembra') {
                    console.log('Por favor, ingresa un sexo válido: Macho o Hembra.');
                    return crearPaciente();
                }
                rl.question('Fecha de nacimiento del paciente (DD-MM-YYYY): ', function (fechaStr) {
                    var fechaNacimiento = new Date(fechaStr);
                    if (isNaN(fechaNacimiento.getTime())) {
                        console.log('Por favor, ingresa una fecha válida en el formato DD-MM-YYYY.');
                        return crearPaciente();
                    }
                    rl.question('Observación del paciente: ', function (observacion) {
                        var paciente = new Paciente_1.Paciente(id, nombre, especie, sexo, fechaNacimiento, observacion);
                        listaPacientes.push(paciente);
                        console.log('Paciente creado exitosamente.');
                        //console.log('------------------------------------------------------------------');
                        console.log("🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾");
                        leerOpcion();
                    });
                });
            });
        });
    });
}
//MOSTRAMOS LAS SUCURSALES CREADAS (LISTA DE SUCURSALES)
function mostrarSucursales() {
    console.log(sucursales);
    console.log('-------------------------------------------------------------------------');
    leerOpcion();
}
//MOSTRAMOS LOS PROVEEDORES CREADOS (LISTA DE PROVEEDORES)
function mostrarListaProvedores() {
    console.log(listaProvedores);
    console.log('-------------------------------------------------------------------------');
    leerOpcion();
}
//MOSTRAMOS LOS CLIENTES CREADOS (LISTA DE CLIENTES)
function mostrarListaClientes() {
    console.log(listaClientes);
    console.log('-------------------------------------------------------------------------');
    leerOpcion();
}
//MOSTRAMOS LOS PACIENTES CREADOS (LISTA DE PACIENTES)
function mostrarListaPacientes() {
    console.log(listaPacientes);
    console.log('-------------------------------------------------------------------------');
    leerOpcion();
}
/*function mostrarSucursales() {
  console.log('Lista de sucursales:');
  sucursales.forEach((sucursal) => {
    sucursal.mostrarDatosSucursal();
    console.log('---');
  });
  leerOpcion();
}*/
mostrarMenu();
leerOpcion();
