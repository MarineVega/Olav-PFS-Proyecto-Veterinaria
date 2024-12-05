import * as fs from 'fs';
import { Sucursal } from './Sucursal';
import { Cliente } from './Cliente';
import { Proveedor } from './Proveedor';
import { Paciente } from './Paciente';
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// SE DEFINEN Y SE CREAN LAS RUTAS PARA LOS DATOS QUE SE VAN A CREAR Y SE DEBEN ALMACENAR
const FILE_PATH_SUCS = './DatosPocasPulgas/sucursales.json';
const FILE_PATH_PROV = './DatosPocasPulgas/proveedores.json';
const FILE_PATH_CLIENTES = './DatosPocasPulgas/clientes.json';
const FILE_PATH_PACIENTES = './DatosPocasPulgas/pacientes.json';

// CON ESTA FUNCION SE LEEN LOS DATOS DE LAS SUCURSALES CREADAS EN LA RED VETERINARIA
function leerSucursales(): Sucursal[] {
  if (!fs.existsSync(FILE_PATH_SUCS)) {
    console.log("Archivo de sucursales no encontrado, creando uno nuevo.");
    return []; 
  }

  try {
    const DatosPocasPulgas = fs.readFileSync(FILE_PATH_SUCS, 'utf-8');
    return DatosPocasPulgas ? JSON.parse(DatosPocasPulgas) : []; 
  } catch (error) {
    console.error('Error al leer el archivo de sucursales:', error);
    return [];  
  }
}

// FUNCION QUE PERMITE GUARDAR LOS DATOS DE LAS SUCURSALES EN UN ARCHIVO JSON
function guardarSucursales(sucursales: Sucursal[]): void {
  const jsonData = JSON.stringify(sucursales, null, 2); // CONVIERTE OBJETOS EN STRING PARA PODER VERLOS DE FORMA CLARA
  fs.writeFileSync(FILE_PATH_SUCS, jsonData, 'utf-8');
}

export { leerSucursales, guardarSucursales };

// FUNCION PARA LEER LOS PROVEEDORES ALMACENADOS EN UN ARCHIVO JSON
function leerProveedores(): Proveedor[] {
  if (!fs.existsSync(FILE_PATH_PROV)) {
    console.log("Archivo de proveedores no encontrado, creando uno nuevo.");
    return [];  
  }

  try {
    const DatosPocasPulgas = fs.readFileSync(FILE_PATH_PROV, 'utf-8');
    return DatosPocasPulgas ? JSON.parse(DatosPocasPulgas) : [];
  } catch (error) {
    console.error('Error al leer el archivo de proveedores:', error);
    return [];
  }
}

// FUNCION QUE PERMITE GUARDAR LOS DATOS DE LOS PROVEEDORES EN UN ARCHIVO JSON
function guardarProveedores(proveedores: Proveedor[]): void {
  const jsonData = JSON.stringify(proveedores, null, 2); 
  fs.writeFileSync(FILE_PATH_PROV, jsonData, 'utf-8');
}

// FUNCION QUE PERMITE GUARDAR LOS DATOS DE TODOS LOS PROVEEDORES DE LA RED VETERINARIS EN UN ARCHIVO JSON
function guardarProveedoresSucursal(sucursales: Sucursal[]): void {
  const allProveedores: Proveedor[] = [];

  sucursales.forEach(sucursal => {
    allProveedores.push(...sucursal.getListaProveedores());
  });

  guardarProveedores(allProveedores);
}

export { leerProveedores, guardarProveedores, guardarProveedoresSucursal };

// FUNCION PARA LEER LOS CLIENTES ALMACENADOS EN UN ARCHIVO JSON
function leerClientes(): Cliente[] {
  if (!fs.existsSync(FILE_PATH_CLIENTES)) {
    console.log("Archivo de clientes no encontrado, creando uno nuevo.");
    return []; 
  }

  try {
    const DatosPocasPulgas = fs.readFileSync(FILE_PATH_CLIENTES, 'utf-8');
    return DatosPocasPulgas ? JSON.parse(DatosPocasPulgas) : [];
  } catch (error) {
    console.error('Error al leer el archivo de clientes:', error);
    return [];
  }
}

