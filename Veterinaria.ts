import * as readline from 'readline';
import { Cliente } from "./Cliente";
import { Paciente } from "./Paciente";
import { Sucursal } from "./Sucursal";
import { Proveedor } from './Proveedor';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Arreglo para almacenar las Sucursales
let sucursales: Sucursal[] = [];

let id = 0;   // Inicializa el ID global 


console.log(" ")
console.log('Bienvenido a 🐾 🐈 Veterinaria Pocas Pulgas 🐩 🐾');

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

// Está función permite leer la opción del Usuario
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

mostrarMenuPrincipal();


/* Sucursal */

//CREAMOS LA SUCURSAL
function crearSucursal() {
    id += 1; 
    console.log(`\nID Sucursal: ${id}`);
    solicitarEntrada('Nombre del Responsable de la Sucursal: ', validarVacios, false, (responsable: string) => {          
      solicitarEntrada('Dirección de la Sucursal: ', validarVacios, false, (direccion: string) => {
        solicitarEntrada('Localidad en la que se encuentra la Sucursal: ', validarVacios, false, (localidad: string) => {          
          const sucursal = new Sucursal(id, responsable, direccion, localidad);
          sucursales.push(sucursal);
          console.log('\nSucursal creada exitosamente ​✅');  
          console.log("\n🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾\n");
  
          rl.question('Presione Enter para continuar...', () => {  
            submenuSucursales();
            leerOpcion(); 
          });
        });
      });
    });
  }
  
  
  //PERMITE MODIFICAR LOS DATOS DE LA SUCURSAL
 function modificarSucursal() {
    rl.question('\nIngresa el ID de la Sucursal a modificar: ', (idStr) => {
      const id = parseInt(idStr);
      const sucursal = sucursales.find(s => s.getId() === id);
  
      if (!sucursal) {
        console.log('\nNo se encontró una Sucursal con ese ID ​🔎\n​');

        rl.question('Presione Enter para continuar...', () => {  
          submenuSucursales();
          leerOpcion(); 
        });        
      }
  
      solicitarEntrada('Nuevo responsable: ', validarVacios, false, (responsable: string) => {          
        solicitarEntrada('Nueva dirección: ', validarVacios, false, (direccion: string) => {
          solicitarEntrada('Nueva localidad: ', validarVacios, false, (localidad: string) => { 

            sucursal.setResponsable(responsable);
            sucursal.setDireccion(direccion);
            sucursal.setLocalidad(localidad);
            console.log('\nSucursal modificada exitosamente ​✅​');
  
            rl.question('Presione Enter para continuar...', () => {  
              submenuSucursales(); 
              leerOpcion(); 
            });
          });
        });
      });
    });
  }
  
  //SE VERIFICA QUE NO TENGA NI CLIENTES NI PROVEEDORES! SI TIENE NO SE BORRA
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
  
      // Validar si la sucursal tiene Clientes o Proveedores
      if (sucursal.getListaClientes().length > 0 || sucursal.getListaProveedores().length > 0) {
        console.log('\nNo se puede eliminar esta Sucursal porque tiene Clientes o Proveedores registrados ⚠️\n​');
      } else {
        sucursales.splice(index, 1);
        console.log('\nSucursal eliminada exitosamente 🗑️​');
      }
  
      rl.question('Presione Enter para continuar...', () => {
  
        submenuSucursales(); 
        leerOpcion(); 
      });
    });
  }
  
