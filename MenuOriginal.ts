import * as readline from 'readline';
import { Persona } from "./Persona";
import { Cliente } from "./Cliente";
import { Paciente } from "./Paciente";
import { Proveedor } from "./Proveedor";
import { Sucursal } from "./Sucursal";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Datos globales
let sucursales: Sucursal[] = [];
let listaProvedores: Proveedor[] = [];
let listaClientes: Cliente[] = [];
let listaPacientes: Paciente[] = [];

function mostrarMenu() {
  console.log(`
  1. Crear Sucursal
  2. Crear Proveedor
  3. Crear Cliente
  4. Crear Paciente
  5. Mostrar Sucursales
  6. Mostrar Provedores
  7. Mostrar Clientes
  8. Mostrar Pacientes
  9. Salir
  `);
}

console.log('Bienvenido a 🐾 🐈 Veterinaria Pocas Pulgas 🐩 🐾');

function leerOpcion() {
    rl.question('Selecciona una opción: ', (opcion) => {
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
                console.log("Salió correctamente del Sistema.\nGracias por ser parte de 🐾 🐈 Veterinaria Pocas Pulgas 🐩 🐾.")
                break;
            default:
                console.log('Opción no válida');
                leerOpcion();
        }
    });
}

let id = 0; // Inicializa el ID global para todas las clases?

//CREAMOS LA SUCURSAL
function crearSucursal() {
  console.log(`ID Sucursal: ${id + 1}`); 
  id += 1; // Incrementar el ID global para el siguiente elemento que se crea
  rl.question('Nombre del Responsable de la Sucursal: ', (responsable) => {
    rl.question('Dirección de la sucursal: ', (direccion: string) =>  {
        rl.question('Localidad en la que se encuentra la sucursal: ', (localidad) =>  {   
      const sucursal = new Sucursal(id, responsable, direccion, localidad);
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
    console.log(`ID Proveedor: ${id + 1}`); 
    id += 1; 
    rl.question('Nombre del proveedor: ', (nombre) => {//Nombre no presenta validación 
      rl.question('Dirección del proveedor: ', (direccion) => { //Tampoco se valida la dirección 
        rl.question('Número de teléfono (sin guiones ni espacios): ', (telefonoStr) => {
          const telefono = parseInt(telefonoStr); //Convierte string a number
          if (isNaN(telefono) || telefonoStr.length < 10) { //Intento de validación SE PUEDE MEJORAR! 
            console.log('Por favor, ingresa un número de teléfono válido (al menos 10 dígitos).');
            return crearProveedor(); 
          }
          rl.question('Documento del proveedor: ', (documentoStr) => {
              const documento = parseInt(documentoStr);
              if (isNaN(documento) ||documentoStr.length < 5) {  
                console.log('Por favor, ingresa un número de documento válido (al menos 5 dígitos).');
                return crearProveedor(); 
              }
              rl.question('Rubro del proveedor: ', (rubro) => { //Rubro no presenta validación (Si el usuatio ingresa un número por ejemplo lo toma igual)
                rl.question('CUIT del proveedor: ', (CUITStr) => {
                    const CUIT = parseInt(CUITStr);
                    if (isNaN(CUIT) ||CUITStr.length < 11) {  
                        console.log('Por favor, ingresa un número de CUIT válido (11 dígitos).');
                        return crearProveedor(); 
                      }
            const proveedor = new Proveedor(id, nombre, direccion, telefono, documento, rubro, CUIT);
            listaProvedores.push(proveedor);  
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
  console.log(`ID Cliente: ${id + 1}`); 
  id += 1; 
  rl.question('Nombre del cliente: ', (nombre) => {
    rl.question('Dirección del cliente: ', (direccion) => {
      rl.question('Número de teléfono (sin guiones ni espacios): ', (telefonoStr) => {
        const telefono = parseInt(telefonoStr); 
        if (isNaN(telefono) || telefonoStr.length < 10) {
          console.log('Por favor, ingresa un número de teléfono válido (al menos 10 dígitos).');
          return crearCliente();  
        }
        rl.question('Documento del cliente: ', (documentoStr) => {
            const documento = parseInt(documentoStr);
            if (isNaN(documento) ||documentoStr.length < 5) {  
              console.log('Por favor, ingresa un número de documento válido (al menos 5 dígitos).');
              return crearCliente();  
            }
          const cliente = new Cliente(id, nombre, direccion, telefono, documento);
          listaClientes.push(cliente);  
          console.log('Cliente creado exitosamente.');
          //console.log('------------------------------------------------------------------');
          console.log("🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾");
          leerOpcion();  
        });
      });
    });
  });
}

function crearPaciente() {
    console.log(`ID Paciente: ${id + 1}`); 
    id += 1; 
    rl.question('Nombre del paciente: ', (nombre) => {
      rl.question('Especie del paciente: ', (especie) => {
        rl.question('Sexo del paciente: ', (sexo) => {
          if (sexo !== 'Macho' && sexo !== 'Hembra') {
            console.log('Por favor, ingresa un sexo válido: Macho o Hembra.');
            return crearPaciente(); 
          }
          rl.question('Fecha de nacimiento del paciente (DD-MM-YYYY): ', (fechaStr) => {
            const fechaNacimiento = new Date(fechaStr);
            if (isNaN(fechaNacimiento.getTime())) {
              console.log('Por favor, ingresa una fecha válida en el formato DD-MM-YYYY.');
              return crearPaciente();
            }
            rl.question('Observación del paciente: ', (observacion) => {
              const paciente = new Paciente(id, nombre, especie, sexo, fechaNacimiento, observacion);
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