// FUNCION QUE PERMITE GUARDAR LOS DATOS DE LOS CLIENTES EN UN ARCHIVO JSON
function guardarClientes(clientes: Cliente[]): void {
  const jsonData = JSON.stringify(clientes, null, 2); // Serializa los datos con formato legible
  fs.writeFileSync(FILE_PATH_CLIENTES, jsonData, 'utf-8');
}

// FUNCION QUE PERMITE GUARDAR LOS DATOS DE TODOS LOS CLIENTES DE LA RED VETERINARIS EN UN ARCHIVO JSON
function guardarClientesSucursal(sucursales: Sucursal[]): void {
  const allClientes: Cliente[] = [];

  sucursales.forEach(sucursal => {
    allClientes.push(...sucursal.getListaClientes());
  });

  guardarClientes(allClientes);
}

export { leerClientes, guardarClientes, guardarClientesSucursal };

// FUNCION PARA LEER LOS PACIENTES ALMACENADOS EN UN ARCHIVO JSON
function leerPacientes(): Paciente[] {
  if (!fs.existsSync(FILE_PATH_PACIENTES)) {
    console.log("Archivo de pacientes no encontrado, creando uno nuevo.");
    return [];  
  }

  try {
    const DatosPocasPulgas = fs.readFileSync(FILE_PATH_PACIENTES, 'utf-8');
    return DatosPocasPulgas ? JSON.parse(DatosPocasPulgas
    ) : [];
  } catch (error) {
    console.error('Error al leer el archivo de pacientes:', error);
    return [];
  }
}

// FUNCION QUE PERMITE GUARDAR LOS DATOS DE LOS PACIENTES EN UN ARCHIVO JSON
function guardarPacientes(pacientes: Paciente[]): void {
  const jsonData = JSON.stringify(pacientes, null, 2); // Serializa los datos con formato legible
  fs.writeFileSync(FILE_PATH_PACIENTES, jsonData, 'utf-8');
}

// FUNCION QUE PERMITE GUARDAR LOS DATOS DE TODOS LOS PACIENTES DE LA RED VETERINARIS EN UN ARCHIVO JSON
function guardarPacientesSucursal(sucursales: Sucursal[]): void {
  const allPacientes: Paciente[] = [];

  sucursales.forEach(sucursal => {
    sucursal.getListaClientes().forEach(cliente => {
      allPacientes.push(...cliente.getListaPacientes());
    });
  });

  guardarPacientes(allPacientes);
}

export { leerPacientes, guardarPacientes, guardarPacientesSucursal };

// DEFINIMOS LAS VARIABLES SUCURSALES, CLIENTES, PROOVEEDORES Y PACIENTES?

let sucursales: Sucursal[] = leerSucursales();
let clientes: Cliente[] = leerClientes();
let proveedores: Proveedor[] = leerProveedores();
let pacientes: Paciente[] = leerPacientes();

let id = 0;

console.log(" ");
console.log('Bienvenido a 🐾 🐈 Veterinaria Pocas Pulgas 🐩 🐾');