function mostrarSucursales(): void {
    console.log('\n🐾🐈---------------------------------------------🐾Listado de Sucursales🐾---------------------------------------------🐩🐾\n');
    if (sucursales.length === 0) {
      console.log('No hay Sucursales registradas.');
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
      const index = sucursales.findIndex(sucursal => sucursal.getId() == idSucursal);
  
      if (index >= 0) {
        let sucursalProveedor = sucursales[index];
  
        id += 1;
        console.log(`\nID Proveedor: ${id}`);
        rl.question('Nombre del Proveedor: ', (nombre) => {
          rl.question('Dirección del Proveedor: ', (direccion) => { 
            solicitarEntrada('Número de teléfono (sin guiones ni espacios) (10 dígitos): ', validarTelefono, false, (telefono) => {
              solicitarEntrada('Documento del Proveedor: ', validarDocumento, false, (documento) => {
                rl.question('Rubro del Proveedor: ', (rubro) => { 
                  solicitarEntrada('CUIT del Proveedor (11 dígitos): ', validarCUIT, false, (CUIT) => {
                    sucursalProveedor.agregarProveedor(id, nombre, direccion, parseInt(telefono), parseInt(documento), rubro, parseInt(CUIT));
  
                    console.log('\nProveedor creado exitosamente ​✅​');
  
                    console.log("\n🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾\n");
  
                    rl.question('Presione Enter para continuar...', () => {
  
                      submenuProveedores(); // 
                      leerOpcion(); // 
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
      };
    });
  }
  
  //MODIFICA LOS DATOS DEL PROVEEDORES SEGUN DNI INGRESADO
 function modificarProveedor() {
    rl.question('\nIngresa el DNI del Proveedor a modificar: ', (dniStr) => {
      const dni = parseInt(dniStr);
      const sucursal = obtenerSucursalProveedor(dni); 
  
      if (!sucursal) {
        console.log('\nNo se encontró la sucursal actual ​🔎\n​');
        return leerOpcion();
      }
  
      rl.question('Nuevo nombre: ', (nombre) => {
        rl.question('Nueva dirección: ', (direccion) => {
          solicitarEntrada('Nuevo teléfono (sin guiones ni espacios) (10 dígitos): ', validarTelefono, false, (telefono) => {
            rl.question('Nuevo rubro: ', (rubro) => {
              solicitarEntrada('Nuevo del proveedor (11 dígitos): ', validarCUIT, false, (CUIT) => {
  
                sucursal.modificarProveedor(dni, nombre, direccion, parseInt(telefono), rubro, parseInt(CUIT));
                console.log('\nProveedor modificado exitosamente ​✅​');
  
                console.log('\n🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾\n');
  
                rl.question('Presione Enter para continuar...', () => {
  
                  submenuProveedores(); // 
                  leerOpcion(); // 
                });
  
              });
            });
          });
        });
      });
    });
  }
  
  //ELIMINA UN PROVEEDOR SEGUN EL DOCUMENTO INGRESADO
 function eliminarProveedor() {
    rl.question('\nIngresa el DNI del Proveedor a eliminar: ', (dniStr) => {
      const dni = parseInt(dniStr);
      const sucursal = obtenerSucursalProveedor(dni);
  
      if (!sucursal) {
        console.log('\nNo se encontró la sucursal actual ​🔎\n​');
        return leerOpcion();
      }
  
      // Buscar PROVEEDOR en la sucursal
      const proveedor = sucursal.getListaProveedores().find(c => c.getDocumento() === dni);
      if (!proveedor) {
        console.log(`\nNo se encontró un Proveedor con DNI ${dni} ​🔎\n​`);
      } else {
        sucursal.eliminarProveedor(proveedor.getId(), proveedor.getNombre());
        console.log('\nProveedor eliminado exitosamente ​🗑️​');
      }
      rl.question('Presione Enter para continuar...', () => {
  
        submenuProveedores(); // 
        leerOpcion(); // 
      });
  
    });
  }
  
  //OBTIENE LA SUCURSAL SEGUN EL DNI DEL PROVEEDOR
function obtenerSucursalProveedor(dni: number): Sucursal | null {
    for (const sucursal of sucursales) {
      const proveedor = sucursal.getListaProveedores().find(c => c.getDocumento() === dni);
      if (proveedor) {
        return sucursal;
      }
    }
    console.log(`\nNo se encontró un Proveedor con DNI ${dni} en ninguna Sucursal ​❌\n​`);
    return null;
  }
  
  //MOSTRAMOS LOS PROVEEDORES CREADOS (LISTA DE CLIENTES)
  
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
        for (const Proveedor of listaProveedores) {  
          resultado += `  - ${Proveedor.mostrarDatos()}\n`;  
        }
      }
  
      resultado += "\n";
    }
  
    console.log(resultado);
  
    console.log('\n🐾🐈----------------------------------------------------------------🐾🐾----------------------------------------------------------------🐩🐾\n');
  
    rl.question('Presione Enter para continuar...', () => {
  
      submenuProveedores(); // 
      leerOpcion(); // 
    });
  }
  
  /**********  VALIDACIONES **********/
  function validarTelefono(telefono: string) {
    return /^\d{10,}$/.test(telefono);
  }
  
  function validarDocumento(documento: string) {
    return /^\d{5,}$/.test(documento);
  }
  
  function validarCUIT(CUIT: string) {
    return /^\d{11,}$/.test(CUIT);
  }
  
  function validarSexo(sexo: string, esModificacion: boolean) {
    if (esModificacion && sexo.trim() === '') {      
      return true;      // Permito vacío en caso de modificación
    }

    const sexosValidos = ['macho', 'hembra'];
    return sexosValidos.includes(sexo.toLowerCase());
  }
  
  function validarEspecie(especie: string, esModificacion: boolean) {
    if (esModificacion && especie.trim() === '') {      
      return true;      // Permito vacío en caso de modificación
    }

    const especiesValidas = ['gato', 'perro', 'exotica'];
    return especiesValidas.includes(especie.toLowerCase());
  }

  function validarFecha(fecha, esModificacion: boolean) {
    if (esModificacion && fecha.trim() === '') {      
      return true;      // Permito vacío en caso de modificación
    }

    const fechaNacimiento = new Date(fecha);
    if (isNaN(fechaNacimiento.getTime())) {
      return false;
    } else {
      return true;
    }
  }
  
  function validarVacios(texto: string, esModificacion: boolean) {
    if (!esModificacion && texto.trim() === '') {      
      return false;      
    } else {
      return true;     // Permito vacío en caso de modificación
    }

    
  }

  function solicitarEntrada(mensaje, validador, esModificacion, callback) {
    rl.question(mensaje, (input) => {
      if (!validador (input, esModificacion)) {
        console.log('\nDato inválido. Inténtalo de nuevo ​⚠️​\n');
        return solicitarEntrada(mensaje, validador, esModificacion, callback);
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
  
    rl.question('\nElija el ID de la Sucursal a la que pertenece el cliente: ', (idSucursalStr) => {
      const idSucursal = parseInt(idSucursalStr);
      const index = sucursales.findIndex(sucursal => sucursal.getId() == idSucursal);
  
      if (index >= 0) {
        let sucursalCliente = sucursales[index];
  
        id += 1;
        console.log(`\nID Cliente: ${id}`);
  
        rl.question('\Nombre del cliente: ', (nombre) => {
          rl.question('Dirección del cliente: ', (direccion) => {
            solicitarEntrada('Número de teléfono (sin guiones ni espacios) (10 dígitos): ', validarTelefono, false, (telefono) => {
              solicitarEntrada('Documento del cliente: ', validarDocumento, false, (documento) => {
  
                sucursalCliente.agregarCliente(id, nombre, direccion, parseInt(telefono), parseInt(documento));
                console.log('\nCliente creado exitosamente ​✅​');
  
                console.log('\n🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾\n');
  
                rl.question('Presione Enter para continuar...', () => {
  
                  submenuClientes(); 
                  leerOpcion(); 
                });
              }
              );
            }
            );
          });
        });
      }
      else {
        console.log('\nPor favor ingrese un número de Sucursal existente.');
        return crearCliente();
      };
    })
  }
  
  //MODIFICA LOS DATOS DEL CLIENTE SEGUN DNI INGRESADO
function modificarCliente() {
    rl.question('\nIngresa el DNI del Cliente a modificar: ', (dniStr) => {
      const dni = parseInt(dniStr);
      const sucursal = obtenerSucursalCliente(dni);
  
      if (!sucursal) {
        console.log('\nNo se encontró la sucursal actual ​🔎\n​');
        return leerOpcion();
      }
  
      rl.question('Nuevo nombre: ', (nombre) => {
        rl.question('Nueva dirección: ', (direccion) => {
          solicitarEntrada('Nuevo de teléfono (sin guiones ni espacios) (10 dígitos): ', validarTelefono, false, (telefono) => {
  
            sucursal.modificarCliente(dni, nombre, direccion, parseInt(telefono));
            console.log('\nCliente modificado exitosamente ​✅​');
  
            rl.question('Presione Enter para continuar...', () => {
  
              submenuClientes();
              leerOpcion();
            });
          });
        });
      });
    });
  }
  
  //ELIMINA UN CLIENTE SEGUN EL DOCUMENTO INGRESADO
 function eliminarCliente() {
    rl.question('\nIngresa el DNI del Cliente a eliminar: ', (dniStr) => {
      const dni = parseInt(dniStr);
      const sucursal = obtenerSucursalCliente(dni);
  
      if (!sucursal) {
        console.log('\nNo se encontró la sucursal actual ​🔎\n​');
        return leerOpcion();
      }
  
      // Buscar cliente en la sucursal
      const cliente = sucursal.getListaClientes().find(c => c.getDocumento() === dni);
      if (!cliente) {
        console.log(`\nNo se encontró un Cliente con DNI ${dni} ​🔎\n​`);
      } else {
        sucursal.eliminarCliente(cliente.getId(), cliente.getNombre());
        console.log('\nCliente eliminado exitosamente ​🗑️​');
      }
  
      rl.question('Presione Enter para continuar...', () => {
  
        submenuClientes(); 
        leerOpcion(); 
      });
    });
  }
  
  //OBTIENE LA SUCURSAL SEGUN EL DNI DEL CLIENTE
 function obtenerSucursalCliente(dni: number): Sucursal | null {
    for (const sucursal of sucursales) {
      console.log(sucursal.getListaClientes());
  
      const cliente = sucursal.getListaClientes().find(c => c.getDocumento() === dni);
      if (cliente) {
        return sucursal;
      }
    }
    console.log(`\nNo se encontró un Cliente con DNI ${dni} en ninguna sucursal ​🔎\n​`);
    return null;
  }
  
  //MOSTRAMOS LOS CLIENTES CREADOS (LISTA DE CLIENTES)
  
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
          resultado += `\n🐾🐈------------------------------------------------------🐾🐾-------------------------------------------------------🐩🐾\n`
        }
      }  
      resultado += "\n";
    }
  
    console.log(resultado);  
    console.log('\n🐾🐈------------------------------------------------------🐾🐾-------------------------------------------------------🐩🐾\n');
  
    rl.question('Presione Enter para continuar...', () => {
  
      submenuClientes(); 
      leerOpcion(); 
    });
  }
  
  /***********************************************************************************************************************************************************/
  /* PACIENTES */
  
  //CREAMOS PACIENTES
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
        console.log(`\nID Paciente: ${id}`);
        rl.question('Nombre del paciente: ', (nombre) => {
          solicitarEntrada('Especie del paciente (Gato | Perro | Exotica): ', validarEspecie, false, (especie: string) => {
            solicitarEntrada('Sexo del paciente (Macho | Hembra): ', validarSexo, false, (sexo: string) => {
              solicitarEntrada('Fecha de nacimiento del paciente (DD-MM-YYYY): ', validarFecha, false, (fecha) => {
                rl.question('Observación del paciente: ', (observacion) => {
                  const fechaNacimiento = new Date(fecha);
                  clientePaciente.agregarPaciente(id, nombre, especie, sexo, fechaNacimiento, observacion);
                  console.log('\nPaciente creado exitosamente ​✅​');  
                  console.log("\n🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾\n");  
           
                  rl.question('Presione Enter para continuar...', () => {  
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
        
        rl.question('Presione Enter para continuar...', () => {  
          submenuPacientes(); 
          leerOpcion(); 
        });
      }
    });
  }
  
  //MODIFICAR PACIENTE
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
        
        rl.question('Presione Enter para continuar...', () => {  
          submenuPacientes(); 
          leerOpcion(); 
        });        
      }
  
      console.log(clientePaciente.mostrarListaPacientes());
      
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
  
        rl.question('Nuevo nombre (deja vacío para no modificar): ', (nombre) => {
          solicitarEntrada('Especie del paciente (Gato | Perro | Exotica) (deja vacío para no modificar): ', validarEspecie, true, (especie) => {
            solicitarEntrada('Sexo del paciente (Macho | Hembra) (deja vacío para no modificar): ', validarSexo, true, (sexo) => {
              solicitarEntrada('Fecha de nacimiento del paciente (DD-MM-YYYY) (deja vacío para no modificar): ', validarFecha, true, (fecha) => {
                rl.question('Nueva observación (deja vacío para no modificar): ', (observacion) => {
                  const fechaNacimiento = new Date(fecha);
                  clientePaciente.modificarPaciente(id,
                    nombre || pacienteCliente.getNombre(),
                    especie || pacienteCliente.getEspecie(),
                    sexo || pacienteCliente.getSexo(),
                    fechaNacimiento || pacienteCliente.getFechaNacimiento(),
                    observacion || pacienteCliente.getObservacion());
  
                  console.log('\nPaciente modificado exitosamente ​✅​');
                  console.log("\n🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾\n");  
           
                  rl.question('Presione Enter para continuar...', () => {  
                    submenuPacientes(); 
                    leerOpcion(); 
                  });
                });
              });
            });
          });
        });
      });
  
      rl.question('Presione Enter para continuar...', () => {  
        submenuPacientes(); 
        leerOpcion(); 
      });
    });
  }
  
  // ELIMINA UN PACIENTE SEGUN EL ID INGRESADO
 function eliminarPaciente() {
    let pacienteCliente: Paciente | undefined;

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
        rl.question('Presione Enter para continuar...', () => {  
          submenuPacientes(); 
          leerOpcion(); 
        });        
      } else {

        console.log(clientePaciente.mostrarListaPacientes());
        
        rl.question('Ingresa el ID del Paciente a eliminar: ', (idStr) => {
          const id = parseInt(idStr);
    
          if (isNaN(id)) {
            console.log('Por favor, ingresa un ID válido.');
            return leerOpcion();
          }
  
          pacienteCliente = clientePaciente.getListaPacientes().find(paciente => paciente.getId() === id);
      
          if (!pacienteCliente) {
            console.log('\nNo se encontró el paciente con el ID ingresado ​🔎\n​');
            rl.question('Presione Enter para continuar...', () => {  
              submenuPacientes(); 
              leerOpcion(); 
            });
            
          } else {
            // Eliminar paciente usando el método eliminarPaciente del Cliente
            clientePaciente.eliminarPaciente(id);
      
            console.log('\nPaciente eliminado exitosamente ​🗑️​');
            console.log("\n🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾\n");  
          }  
    
          rl.question('Presione Enter para continuar...', () => {  
            submenuPacientes(); 
            leerOpcion(); 
          });
        });
        
      }

    });
  }
  
  // MOSTRAR LISTA DE PACIENTES
 function mostrarListaPacientes(): void {
    console.log('\n🐾 🐈---------------------------------------------🐾 Listado de Pacientes por Cliente🐾 ---------------------------------------------🐩 🐾\n');
    rl.question('\nIngrese el Documento del Cliente: ', (documentoStr) => {
      const documento = parseInt(documentoStr);
  
      if (isNaN(documento) || documentoStr.length < 5) {
        console.log('Por favor, ingresa un número de documento válido (al menos 5 dígitos).');
        return mostrarListaPacientes();
      }
  
      let clientePaciente: Cliente | undefined;
  
      sucursales.forEach(sucursal => {
        clientePaciente = sucursal.getListaClientes().find(cliente => cliente.getDocumento() === documento);
      });
  
      if (!clientePaciente) {
        console.log('\nNo se encontró el Cliente con el ID ingresado ​🔎\n​');

        rl.question('Presione Enter para continuar...', () => {  
          mostrarListaPacientes(); 
          leerOpcion(); 
        });
      }
  
      const pacientes = clientePaciente.getListaPacientes();
      
      // Si no hay pacientes, mostramos un mensaje
      if (pacientes.length === 0) {
        console.log ('\nNo hay Pacientes registrados en este cliente ❌');
      }
  
      // Creamos un string con la información de cada Paciente
      const lista = pacientes.map(paciente => {
        return `🆔: ${paciente.getId()}, Nombre: ${paciente.getNombre()}, Especie: ${paciente.getEspecie()}, Sexo: ${paciente.getSexo()}, Nacimiento: ${paciente.getFechaNacimiento().toLocaleDateString()}`;
      }).join('\n');
  
      console.log(lista);
  
      console.log('\n🐾 🐈----------------------------------------------------------------------🐾 🐾-----------------------------------------------------------------------🐩 🐾\n');
  
      rl.question('Presione Enter para continuar...', () => {  
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
        console.log('Por favor, ingresa un número de documento válido (al menos 5 dígitos).');
        return registrarVisita();
      }
  
      let clienteVisita: Cliente | undefined;
  
      sucursales.forEach(sucursal => {
        clienteVisita = sucursal.getListaClientes().find(cliente => cliente.getDocumento() === documento);
      });
  
      if (clienteVisita) {
    
        clienteVisita.registrarVisita();
        console.log('\nLa visita fue registrada con éxito ​📝​');
        console.log('-------------------------------------------------------------------------');
      } else {
        console.log(`\nError ​❌​: No se encontró un Cliente con documento ${documento} ​🔎\n`);
      }
      rl.question('Presione Enter para continuar...', () => {
  
        mostrarMenuPrincipal();
        leerOpcion();
      });
    });
  }
  
  