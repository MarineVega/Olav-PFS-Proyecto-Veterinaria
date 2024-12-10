import * as readline from 'readline';
import { Cliente } from "./Cliente";
import { Paciente } from "./Paciente";
import { Sucursal } from "./Sucursal";
import { Proveedor } from './Proveedor';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Arreglo para almacenar las Sucursales creadas
let sucursales: Sucursal[] = [];

let id = 0;   // Inicializa el ID de manera global y no permite que se repita en ningún caso. 


console.log(" ")
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
        console.log("\nSalió correctamente del Sistema.\nGracias por ser parte de 🐾 🐈 Veterinaria Pocas Pulgas 🐩 🐾.\n");
        break;
      default:
        console.log('\nOpción no válida, ingresa otra opción.\n');
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
        console.log('\nOpción no válida, ingresa otra opción.\n');
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
        console.log('\nOpción no válida, ingresa otra opción.\n');
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
        console.log('\nOpción no válida, ingresa otra opción.\n');
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
        console.log('\nOpción no válida, ingresa otra opción.\n');
        submenuPacientes();
    }
  });
}

mostrarMenuPrincipal();


/* Sucursal */

//CREAMOS SUCURSALES

function crearSucursal() {
    id += 1; 
    console.log(`\n🆔 Sucursal: ${id}\n`);
    solicitarEntrada('Nombre del Responsable de la Sucursal: ', validarVacios, false, (responsable: string) => {          
      solicitarEntrada('\nDirección de la Sucursal: ', validarVacios, false, (direccion: string) => {
        solicitarEntrada('\nLocalidad en la que se encuentra la Sucursal: ', validarVacios, false, (localidad: string) => {          
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

    solicitarEntrada('\nNuevo Responsable (deja vacío para no modificar): ', validarVacios, true, (responsable: string) => {
      solicitarEntrada('\nNueva Dirección (deja vacío para no modificar): ', validarVacios, true, (direccion: string) => {
        solicitarEntrada('\nNueva Localidad (deja vacío para no modificar): ', validarVacios, true, (localidad: string) => {

          sucursal.setResponsable(responsable || sucursal.getResponsable());
          sucursal.setDireccion(direccion || sucursal.getDireccion());
          sucursal.setLocalidad(localidad || sucursal.getLocalidad());
          console.log('\nSucursal modificada Exitosamente ​✅\n​');

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
    } else {
      const sucursal = sucursales[index];

      if (sucursal.getListaClientes().length > 0 || sucursal.getListaProveedores().length > 0) {
        console.log('\nNo se puede eliminar esta Sucursal porque tiene Clientes o Proveedores registrados ⚠️\n​');
      } else {
        sucursales.splice(index, 1);
        console.log('\nSucursal eliminada Exitosamente 🗑️\n​');
      }

      rl.question('Presione Enter para continuar...', () => {

        submenuSucursales();
        leerOpcion();
      });
    };
  });
}

function mostrarSucursales(): void {
  console.log('\n🐾🐈 ---------------------------------------------🐾 Listado de Sucursales 🐾---------------------------------------------- 🐩🐾\n');
  if (sucursales.length === 0) {
    console.log('\nNo hay Sucursales registradas.\n');
  } else {
    sucursales.forEach((sucursal, index) => {
      console.log(`\nSucursal (🆔): ${sucursales[index].getId()} - Responsable: ${sucursales[index].getResponsable()}\n   Dirección: ${sucursal.getDireccion()}\n   Localidad: ${sucursal.getLocalidad()}\n`);
    });
   console.log('\n🐾🐈 --------------------------------------------------------🐾 🐾--------------------------------------------------------- 🐩🐾\n');
    
  }

  rl.question('Presione Enter para continuar...', () => {

    submenuSucursales();
    leerOpcion();
  });

}
  
/* Proveeodres */
  
//CREAMOS PROVEEDORES

function crearProveedor() {

  if (sucursales.length === 0) {
    console.log('\nNo hay Sucursales registradas.');
    console.log(" ");
    rl.question('Presione Enter para continuar...', () => {
      mostrarMenuPrincipal();
      leerOpcion();
    });
  } else {
    elegirSucursal();

    rl.question('\nElija el ID de la Sucursal a la que pertenece el Proveedor: ', (idSucursalStr) => {
      const idSucursal = parseInt(idSucursalStr);
      const index = sucursales.findIndex(sucursal => sucursal.getId() == idSucursal);

      if (index >= 0) {
        let sucursalProveedor = sucursales[index];

        id += 1;
        console.log(`\n🆔 Proveedor: ${id}\n`);
        solicitarEntrada('Nombre del Proveedor: ', validarVacios, false, (nombre: string) => {
          solicitarEntrada('\nDirección del Proveedor: ', validarVacios, false, (direccion: string) => {
            solicitarEntrada('\nNúmero de Teléfono (sin guiones ni espacios - 10 dígitos): ', validarTelefono, false, (telefono) => {
              solicitarEntrada('\nDocumento del Proveedor: ', validarDocumento, false, (documento) => {
                solicitarEntrada('\nRubro del Proveedor: ', validarVacios, false, (rubro: string) => {
                  solicitarEntrada('\nCUIT del Proveedor (11 dígitos): ', validarCUIT, false, (CUIT) => {
                    sucursalProveedor.agregarProveedor(id, nombre, direccion, parseInt(telefono), parseInt(documento), rubro, parseInt(CUIT));

                    //console.log('\nProveedor creado exitosamente ​✅​');

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
        console.log('\nPor favor ingrese un número de Sucursal existente.\n');
        return crearProveedor();
      };
    });
  }
}

//MODIFICA LOS DATOS DEL PROVEEDORES SEGUN DNI INGRESADO

// Función para modificar el Proveedor
function modificarProveedor() {
  rl.question('\nIngresa el DNI del Proveedor a modificar: ', (dniStr) => {
    const dni = parseInt(dniStr);
    const sucursal = obtenerSucursalProveedor(dni); 

    if (!sucursal) {
      console.log('\nNo se encontró la Sucursal actual ​🔎\n​');
      return leerOpcion(); 
    }

    const proveedorExistente = sucursal.getListaProveedores().find(
      (proveedor) => proveedor.getDocumento() === dni
    );

    if (!proveedorExistente) {
      console.log(`\nError ❌: No se encontró un Proveedor con documento ${dni}.\n`);
      return leerOpcion(); 
    }

    const nombreActual = proveedorExistente.getNombre();
    const direccionActual = proveedorExistente.getDireccion();
    const telefonoActual = proveedorExistente.getTelefono().toString();  // ..toSrting() convierte el vacío en String
    const rubroActual = proveedorExistente.getRubro();
    const CUITActual = proveedorExistente.getCUIT().toString();


    function solicitarDatos(mensaje: string, valorActual: string, callback: (dato: string) => void) {
      rl.question(mensaje, (input) => {
        if (input.trim() === '') {

          callback(valorActual);
        } else {

          callback(input.trim());
        }
      });
    }

    solicitarDatos('\nNuevo Nombre (deja vacío para no modificar): ', nombreActual, (nombre: string) => {
      solicitarDatos('\nNueva Dirección (deja vacío para no modificar): ', direccionActual, (direccion: string) => {
        solicitarDatos('\nNuevo Teléfono (sin guiones ni espacios - 10 dígitos -deja vacío para no modificar): ', telefonoActual, (telefono: string) => {
          solicitarDatos('\nNuevo Rubro (deja vacío para no modificar): ', rubroActual, (rubro: string) => {
            solicitarDatos('\nNuevo CUIT del Proveedor (11 dígitos, deja vacío para no modificar): ', CUITActual, (CUIT: string) => {
              const telefonoModificado = telefono ? parseInt(telefono) : parseInt(telefonoActual);
              const CUITModificado = CUIT ? parseInt(CUIT) : parseInt(CUITActual);

              if (isNaN(telefonoModificado) || isNaN(CUITModificado)) {
                console.log("\nError ❌: El teléfono o el CUIT no son válidos.");
                return leerOpcion(); 
              }

              sucursal.modificarProveedor(dni, nombre, direccion, telefonoModificado, rubro, CUITModificado);

              console.log('\nProveedor modificado Exitosamente ​✅​');
              console.log('\n🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾\n');
              rl.question('Presione Enter para continuar...', () => {
                submenuProveedores(); 
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
      rl.question('Presione Enter para continuar...', () => {
        submenuProveedores();
        leerOpcion();
      });
    } else {
      // Buscar PROVEEDOR en la sucursal
      const proveedor = sucursal.getListaProveedores().find(c => c.getDocumento() === dni);
      if (!proveedor) {
        console.log(`\nNo se encontró un Proveedor con documento ${dni} ​🔎\n​`);
      } else {
        sucursal.eliminarProveedor(proveedor.getId(), proveedor.getNombre());
      }
      rl.question('Presione Enter para continuar...', () => {

        submenuProveedores();
        leerOpcion();
      });
    }

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
    console.log(`\nNo se encontró un Proveedor con documento ${dni} en ninguna Sucursal ​❌\n​`);
    return null;
  }
  
//MOSTRAMOS LOS PROVEEDORES CREADOS (LISTA DE CLIENTES)
  
function mostrarProveedoresPorSucursal(sucursales: Sucursal[]): void {
  console.log('\n🐾🐈 ----------------------------------------------🐾 Listado de Proveedores por Sucursal 🐾---------------------------------------------- 🐩🐾\n');
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

  console.log('\n🐾🐈 ----------------------------------------------------------------🐾 🐾---------------------------------------------------------------- 🐩🐾\n');// Creo que está es la línea que se repite.
        
  rl.question('Presione Enter para continuar...', () => {

    submenuProveedores(); // 
    leerOpcion(); // 
  });
}
  
  
  
/* Clientes */
  
//CREAMOS CLIENTES

function crearCliente() {

  if (sucursales.length === 0) {
    console.log('No hay Sucursales registradas.\n');
    console.log(" ");
    rl.question('Presione Enter para continuar...', () => {
      mostrarMenuPrincipal();
      leerOpcion();
    });
  } else {
    elegirSucursal();

    rl.question('\nElija el ID de la Sucursal a la que pertenece el Cliente: ', (idSucursalStr) => {
      const idSucursal = parseInt(idSucursalStr);
      const index = sucursales.findIndex(sucursal => sucursal.getId() == idSucursal);

      if (index >= 0) {
        let sucursalCliente = sucursales[index];

        id += 1;
        console.log(`\n🆔 Cliente: ${id}\n`);
        solicitarEntrada('Nombre del Cliente: ', validarVacios, false, (nombre: string) => {
          solicitarEntrada('\nDirección del Cliente: ', validarVacios, false, (direccion: string) => {
            solicitarEntrada('\nNúmero de Teléfono (sin guiones ni espacios - 10 dígitos): ', validarTelefono, false, (telefono) => {
              solicitarEntrada('\nDocumento del Cliente: ', validarDocumento, false, (documento) => {

                sucursalCliente.agregarCliente(id, nombre, direccion, parseInt(telefono), parseInt(documento));

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
}
  
//MODIFICA LOS DATOS DEL CLIENTE SEGUN DNI INGRESADO

function modificarCliente() {
  rl.question('\nIngresa el DNI del Cliente a modificar: ', (dniStr) => {
    const dni = parseInt(dniStr);
    const sucursal = obtenerSucursalCliente(dni); 

    if (!sucursal) {
      console.log('\nNo se encontró la Sucursal actual ​🔎\n​');
      return leerOpcion(); 
    }

    const clienteExistente = sucursal.getListaClientes().find(
      (cliente) => cliente.getDocumento() === dni
    );

    if (!clienteExistente) {
      console.log(`\nError ❌: No se encontró un Cliente con documento ${dni}.\n`);
      return leerOpcion(); 
    }

    const nombreActual = clienteExistente.getNombre();
    const direccionActual = clienteExistente.getDireccion();
    const telefonoActual = clienteExistente.getTelefono().toString();

    function solicitarDatos(mensaje: string, valorActual: string, callback: (dato: string) => void) {
      rl.question(mensaje, (input) => {
        if (input.trim() === '') {
          callback(valorActual);
        } else {
          callback(input.trim());
        }
      });
    }

    solicitarDatos('\nNuevo Nombre (deja vacío para no modificar): ', nombreActual, (nombre: string) => {
      solicitarDatos('\nNueva Dirección (deja vacío para no modificar): ', direccionActual, (direccion: string) => {
        solicitarDatos('\nNuevo Teléfono (sin guiones ni espacios - 10 dígitos -deja vacío para no modificar): ', telefonoActual, (telefono: string) => {
          let telefonoModificado: number | string = telefono; // ACA SE ACLARA QUE EL NUEMRO DE TELEFONO INICIALMENTE ES UN STRING
          if (telefono.trim() !== '') {
            telefonoModificado = parseInt(telefono.trim());
            if (isNaN(telefonoModificado)) {
              console.log("\nError ❌: El teléfono no es válido.");
              return leerOpcion(); 
            }
          } else {
            telefonoModificado = telefonoActual;
          }

          sucursal.modificarCliente(dni, nombre, direccion, telefonoModificado as number);// ACA SE HACE UN CAST A NUMERO El término "cast" o "type casting" en programación hace referencia al proceso de convertir una variable de un tipo de dato a otro. En TypeScript y JavaScript, se utiliza para asegurar que un valor se maneje de acuerdo con el tipo esperado, como convertir un string a number o viceversa.
                                                                                          //  "cast" a number, asegura que el valor que se pasa a la función modificarCliente() (en este caso, telefonoModificado) sea de tipo number, aunque originalmente podría ser de tipo string (ya que la entrada del usuario es un string).
          console.log('\nCliente modificado Exitosamente ​✅​');

          console.log('\n🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾\n');
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
      rl.question('Presione Enter para continuar...', () => {
        submenuClientes();
        leerOpcion();
      });
    } else {
      const cliente = sucursal.getListaClientes().find(c => c.getDocumento() === dni);
      if (!cliente) {
        console.log(`\nNo se encontró un Cliente con DNI ${dni} ​🔎\n​`);
      } else {
        sucursal.eliminarCliente(cliente.getId(), cliente.getNombre());
      }

      rl.question('Presione Enter para continuar...', () => {

        submenuClientes();
        leerOpcion();
      });
    }
  });
}
  
//OBTIENE LA SUCURSAL SEGUN EL DNI DEL CLIENTE

function obtenerSucursalCliente(dni: number): Sucursal | null {
  for (const sucursal of sucursales) {
    const cliente = sucursal.getListaClientes().find(c => c.getDocumento() === dni);
    if (cliente) {
      return sucursal;
    }
  }
  console.log(`\nNo se encontró un Cliente con documento ${dni} en ninguna Sucursal ​🔎\n​`);
  return null;
}
  
//MOSTRAMOS LOS CLIENTES CREADOS (LISTA DE CLIENTES)
  
// Función para mostrar los Clientes agrupados por sucursal
function mostrarClientesPorSucursal(sucursales: Sucursal[]): void {
  console.log('\n🐾🐈 ---------------------------------------------🐾 Listado de Clientes por Sucursal 🐾--------------------------------------------- 🐩🐾\n');
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
        resultado += `\n🐾🐈 ---------------------------------------------------------- 🐾 🐾 ----------------------------------------------------------- 🐩🐾\n`
      }
    }
    resultado += "\n";
  }

  console.log(resultado);

  rl.question('Presione Enter para continuar...', () => {

    submenuClientes();
    leerOpcion();
  });
}

 /* PACIENTES */
  
//CREAMOS PACIENTES

function crearPaciente() {
  if (sucursales.length === 0) {
    console.log('\nNo hay Sucursales registradas.');
    console.log(" ");
    rl.question('Presione Enter para continuar...', () => {    
      mostrarMenuPrincipal(); 
      leerOpcion();
    });
  } else {

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
        console.log(`\n🆔 Paciente: ${id}\n`);
        rl.question('Nombre del Paciente: ', (nombre) => {
       
          solicitarEntrada('\nEspecie del Paciente (Gato | Perro | Otra Especie): ', validarEspecie, false, (especie: string) => {
      
            const otraEspecie = especie.trim().toLowerCase();

            let especiePaciente = otraEspecie === 'gato' || otraEspecie === 'perro' ? otraEspecie : 'Exótica';
            
            if (especiePaciente === 'exótica') {
              console.log("\nEspecie Exótica 🐇🐢: La especie ingresada no es 'Gato' ni 'Perro'. Se ha asignado como Exótica.");
            }

            solicitarEntrada('\nSexo del Paciente (Macho | Hembra): ', validarSexo, false, (sexo: string) => {
              solicitarEntrada('\nFecha de nacimiento del Paciente (DD-MM-YYYY): ', validarFecha, false, (fecha) => {
                rl.question('\nObservación del Paciente: ', (observacion) => {
                  const fechaNacimiento = new Date(fecha);
                  clientePaciente.agregarPaciente(id, nombre, especiePaciente, sexo, fechaNacimiento, observacion);
                  
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
        console.log(`\nError ​❌​: No se encontró un Cliente con documento ${documento}.\n`);
        console.log("");
        
        rl.question('Presione Enter para continuar...', () => {  
          submenuPacientes(); 
          leerOpcion(); 
        });
      }
    });
  }
}
  
// MODIFICAR PACIENTE

function modificarPaciente() {
  let pacienteCliente: Paciente | undefined;

  rl.question('\nIngrese el Documento del Cliente: ', (documentoStr) => {
    const documento = parseInt(documentoStr);

    if (isNaN(documento) || documentoStr.length < 5) {
      console.log('\nPor favor, ingresa un número de documento válido (al menos 5 dígitos).');
      return modificarPaciente();
    }

    let clientePaciente: Cliente | undefined;

    sucursales.forEach(sucursal => {
      clientePaciente = sucursal.getListaClientes().find(cliente => cliente.getDocumento() === documento);
    });

    if (!clientePaciente) {
      console.log('\nNo se encontró el Cliente con el ID ingresado ​🔎\n​');
      rl.question('Presione Enter para continuar...', () => {
        submenuPacientes();
        leerOpcion();
      });
      return; 
    }

    console.log(clientePaciente.mostrarListaPacientes());

    rl.question('\nIngresa el ID del Paciente a modificar: ', (idStr) => {
      const id = parseInt(idStr);

      if (isNaN(id)) {
        console.log('\nPor favor, ingresa un ID válido.');
        return leerOpcion();
      }

      pacienteCliente = clientePaciente.getListaPacientes().find(paciente => paciente.getId() === id);

      if (!pacienteCliente) {
        console.log('\nNo se encontró el Paciente con el ID ingresado ​🔎\n​');
        return leerOpcion();
      }

      rl.question('\nNuevo Nombre (deja vacío para no modificar): ', (nombre) => {
        solicitarEntrada('\nEspecie del Paciente: Gato | Perro | Exótica (deja vacío para no modificar): ', validarEspecie, true, (especie) => {
          solicitarEntrada('\nSexo del Paciente: Macho | Hembra (deja vacío para no modificar): ', validarSexo, true, (sexo) => {
            solicitarEntrada('\nFecha de Nacimiento del Paciente (DD-MM-YYYY) (deja vacío para no modificar): ', validarFecha, true, (fecha) => {
              rl.question('\nNueva Observación (deja vacío para no modificar): ', (observacion) => {

                const fechaNacimiento = fecha ? new Date(fecha) : pacienteCliente.getFechaNacimiento();
                
                if (isNaN(fechaNacimiento.getTime())) {
                  console.log('Fecha inválida. Se mantendrá la fecha registrada anteriormente.');
                  return clientePaciente.modificarPaciente(
                    id,
                    nombre || pacienteCliente.getNombre(),
                    especie || pacienteCliente.getEspecie(),
                    sexo || pacienteCliente.getSexo(),
                    pacienteCliente.getFechaNacimiento(), 
                    observacion || pacienteCliente.getObservacion()
                  );
                }

                clientePaciente.modificarPaciente(
                  id,
                  nombre || pacienteCliente.getNombre(),
                  especie || pacienteCliente.getEspecie(),
                  sexo || pacienteCliente.getSexo(),
                  fechaNacimiento,
                  observacion || pacienteCliente.getObservacion()
                );

                console.log('\nPaciente modificado Exitosamente ​✅​');
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

    sucursales.forEach(sucursal => {
      clientePaciente = sucursal.getListaClientes().find(cliente => cliente.getDocumento() === documento);
    });

    if (!clientePaciente) {
      console.log('\nNo se encontró el Cliente con el documento ingresado ​🔎\n​');
      rl.question('Presione Enter para continuar...', () => {
        submenuPacientes();
        leerOpcion();
      });
    } else {

      console.log(clientePaciente.mostrarListaPacientes());

      rl.question('\nIngresa el ID del Paciente a eliminar: ', (idStr) => {
        const id = parseInt(idStr);

        if (isNaN(id)) {
          console.log('\nPor favor, ingresa un ID válido.');
          return leerOpcion();
        }

        pacienteCliente = clientePaciente.getListaPacientes().find(paciente => paciente.getId() === id);

        if (!pacienteCliente) {
          console.log('\nNo se encontró el Paciente con el ID ingresado ​🔎\n​');
          rl.question('Presione Enter para continuar...', () => {
            submenuPacientes();
            leerOpcion();
          });

        } else {
          clientePaciente.eliminarPaciente(id);

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
  console.log('\n🐾🐈 ---------------------------------------------------🐾 Listado de Pacientes por Cliente 🐾 -------------------------------------------------- 🐩🐾\n');
  rl.question('\nIngrese el Documento del Cliente: ', (documentoStr) => {
    const documento = parseInt(documentoStr);

    if (isNaN(documento) || documentoStr.length < 5) {
      console.log('\nPor favor, ingresa un número de documento válido (al menos 5 dígitos).\n');
      return mostrarListaPacientes();
    }

    let clientePaciente: Cliente | undefined;

    sucursales.forEach(sucursal => {
      clientePaciente = sucursal.getListaClientes().find(cliente => cliente.getDocumento() === documento);
    });

    if (!clientePaciente) {
      console.log('\nNo se encontró el Cliente con el documento ingresado ​🔎\n​');

      rl.question('Presione Enter para continuar...', () => {
        mostrarListaPacientes();
        leerOpcion();
      });
    }

    const pacientes = clientePaciente.getListaPacientes();

    if (pacientes.length === 0) {
      console.log('\nNo hay Pacientes registrados en este Cliente ❌\n');
    }

    const lista = pacientes.map(paciente => {
      return `\n🆔: ${paciente.getId()}, Nombre: ${paciente.getNombre()}, Especie: ${paciente.getEspecie()}, Sexo: ${paciente.getSexo()}, Nacimiento: ${paciente.getFechaNacimiento().toLocaleDateString()}`;
    }).join('\n');

    console.log(lista);

    console.log('\n🐾🐈 -------------------------------------------------------------------🐾 🐾-------------------------------------------------------------------- 🐩🐾\n');

    rl.question('Presione Enter para continuar...', () => {
      submenuPacientes();
      leerOpcion();
    });
  });
}

// REGISTRAMOS LA VISITA DEL CLIENTE CON CUALQUIERA DE SUS MASCOTAS

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

      console.log("\n🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾\n");
    } else {
      console.log(`\nError ​❌​: No se encontró un Cliente con documento ${documento} ​🔎\n`);
    }
    rl.question('Presione Enter para continuar...', () => {

      mostrarMenuPrincipal();
      leerOpcion();
    });
  });
}

// TODAS LA VALIDACIONES NECESARIAS SE ENCUENTRAN AQUI

function validarTelefono(telefono) {
  return /^\d{10,}$/.test(telefono);
}

function validarDocumento(documento) {
  return /^\d{5,}$/.test(documento);
}

function validarCUIT(CUIT: string) {
  return /^\d{11,}$/.test(CUIT);
}

function validarSexo(sexo: string, esModificacion: boolean) {
  if (esModificacion && sexo.trim() === '') {      
    return true;  
  }

  const sexosValidos = ['macho', 'hembra'];
  return sexosValidos.includes(sexo.toLowerCase());
}

function validarEspecie(especie: string, esModificacion: boolean) {
if (esModificacion && especie.trim() === '') {
  return true;
}

const especiesValidas = ['gato', 'perro'];

const otraEspecie = especie.trim().toLowerCase();

if (especiesValidas.includes(otraEspecie)) {
  return true;
} else {
  return true;
}
}

function validarFecha(fecha, esModificacion: boolean) {
if (esModificacion && fecha.trim() === '') {
  return true;
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
    return true;    
  }  
}

function solicitarEntrada(mensaje, validador, esModificacion, callback) {
  rl.question(mensaje, (input) => {
    if (!validador (input, esModificacion)) {
      console.log('\nDato inválido. Inténtalo de nuevo ​⚠️\n​');
      return solicitarEntrada(mensaje, validador, esModificacion, callback);
    }
    callback(input);
  });
}

function elegirSucursal(): void {
  sucursales.forEach((sucursal, index) => {
    console.log(`\nSucursal (🆔): ${sucursales[index].getId()} - Responsable: ${sucursales[index].getResponsable()}`);
  });
}
  