export function mostrarMenuPrincipal() {
  console.log(`
  1. 🏥 Sucursales
  2. 🦴 Proveedores
  3. 🧍 Clientes
  4. 🐕 Pacientes
  5. 📝 Registrar Visita Paciente
  6. 👋 Salir
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

function submenuSucursales() {
    console.clear();  
  
    console.log(`
    \n🐾 🐈 --- Submenú de Sucursales --- 🐩 🐾\n
    1. Crear Sucursal 🏥
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
  
  function submenuProveedores() {
    console.clear();  
  
    console.log(`
    \n🐾 🐈 --- Submenú de Proveedores --- 🐩 🐾\n
    1. Crear Proveedor 🦴
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
  
  function submenuClientes() {
    console.clear();  
  
    console.log(`
    \n🐾 🐈 --- Submenú de Clientes --- 🐩 🐾\n
    1. Crear Cliente 🧍
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
  
  function submenuPacientes() {
    console.clear();  
  
    console.log(`
    \n🐾 🐈 --- Submenú de Pacientes --- 🐩 🐾\n
    1. Crear Paciente 🐕
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
  
  mostrarMenuPrincipal();
  

// FUNCION PARA CREAR UNA SUCURSAL
function crearSucursal() {
  id += 1;
  console.log(`\nID Sucursal: ${id}\n`);
  rl.question('Nombre del Responsable de la Sucursal: ', (responsable) => {
    rl.question('\nDirección de la Sucursal: ', (direccion: string) => {
      rl.question('\nLocalidad en la que se encuentra la Sucursal: ', (localidad) => {
        const sucursal = new Sucursal(id, responsable, direccion, localidad);
        sucursales.push(sucursal);
        guardarSucursales(sucursales); // Guardamos en el archivo JSON
        console.log('\nSucursal creada exitosamente ✅');
  
        rl.question('\nPresione Enter para continuar ⌨', () => {
          submenuSucursales();
        });
      });
    });
  });
}

// FUNCION PARA MODIFICAR UNA SUCURSAL

function modificarSucursal() {
  rl.question('\nIngresa el ID de la Sucursal a modificar: ', (idStr) => {
    const id = parseInt(idStr);
    const sucursal = sucursales.find(s => s.getId() === id);
  
    if (!sucursal) {
      console.log('\nNo se encontró una Sucursal con ese ID 🔎\n');

      rl.question('Presione Enter para continuar ⌨', () => {  
        submenuSucursales();
        leerOpcion(); 
      });
      
    }
  
    rl.question('\nNuevo responsable: ', (responsable) => {
      rl.question('\nNueva dirección: ', (direccion) => {
        rl.question('\nNueva localidad: ', (localidad) => {
          sucursal.setResponsable(responsable);
          sucursal.setDireccion(direccion);
          sucursal.setLocalidad(localidad);
          guardarSucursales(sucursales); // Guardamos los cambios en el archivo
  
          console.log('\nSucursal modificada exitosamente ✅');
  
          rl.question('\nPresione Enter para continuar...', () => {

            submenuSucursales();
            leerOpcion(); 
          });
        });
      });
    });
  });
}

// FUNCION PARA ELIMINAR UNA SUCURSAL

function eliminarSucursal() {
  rl.question('\nIngresa el ID de la Sucursal a eliminar: ', (idStr) => {
    const id = parseInt(idStr);
    const index = sucursales.findIndex(s => s.getId() === id);
  
     if (index === -1) {
        console.log('\nNo se encontró una Sucursal con ese ID ​🔎\n​');

         rl.question('Presione Enter para continuar...', () => {  
          submenuSucursales();
          leerOpcion(); 
        });
        
      }

    const sucursal = sucursales[index];
  
    // Verificar si tiene clientes o proveedores
    if (sucursal.getListaClientes().length > 0 || sucursal.getListaProveedores().length > 0) {
      console.log('\nNo se puede eliminar esta Sucursal porque tiene Clientes o Proveedores registrados ⚠️\n');
    } else {
      sucursales.splice(index, 1);
      guardarSucursales(sucursales); // Guardamos los cambios en el archivo
      console.log('\nSucursal eliminada exitosamente 🗑️');
    }
  
    rl.question('\nPresione Enter para continuar...', () => {
      submenuSucursales();
      leerOpcion(); 
    });
  });
}

// FUNCION PARA MOSTRAR SUCURSAL

function mostrarSucursales(): void {
  console.log('\n🐾🐈---------------------------------------------🐾Listado de Sucursales🐾---------------------------------------------🐩🐾\n');
  if (sucursales.length === 0) {
    console.log('\nNo hay Sucursales registradas.');
  } else {
    sucursales.forEach((sucursal, index) => {
      console.log(`\nSucursal (ID): ${sucursales[index].getId()} - Responsable: ${sucursales[index].getResponsable()}\n   Dirección: ${sucursal.getDireccion()}\n   Localidad: ${sucursal.getLocalidad()}`);
    });
    console.log('\n🐾🐈------------------------------------------------------🐾🐾-------------------------------------------------------🐩🐾\n');
  }
  
  rl.question('Presione Enter para continuar...', () => {
  
    submenuSucursales(); 
    leerOpcion(); 
  });

}

  /* Proveeodres */
  
 //CREAMOS PROVEEDORES

function crearProveedor() {
    elegirSucursal();
  
    rl.question('\nElija el ID de la Sucursal a la que pertenece el Proveedor: ', (idSucursalStr) => {
      const idSucursal = parseInt(idSucursalStr);
      const index = sucursales.findIndex(sucursal => sucursal.getId() === idSucursal);
  
      if (index >= 0) {
        let sucursalProveedor = sucursales[index];
  
        id += 1; 
        console.log(`\nID Proveedor: ${id}\n`);
        rl.question('\nNombre del Proveedor: ', (nombre) => {
          rl.question('\nDirección del Proveedor: ', (direccion) => {
            solicitarEntrada('\nNúmero de teléfono (sin guiones ni espacios) (10 dígitos): ', validarTelefono, (telefono) => {
              solicitarEntrada('\nDocumento del Proveedor: ', validarDocumento, (documento) => {
                rl.question('\nRubro del Proveedor: ', (rubro) => {
                  solicitarEntrada('\nCUIT del Proveedor (11 dígitos): ', validarCUIT, (CUIT) => {
                  
                    sucursalProveedor.agregarProveedor(id, nombre, direccion, parseInt(telefono), parseInt(documento), rubro, parseInt(CUIT));
  
                    console.log('\nProveedor creado exitosamente ✅');

                    guardarProveedoresSucursal(sucursales);
  
                    console.log("\n🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾\n");
  
                    rl.question('Presione Enter para continuar...', () => {

                      submenuProveedores(); 
                      leerOpcion();
                    });
                  });
                });
              });
            });
          });
        });
      } else {
        console.log('\nPor favor ingrese un número de Sucursal existente.');
        return crearProveedor();
      }
    });
  }
  
  // Función para modificar los datos de un proveedor
  function modificarProveedor() {
    rl.question('\nIngresa el DNI del Proveedor a modificar: ', (dniStr) => {
      const dni = parseInt(dniStr);
      const sucursal = obtenerSucursalProveedor(dni);
  
      if (!sucursal) {
        console.log('\nNo se encontró la sucursal actual ​🔎\n​');
        return leerOpcion();
      }
  
      rl.question('\nNuevo nombre: ', (nombre) => {
        rl.question('\nNueva dirección: ', (direccion) => {
          solicitarEntrada('\nNuevo teléfono (sin guiones ni espacios) (10 dígitos): ', validarTelefono, (telefono) => {
            rl.question('\nNuevo rubro: ', (rubro) => {
              solicitarEntrada('\nNuevo CUIT del proveedor (11 dígitos): ', validarCUIT, (CUIT) => {
  
                sucursal.modificarProveedor(dni, nombre, direccion, parseInt(telefono), rubro, parseInt(CUIT));
                console.log('\nProveedor modificado exitosamente ✅');
  
                guardarProveedoresSucursal(sucursales);
  
                console.log('\n🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾\n');

                rl.question('Presione Enter para continuar...', () => {

                  submenuProveedores(); 
                  leerOpcion();
                });
              });
            });
          });
        });
      });
    });
  }
  
  // Función para eliminar un proveedor
  function eliminarProveedor() {
    rl.question('\nIngresa el DNI del Proveedor a eliminar: ', (dniStr) => {
      const dni = parseInt(dniStr);
      const sucursal = obtenerSucursalProveedor(dni);
  
      if (!sucursal) {
        console.log('\nNo se encontró la sucursal actual 🔎\n');
        return leerOpcion();
      }
  
      // Buscar el proveedor en la sucursal
      const proveedor = sucursal.getListaProveedores().find(c => c.getDocumento() === dni);
      if (!proveedor) {
        console.log(`\nNo se encontró un Proveedor con DNI ${dni} 🔎\n`);
      } else {
        sucursal.eliminarProveedor(proveedor.getId(), proveedor.getNombre());
        console.log('\nProveedor eliminado exitosamente 🗑️');
  
        // Guardamos los proveedores actualizados
        guardarProveedoresSucursal(sucursales);
      }
  
      rl.question('\nPresione Enter para continuar...', () => {

        submenuProveedores();
        leerOpcion();
      });
    });
  }
  
  // Función para obtener la sucursal según el DNI del proveedor
  function obtenerSucursalProveedor(dni: number): Sucursal | null {
    for (const sucursal of sucursales) {
      const proveedor = sucursal.getListaProveedores().find(c => c.getDocumento() === dni);
      if (proveedor) {
        return sucursal;
      }
    }
    console.log(`\nNo se encontró un Proveedor con DNI ${dni} en ninguna Sucursal ❌\n`);
    return null;
  }
  
  // Función para mostrar los proveedores por sucursal
function mostrarProveedoresPorSucursal(sucursales: Sucursal[]): void {
    console.log('\n🐾🐈---------------------------------------------🐾Listado de Proveedores por Sucursal🐾---------------------------------------------🐩🐾\n');
    let resultado = "";

    for (const sucursal of sucursales) {

        resultado += `Sucursal: ${sucursal.getId()}\n`;
        resultado += "Proveedores:\n";

        const listaProveedores = sucursal.getListaProveedores();

        if (listaProveedores.length === 0) {
            resultado += "  - No hay Proveedores registrados.\n";
        } else {
            for (const proveedor of listaProveedores) {
                resultado += `  - ${proveedor.mostrarDatos()}\n`;
            }
        }

        resultado += "\n";
    }

    console.log(resultado);

    console.log('\n🐾🐈----------------------------------------------------------------🐾🐾----------------------------------------------------------------🐩🐾\n');

    rl.question('\nPresione Enter para continuar...', () => {
        submenuProveedores();
        leerOpcion();
    });
}

//VALIDACIONES
function validarTelefono(telefono) {
    return /^\d{10,}$/.test(telefono);
  }
  
  function validarDocumento(documento) {
    return /^\d{5,}$/.test(documento);
  }
  
  function validarCUIT(CUIT) {
    return /^\d{11,}$/.test(CUIT);
  }
  
  function validarSexo(sexo) {
    if (sexo == 'Macho' || sexo == 'Hembra') {
      return true;
    } else {
      return false;
    }
  }
  
  function validarFecha(fecha) {
    const fechaNacimiento = new Date(fecha);
    if (isNaN(fechaNacimiento.getTime())) {
      return false;
    } else {
      return true;
    }
  }
  
  function solicitarEntrada(mensaje, validador, callback) {
    rl.question(mensaje, (input) => {
      if (!validador(input)) {
        console.log('\nDato inválido. Inténtalo de nuevo ​⚠️​\n');
        return solicitarEntrada(mensaje, validador, callback);
      }
      callback(input);
    });
  }
  
  function elegirSucursal(): void {
    if (sucursales.length === 0) {
      console.log('No hay Sucursales registradas.');
    } else {
      sucursales.forEach((sucursal, index) => {
        console.log(`\nSucursal (ID): ${sucursales[index].getId()} - Responsable: ${sucursales[index].getResponsable()}`);
      });
    }
  }

  /* Clientes */
  
  //CREAMOS CLIENTES

function crearCliente() {
    elegirSucursal();
  
    rl.question('\nElija el ID de la Sucursal a la que pertenece el Cliente: ', (idSucursalStr) => {
      const idSucursal = parseInt(idSucursalStr);
      const index = sucursales.findIndex(sucursal => sucursal.getId() === idSucursal);
  
      if (index >= 0) {
        let sucursalCliente = sucursales[index];
  
        id += 1; 
        console.log(`\nID Cliente: ${id}\n`);
  
        rl.question('Nombre del Cliente: ', (nombre) => {
          rl.question('\nDirección del Cliente: ', (direccion) => {
            solicitarEntrada('\nNúmero de teléfono (sin guiones ni espacios) (10 dígitos): ', validarTelefono, (telefono) => {
              solicitarEntrada('\nDocumento del Cliente: ', validarDocumento, (documento) => {
  
                // Crear cliente y asociarlo a la sucursal
                sucursalCliente.agregarCliente(id, nombre, direccion, parseInt(telefono), parseInt(documento));
  
                console.log('\nCliente creado exitosamente ✅');
  
                guardarClientesSucursal(sucursales);
  
                console.log("\n🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾\n");
  
                rl.question('\nPresione Enter para continuar...', () => {

                  submenuClientes(); 
                  leerOpcion();
                });
              });
            });
          });
        });
      } else {
        console.log('\nPor favor ingrese un número de Sucursal existente.');
        return crearCliente();
      }
    });
  }
  
  // Función para modificar los datos de un cliente
  function modificarCliente() {
    rl.question('\nIngresa el DNI del Cliente a modificar: ', (dniStr) => {
      const dni = parseInt(dniStr);
      const sucursal = obtenerSucursalCliente(dni);
  
      if (!sucursal) {
        console.log('\nNo se encontró la sucursal actual 🔎\n');
        return leerOpcion();
      }
  
      rl.question('\nNuevo nombre: ', (nombre) => {
        rl.question('\nNueva dirección: ', (direccion) => {
          solicitarEntrada('\nNuevo teléfono (sin guiones ni espacios) (10 dígitos): ', validarTelefono, (telefono) => {
  
            sucursal.modificarCliente(dni, nombre, direccion, parseInt(telefono));
            console.log('\nCliente modificado exitosamente ✅');
  
            guardarClientesSucursal(sucursales);
  
            rl.question('\nPresione Enter para continuar...', () => {

              submenuClientes();
              leerOpcion();
            });
          });
        });
      });
    });
  }
  
  // Función para eliminar un cliente
  function eliminarCliente() {
    rl.question('\nIngresa el DNI del Cliente a eliminar: ', (dniStr) => {
      const dni = parseInt(dniStr);
      const sucursal = obtenerSucursalCliente(dni);
  
      if (!sucursal) {
        console.log('\nNo se encontró la sucursal actual 🔎\n');
        return leerOpcion();
      }
  
      // Buscar cliente en la sucursal
      const cliente = sucursal.getListaClientes().find(c => c.getDocumento() === dni);
      if (!cliente) {
        console.log(`\nNo se encontró un Cliente con DNI ${dni} 🔎\n`);
      } else {
        sucursal.eliminarCliente(cliente.getId(), cliente.getNombre());
        console.log('\nCliente eliminado exitosamente 🗑️');
  
        // Guardamos los clientes actualizados
        guardarClientesSucursal(sucursales);
      }
  
      rl.question('\nPresione Enter para continuar...', () => {

        submenuClientes(); 
        leerOpcion(); 
      });
    });
  }
  
  // Función para obtener la sucursal según el DNI del cliente
  function obtenerSucursalCliente(dni: number): Sucursal | null {
    for (const sucursal of sucursales) {
      console.log(sucursal.getListaClientes());
  
      const cliente = sucursal.getListaClientes().find(c => c.getDocumento() === dni);
      if (cliente) {
        return sucursal;
      }
    }
    console.log(`\nNo se encontró un Cliente con DNI ${dni} en ninguna sucursal 🔎\n`);
    return null;
  }
  
  // Función para mostrar los clientes agrupados por sucursal
  function mostrarClientesPorSucursal(sucursales: Sucursal[]): void {
    console.log('\n🐾🐈---------------------------------------------🐾Listado de Clientes por Sucursal🐾---------------------------------------------🐩🐾\n');
    let resultado = "";
  
    for (const sucursal of sucursales) {
  
      resultado += `Sucursal: ${sucursal.getId()}\n`;
      resultado += "Clientes:\n";
  
      const listaClientes = sucursal.getListaClientes();
  
      if (listaClientes.length === 0) {
        resultado += "  - No hay Clientes registrados.\n";
      } else {
        for (const cliente of listaClientes) {
  
          resultado += `  - ${cliente.mostrarDatos()}\n`;
          //resultado += `\n🐾🐈------------------------------------------------------🐾🐾-------------------------------------------------------🐩🐾\n`
        }
      }
  
      resultado += "\n";
    }
  
    console.log(resultado);
  
    console.log('\n🐾🐈------------------------------------------------------🐾🐾-------------------------------------------------------🐩🐾\n');
  
    rl.question('\nPresione Enter para continuar...', () => {

      submenuClientes(); 
      leerOpcion(); 
    });
  }

 
// Función para crear un paciente
function crearPaciente() {
  rl.question('\nIngrese el Documento del Cliente: ', (documentoStr) => {
    const documento = parseInt(documentoStr);

    if (isNaN(documento) || documentoStr.length < 5) {
      console.log('Por favor, ingresa un número de documento válido (al menos 5 dígitos).');
      return crearPaciente();
    }

    let clientePaciente: Cliente | undefined;

    sucursales.forEach(sucursal => {
      clientePaciente = sucursal.getListaClientes().find(cliente => cliente.getDocumento() === documento);
    });

    if (clientePaciente) {
      id += 1;
      console.log(`\nID Paciente: ${id}\n`);
      rl.question('\nNombre del paciente: ', (nombre) => {
        rl.question('\nEspecie del paciente: ', (especie) => {
          solicitarEntrada('\nSexo del paciente (Macho | Hembra): ', validarSexo, (sexo) => {
            solicitarEntrada('\nFecha de nacimiento del paciente (DD-MM-YYYY): ', validarFecha, (fecha) => {
              rl.question('\nObservación del paciente: ', (observacion) => {
                const fechaNacimiento = new Date(fecha);
                clientePaciente.agregarPaciente(id, nombre, especie, sexo, fechaNacimiento, observacion);
                console.log('\nPaciente creado exitosamente ​✅​');

                guardarPacientesSucursal(sucursales);

                console.log("\n🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾\n");

                rl.question('\nPresione Enter para continuar...', () => {

                  submenuPacientes(); 
                  leerOpcion(); 
                });
              });
            });
          });
        });
      });
    } else {
      console.log(`Error ​❌​: No se encontró un Cliente con documento ${documento}.\n`);
      console.log("");

      rl.question('\nPresione Enter para continuar...', () => {  
        submenuPacientes(); 
        leerOpcion(); 
      });
    }
  });
}

// Función para modificar un paciente
function modificarPaciente() {
  let pacienteCliente: Paciente | undefined;

  rl.question('\nIngrese el Documento del Cliente: ', (documentoStr) => {
    const documento = parseInt(documentoStr);

    if (isNaN(documento) || documentoStr.length < 5) {
      console.log('\nPor favor, ingresa un número de documento válido (al menos 5 dígitos).');
      return modificarPaciente();
    }

    let clientePaciente: Cliente | undefined;

    // Buscar el cliente en todas las Sucursales
    sucursales.forEach(sucursal => {
      clientePaciente = sucursal.getListaClientes().find(cliente => cliente.getDocumento() === documento);
    });

    if (!clientePaciente) {
      console.log('\nNo se encontró el Cliente con el ID ingresado ​🔎\n​');
      return leerOpcion();
    }
     
    rl.question('Ingresa el ID del Paciente a modificar: ', (idStr) => {
      const id = parseInt(idStr);

      if (isNaN(id)) {
        console.log('Por favor, ingresa un ID válido.');
        return leerOpcion();
      }

      pacienteCliente = clientePaciente.getListaPacientes().find(paciente => paciente.getId() === id);

      if (!pacienteCliente) {
        console.log('\nNo se encontró el paciente con el ID ingresado ​🔎\n​');
        return leerOpcion();
      }

      rl.question('\nNuevo nombre (deja vacío para no modificar): ', (nombre) => {
        rl.question('\nNueva especie (deja vacío para no modificar): ', (especie) => {
          rl.question('\nNuevo sexo (deja vacío para no modificar): ', (sexo) => {
            rl.question('\nNueva fecha de nacimiento (formato: DD-MM-YYYY) (deja vacío para no modificar): ', (fechaStr) => {
              rl.question('\nNueva observación (deja vacío para no modificar): ', (observacion) => {

                const fechaNacimiento = new Date(fechaStr);
                clientePaciente.modificarPaciente(id,
                  nombre || pacienteCliente.getNombre(),
                  especie || pacienteCliente.getEspecie(),
                  sexo || pacienteCliente.getSexo(),
                  fechaNacimiento || pacienteCliente.getFechaNacimiento(),
                  observacion || pacienteCliente.getObservacion());

                console.log('\nPaciente modificado exitosamente ​✅​');
                
                guardarPacientesSucursal(sucursales);

                leerOpcion();
              });
            });
          });
        });
      });
    });

    rl.question('\nPresione Enter para continuar...', () => {
      submenuPacientes(); 
      leerOpcion(); 
    });
  });
}

// Función para eliminar un paciente
function eliminarPaciente() {
    rl.question('\nIngrese el Documento del Cliente: ', (documentoStr) => {
        const documento = parseInt(documentoStr);

        if (isNaN(documento) || documentoStr.length < 5) {
            console.log('Por favor, ingresa un número de documento válido (al menos 5 dígitos).');
            return eliminarPaciente();
        }

        let clientePaciente: Cliente | undefined;

        // Buscar el cliente en todas las Sucursales
        sucursales.forEach(sucursal => {
            clientePaciente = sucursal.getListaClientes().find(cliente => cliente.getDocumento() === documento);
        });

        if (!clientePaciente) {
            console.log('\nNo se encontró el Cliente con el ID ingresado ​🔎\n​');
            return leerOpcion();
        }

        rl.question('Ingresa el ID del Paciente a eliminar: ', (idStr) => {
            const id = parseInt(idStr);

            if (isNaN(id)) {
                console.log('Por favor, ingresa un ID válido.');
                return leerOpcion();
            }

            // Eliminar paciente usando el método eliminarPaciente del Cliente
            clientePaciente.eliminarPaciente(id);

            console.log('\nPaciente eliminado exitosamente ​🗑️');

            rl.question('\nPresione Enter para continuar...', () => {

                submenuPacientes();
                leerOpcion();
            });
        });
    });
}

  // MOSTRAR LISTA DE PACIENTES

function mostrarListaPacientes(): void {
    console.log('\n🐾 🐈---------------------------------------------🐾 Listado de Pacientes por Cliente🐾 ---------------------------------------------🐩 🐾\n');
    rl.question('\nIngrese el Documento del Cliente: ', (documentoStr) => {
      const documento = parseInt(documentoStr);
  
      // Validación de documento
      if (isNaN(documento) || documentoStr.length < 5) {
        console.log('\nPor favor, ingresa un número de documento válido (al menos 5 dígitos).');
        return mostrarListaPacientes(); 
      }
  
      // Buscar el cliente
      let clientePaciente: Cliente | undefined;
  
      sucursales.forEach(sucursal => {
        clientePaciente = sucursal.getListaClientes().find(cliente => cliente.getDocumento() === documento);
      });
  
      // Si no se encuentra el cliente
      if (!clientePaciente) {
        console.log('\nNo se encontró el Cliente con el documento ingresado ​🔎\n​');
        return leerOpcion(); // Regresar al menú
      }
  
      const pacientes = clientePaciente.getListaPacientes();
  
      // Si no hay pacientes registrados
      if (pacientes.length === 0) {
        console.log('\nNo hay Pacientes registrados para este cliente ❌');
        return leerOpcion(); 
      }
  
      // Mostrar la lista de pacientes
      const lista = pacientes.map(paciente => {
        return `ID: ${paciente.getId()}, Nombre: ${paciente.getNombre()}, Especie: ${paciente.getEspecie()}, Sexo: ${paciente.getSexo()}, Nacimiento: ${paciente.getFechaNacimiento().toLocaleDateString()}`;
      }).join('\n');
  
      console.log(lista);
  
      console.log('\n🐾 🐈----------------------------------------------------------------------🐾 🐾-----------------------------------------------------------------------🐩 🐾\n');
  
      rl.question('\nPresione Enter para continuar...', () => {
        submenuPacientes(); 
        leerOpcion();        
      });
    });
  }

  //Registramos la visita del cliente

  function registrarVisita() {
    rl.question('\nIngrese el Documento del Cliente: ', (documentoStr) => {
      const documento = parseInt(documentoStr);
  
      if (isNaN(documento) || documentoStr.length < 5) {
        console.log('\nPor favor, ingresa un número de documento válido (al menos 5 dígitos).');
        return registrarVisita(); 
      }
  
      let clienteVisita: Cliente | undefined;
  
      sucursales.forEach(sucursal => {
        clienteVisita = sucursal.getListaClientes().find(cliente => cliente.getDocumento() === documento);
      });
  
      if (clienteVisita) {
        clienteVisita.registrarVisita();
        console.log('\nLa visita fue registrada con éxito ​📝​');
      } else {
        console.log(`\nError ​❌​: No se encontró un Cliente con documento ${documento} ​🔎\n`);
      }
  
      rl.question('\nPresione Enter para continuar...', () => {
        submenuClientes();  
        leerOpcion();    
      });
    });
  }


