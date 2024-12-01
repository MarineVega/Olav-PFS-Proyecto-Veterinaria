import { rl } from "./Funciones"; 
import { Sucursal } from "./Sucursal";
import { crearSucursal, modificarSucursal, eliminarSucursal, mostrarSucursales } from './Funciones';
import { crearProveedor, modificarProveedor, eliminarProveedor, mostrarProveedoresPorSucursal } from './Funciones';
import { crearCliente, modificarCliente, eliminarCliente, mostrarClientesPorSucursal } from './Funciones';
import { crearPaciente, modificarPaciente, eliminarPaciente, mostrarListaPacientes } from './Funciones';
import { registrarVisita } from './Funciones';


// Datos globales
let sucursales: Sucursal[] = [];

console.log(" ")
console.log('Bienvenido a 🐾 🐈 Veterinaria Pocas Pulgas 🐩 🐾');

// Mostrar el menú principal
export function mostrarMenuPrincipal() {
  console.log(`
  1. Sucursales
  2. Proveedores
  3. Clientes
  4. Pacientes
  5. Registrar Visita Paciente
  6. Salir
  `);
  leerOpcion();
}

// Función para leer la opción del usuario
export function leerOpcion() {
  rl.question('Selecciona una opción del Menú Principal: ', (opcion) => {
    switch (opcion) {
      case '1':
        submenuSucursales();
        break;
      case '2':
        submenuProveedores();
        break;
      case '3':
        submenuClientes();
        break;
      case '4':
        submenuPacientes();
        break;
      case '5':
        registrarVisita();
        break;
      case '6':
        rl.close();
        console.log("Salió correctamente del Sistema.\nGracias por ser parte de 🐾 🐈 Veterinaria Pocas Pulgas 🐩 🐾.");
        break;
      default:
        console.log('Opción no válida, ingresa otra opción.');
        mostrarMenuPrincipal();
    }
  });
}

// Submenú para gestionar Sucursales
export function submenuSucursales() {
  console.clear();  

  console.log(`
  \n🐾 🐈 --- Submenú de Sucursales --- 🐩 🐾\n
  1. Crear Sucursal
  2. Modificar Sucursal
  3. Eliminar Sucursal
  4. Mostrar Sucursales
  5. Volver al Menú Principal
  `);

  rl.question('Selecciona una opción del Submenú Sucursales: ', (opcion) => {
    switch (opcion) {
      case '1':
        crearSucursal();
        break;
      case '2':
        modificarSucursal();
        break;
      case '3':
        eliminarSucursal();
        break;
      case '4':
        mostrarSucursales();
        break;
      case '5':
        mostrarMenuPrincipal();
        break;
      default:
        console.log('Opción no válida, ingresa otra opción.');
        submenuSucursales();
    }
  });
}

// Submenú para gestionar Proveedores
function submenuProveedores() {
  console.clear();  

  console.log(`
  \n🐾 🐈 --- Submenú de Proveedores --- 🐩 🐾\n
  1. Crear Proveedor
  2. Modificar Proveedor
  3. Eliminar Proveedor
  4. Mostrar Proveedores
  5. Volver al Menú Principal
  `);

  rl.question('Selecciona una opción del Submenú Proveedores: ', (opcion) => {
    switch (opcion) {
      case '1':
        crearProveedor();
        break;
      case '2':
        modificarProveedor();
        break;
      case '3':
        eliminarProveedor();
        break;
      case '4':
        mostrarProveedoresPorSucursal(sucursales);
        break;
      case '5':
        mostrarMenuPrincipal();
        break;
      default:
        console.log('Opción no válida, ingresa otra opción.');
        submenuProveedores();
    }
  });
}

// Submenú para gestionar Clientes
function submenuClientes() {
  console.clear();  

  console.log(`
  \n🐾 🐈 --- Submenú de Clientes --- 🐩 🐾\n
  1. Crear Cliente
  2. Modificar Cliente
  3. Eliminar Cliente
  4. Mostrar Clientes
  5. Volver al menú principal
  `);

  rl.question('Selecciona una opción del Submenú de Clientes: ', (opcion) => {
    switch (opcion) {
      case '1':
        crearCliente();
        break;
      case '2':
        modificarCliente();
        break;
      case '3':
        eliminarCliente();
        break;
      case '4':
        mostrarClientesPorSucursal(sucursales);
        break;
      case '5':
        mostrarMenuPrincipal();
        break;
      default:
        console.log('Opción no válida, ingresa otra opción.');
        submenuClientes();
    }
  });
}

// Submenú para gestionar Pacientes
function submenuPacientes() {
  console.clear();  

  console.log(`
  \n🐾 🐈 --- Submenú de Pacientes --- 🐩 🐾\n
  1. Crear Paciente
  2. Modificar Paciente
  3. Eliminar Paciente
  4. Mostrar Pacientes
  5. Volver al Menú Principal
  `);

  rl.question('Selecciona una opción del Submenú de Pacientes: ', (opcion) => {
    switch (opcion) {
      case '1':
        crearPaciente();
        break;
      case '2':
        modificarPaciente();
        break;
      case '3':
        eliminarPaciente();
        break;
      case '4':
        mostrarListaPacientes();
        break;
      case '5':
        mostrarMenuPrincipal();
        break;
      default:
        console.log('Opción no válida, ingresa otra opción.');
        submenuPacientes();
    }
  });
}

// Mostrar el menú principal al iniciar el programa
mostrarMenuPrincipal();

