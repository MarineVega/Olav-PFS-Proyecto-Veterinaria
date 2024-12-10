import * as readline from 'readline';
import { Cliente } from "./Cliente";
import { Paciente } from "./Paciente";
import { Sucursal } from "./Sucursal";
import { Proveedor } from './Proveedor';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ESTE ARREGLO NOS PERMITE ALMACENAR LAS SUCURSALES CREADAS
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
        console.log("\nSalió correctamente del Sistema 👋.");
        console.log(" ");
        console.log("Gracias por ser parte de 🐾 🐈 Veterinaria Pocas Pulgas 🐩 🐾.\n");
        break;
      default:
        console.log('\nOpción no válida, ingresa otra Opción.\n');
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
        console.log('\nOpción no válida, ingresa otra Opción.\n');
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
        console.log('\nOpción no válida, ingresa otra Opción.\n');
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
  5. Volver al Menú principal
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
        console.log('\nOpción no válida, ingresa otra Opción.\n');
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
        console.log('\nOpción no válida, ingresa otra Opción.\n');
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
          console.log('\nSucursal Creada Exitosamente ​✅');  

          console.log("\n🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾\n");
  
          rl.question('Presione Enter para Continuar...', () => {  

            submenuSucursales();
            leerOpcion(); 
          });
        });
      });
    });
  }
  
  
//PERMITE MODIFICAR LOS DATOS DE LA SUCURSAL

function modificarSucursal() {
  console.log('\nLista de Sucursales:');
    sucursales.forEach((sucursal, index) => {
      console.log(`\n${index + 1}: 🆔 ${sucursal.getId()} - Responsable: ${sucursal.getResponsable()} - Dirección: ${sucursal.getDireccion()}`);
    });

  rl.question('\nIngresa el ID de la Sucursal a Modificar: ', (idStr) => {
    const id = parseInt(idStr);
    const sucursal = sucursales.find(s => s.getId() === id);

    if (!sucursal) {
      console.log('\nNo se encontró una Sucursal con ese ID ​🔎\n​');

      rl.question('Presione Enter para Continuar...', () => {

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
          console.log('\nSucursal Modificada Exitosamente ​✅​');

          console.log("\n🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾\n");

          rl.question('Presione Enter para Continuar...', () => {

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
  console.log('\nLista de Sucursales:');
    sucursales.forEach((sucursal, index) => {
      console.log(`\n${index + 1}: 🆔 ${sucursal.getId()} - Responsable: ${sucursal.getResponsable()} - Dirección: ${sucursal.getDireccion()}`);
    });

  rl.question('\nIngresa el ID de la Sucursal a Eliminar: ', (idStr) => {
    const id = parseInt(idStr);
    const index = sucursales.findIndex(s => s.getId() === id);

    if (index === -1) {
      console.log('\nNo se encontró una Sucursal con ese ID ​🔎\n​');

      rl.question('Presione Enter para Continuar...', () => {
        submenuSucursales();
        leerOpcion();
      });
    } else {
      const sucursal = sucursales[index];

      if (sucursal.getListaClientes().length > 0 || sucursal.getListaProveedores().length > 0) {
        console.log('\nNo se puede eliminar esta Sucursal porque tiene Clientes o Proveedores registrados ⚠️\n​');
      } else {
        sucursales.splice(index, 1);
        console.log('\nSucursal Eliminada Exitosamente 🗑️​');
      }

      console.log("\n🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾\n");

      rl.question('Presione Enter para Continuar...', () => {

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

  rl.question('Presione Enter para Continuar...', () => {

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
    rl.question('Presione Enter para Continuar...', () => {

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

              solicitarEntrada('\nDocumento del Proveedor (5 a 10 dígitos): ', validarDocumento, false, (documento) => {

                solicitarEntrada('\nRubro del Proveedor: ', validarVacios, false, (rubro: string) => {

                  solicitarEntrada('\nCUIT del Proveedor (11 dígitos): ', validarCUIT, false, (CUIT) => {

                    sucursalProveedor.agregarProveedor(id, nombre, direccion, parseInt(telefono), parseInt(documento), rubro, parseInt(CUIT));

                    console.log("\n🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾\n");

                    rl.question('Presione Enter para Continuar...', () => {

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
      }
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
      console.log('\nError ❌: No se encontró un Proveedor con ese Documento en ninguna Sucursal 🔎\n');
      rl.question('Presione Enter para Continuar...', () => {

        submenuProveedores(); 
        leerOpcion();
      });
      return; 
    }

    const proveedorExistente = sucursal.getListaProveedores().find(
      (proveedor) => proveedor.getDocumento() === dni
    );

    if (!proveedorExistente) {
      console.log(`\nError ❌: No se encontró un Proveedor con Documento ${dni} 🔎\n`);
      rl.question('Presione Enter para Continuar...', () => {
        submenuProveedores(); 
        leerOpcion();
      });
      return; 
    }

    const nombreActual = proveedorExistente.getNombre();
    const direccionActual = proveedorExistente.getDireccion();
    const telefonoActual = proveedorExistente.getTelefono().toString();
    const rubroActual = proveedorExistente.getRubro();
    const CUITActual = proveedorExistente.getCUIT().toString();

  
    solicitarEntrada('\nNuevo Nombre (deja vacío para no modificar): ', validarVacios, true, (nombre) => {

      solicitarEntrada('\nNueva Dirección (deja vacío para no modificar): ', validarVacios, true, (direccion) => {

        solicitarEntrada('\nNuevo Teléfono (sin guiones ni espacios - 10 dígitos - deja vacío para no modificar): ', validarVacios, false, (telefono) => {

          solicitarEntrada('\nNuevo Rubro (deja vacío para no modificar): ', validarVacios, true, (rubro) => {

            solicitarEntrada('\nNuevo CUIT del Proveedor (11 dígitos, deja vacío para no modificar): ', validarVacios, false, (CUIT) => {

              const nombreModificado = nombre.trim() === '' ? nombreActual : nombre;
              const direccionModificada = direccion.trim() === '' ? direccionActual : direccion;
              const telefonoModificado = telefono.trim() === '' ? telefonoActual : telefono;
              const rubroModificado = rubro.trim() === '' ? rubroActual : rubro;
              const CUITModificado = CUIT.trim() === '' ? CUITActual : CUIT;

              sucursal.modificarProveedor(dni, nombreModificado, direccionModificada, parseInt(telefonoModificado), rubroModificado, parseInt(CUITModificado));

              console.log('\nProveedor Modificado Exitosamente ✅');

              rl.question('Presione Enter para Continuar...', () => {

                submenuProveedores(); 
                leerOpcion();
              });

            });
          });
        });
      });
    });
  });
} //REVISAR MODIFICAR PROVEEDOR QUE SE PERMITA VACIO EN TELEFONO Y CUIT

/*function modificarProveedor() {
  rl.question('Ingresa el DNI del Proveedor a modificar: ', (dniStr) => {
    const dni = parseInt(dniStr);
    const sucursal = obtenerSucursalProveedor(dni); // Método adaptado para proveedores

    if (!sucursal) {
      console.log('\nNo se encontró la sucursal actual ​🔎​');
      return leerOpcion();
    }

    rl.question('Nuevo nombre: ', (nombre) => {
      rl.question('Nueva dirección: ', (direccion) => {        
        solicitarEntrada('Nuevo teléfono (sin guiones ni espacios) (10 dígitos): ', validarTelefono, (telefono) => {
          rl.question('Nuevo rubro: ', (rubro) => {
            solicitarEntrada('Nuevo del proveedor (11 dígitos): ', validarCUIT, (CUIT) => {
              // Método para modificar datos del proveedor
              sucursal.modificarProveedor(dni, nombre, direccion, parseInt(telefono), rubro, parseInt(CUIT));            
              console.log('\nProveedor modificado exitosamente ​✅​');

              console.log('\n🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾\n');
              leerOpcion();
            });
          });
        });
      });
    });
  });
}*///METODO DEL PRIMER MENU QUE SE CREO PARA MODIFICAR PROVEEDOR

//ELIMINA UN PROVEEDOR SEGUN EL DOCUMENTO INGRESADO

  function eliminarProveedor() { 
    rl.question('\nIngresa el DNI del Proveedor a modificar: ', (dniStr) => {
      const dni = parseInt(dniStr);
      const sucursal = obtenerSucursalProveedor(dni); 
  
      if (!sucursal) {
        console.log('\nError ❌: No se encontró un Proveedor con ese Documento en ninguna Sucursal 🔎\n');
  
        rl.question('Presione Enter para Continuar...', () => {

          submenuProveedores(); 
          leerOpcion();
        });
        return; 
      }
  
      const proveedor = sucursal.getListaProveedores().find(c => c.getDocumento() === dni);
  
      if (!proveedor) {
        console.log(`\nError ❌: No se encontró un Proveedor con Documento ${dni} ​🔎\n​`);
      } else {
        sucursal.eliminarProveedor(proveedor.getId(), proveedor.getNombre());
      }
  
      rl.question('Presione Enter para Continuar...', () => {

        submenuProveedores();
        leerOpcion();
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
        
  rl.question('Presione Enter para Continuar...', () => {

    submenuProveedores(); 
    leerOpcion(); 
  });
}
  
/* Clientes */
  
//CREAMOS CLIENTES

function crearCliente() {

  if (sucursales.length === 0) {
    console.log('No hay Sucursales registradas.\n');
    console.log(" ");
    rl.question('Presione Enter para Continuar...', () => {

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
            solicitarEntrada('\nNúmero de Teléfono (sin guiones ni espacios - 10 dígitos): ', validarTelefono, true, (telefono) => {
              if (!validarTelefono(telefono)) {
                console.log("\nError ❌: El teléfono debe ser de exactamente 10 dígitos.\n");

                return submenuClientes(); 
              }
              
              solicitarEntrada('\nDocumento del Cliente: ', validarDocumento, false, (documento) => {

                sucursalCliente.agregarCliente(id, nombre, direccion, parseInt(telefono), parseInt(documento));

                console.log('\n🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾\n');

                rl.question('Presione Enter para Continuar...', () => {

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
    })
  }
}

//MODIFICA LOS DATOS DEL CLIENTE SEGUN DNI INGRESADO

function modificarCliente() {
  rl.question('\nIngresa el Documento del Cliente a modificar: ', (dniStr) => {
    const dni = parseInt(dniStr);

    let clienteExistente = null;
    let sucursalEncontrada = null;

    for (let sucursal of sucursales) {
      clienteExistente = sucursal.getListaClientes().find(
        (cliente) => cliente.getDocumento() === dni
      );

      if (clienteExistente) {
        sucursalEncontrada = sucursal;
        break; 
      }
    }

    if (!clienteExistente) {
      console.log(`\nError ❌: No se encontró un Cliente con Documento ${dni} en ninguna Sucursal 🔎\n`);

      rl.question('Presione Enter para Continuar...', () => {
        submenuClientes(); 
        leerOpcion();
      });

      return; 
    }

    const nombreActual = clienteExistente.getNombre();
    const direccionActual = clienteExistente.getDireccion();
    const telefonoActual = clienteExistente.getTelefono().toString();


    solicitarEntrada('\nNuevo Nombre (deja vacío para no modificar): ', validarVacios, true, (nombre) => {

      solicitarEntrada('\nNueva Dirección (deja vacío para no modificar): ', validarVacios, true, (direccion) => {

        solicitarEntrada('\nNuevo Teléfono (sin guiones ni espacios - 10 dígitos -deja vacío para no modificar): ', validarVacios, false, (telefono) => {

          const telefonoModificado = telefono.trim() === '' ? telefonoActual : telefono;

          sucursalEncontrada.modificarCliente(dni, nombre.trim() === '' ? nombreActual : nombre, 
            direccion.trim() === '' ? direccionActual : direccion, telefonoModificado);

          console.log('\nCliente Modificado Exitosamente ✅');

          console.log('\n🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾\n');

          rl.question('Presione Enter para Continuar...', () => {
            submenuClientes(); 
            leerOpcion();  
          });
        });
      });
    });
  });
} //LO MISMO QUE PASA EN PROVEEDROR PASA EN CLIENTE NO VALIDA EL CAMPO TELEFONO VACIO

/*function modificarCliente() {
  rl.question('Ingresa el DNI del Cliente a modificar: ', (dniStr) => {
      const dni = parseInt(dniStr);
      const sucursal = obtenerSucursalCliente(dni); 

      if (!sucursal) {
          console.log('\nNo se encontró la sucursal actual ​🔎​');
          return leerOpcion();
      }

      rl.question('Nuevo nombre: ', (nombre) => {
          rl.question('Nueva dirección: ', (direccion) => {
              solicitarEntrada('Nuevo de teléfono (sin guiones ni espacios) (10 dígitos): ', validarTelefono, (telefono) => {                

                  // Usar el método de la sucursal
                  sucursal.modificarCliente(dni, nombre, direccion, parseInt(telefono));
                  console.log('\nCliente modificado exitosamente ​✅​');
                  leerOpcion();
              });
          });
      });
  });
}*/ //PRIMER METODO CREADO PARA MODIFICAR CLIENTE

//ELIMINA UN CLIENTE SEGUN EL DOCUMENTO INGRESADO

function eliminarCliente() {
  rl.question('\nIngresa el Documento del Cliente a eliminar: ', (dniStr) => {
    const dni = parseInt(dniStr);

    if (isNaN(dni)) {
      console.log("\nError ❌: El Documento ingresado NO es válido.\n");

      submenuClientes(); 
      leerOpcion(); 

      return; 
    }

    let clienteExistente = null;
    let sucursalEncontrada = null;

    for (let sucursal of sucursales) {
      clienteExistente = sucursal.getListaClientes().find(
        (cliente) => cliente.getDocumento() === dni
      );

      if (clienteExistente) {
        sucursalEncontrada = sucursal;
        break;
      }
    }

    if (!clienteExistente) {
      console.log(`\nError ❌: No se encontró un Cliente con Documento ${dni} en ninguna Sucursal.\n`);

      rl.question('Presione Enter para Continuar...', () => {

        submenuClientes(); 
        leerOpcion();
      });

      return; 
    }

    sucursalEncontrada.eliminarCliente(dni);

    console.log(`\nCliente con Documento ${dni} Eliminado Exitosamente 🗑️`);
    
    console.log('\n🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾\n');

    rl.question('Presione Enter para Continuar...', () => {

      submenuClientes();
      leerOpcion();
    });
  });
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

  rl.question('Presione Enter para Continuar...', () => {

    submenuClientes();
    leerOpcion();
  });
}

 /* PACIENTES */
  
//CREAMOS PACIENTES

function crearPaciente() {
  if (sucursales.length === 0) {
    console.log('\nNo hay Sucursales registradas.\n');
    rl.question('Presione Enter para Continuar...', () => {
      mostrarMenuPrincipal();
      leerOpcion();
    });
  } else {
    rl.question('\nIngrese el Documento del Cliente: ', (documentoStr) => {
      const documento = parseInt(documentoStr);

      if (isNaN(documento) || documentoStr.length < 5) {
        console.log('Por favor, ingresa un número de Documento válido (entre 5 y 10 dígitos).');
        return crearPaciente();
      }
      
      let clientePaciente: Cliente | undefined;
      
      for (const sucursal of sucursales) {
        clientePaciente = sucursal.getListaClientes().find(cliente => cliente.getDocumento() === documento);
        if (clientePaciente) {
          break; 
        }
      }

      if (clientePaciente) {
        id += 1; 
        console.log(`\n🆔 Paciente: ${id}\n`);

        rl.question('Nombre del Paciente: ', (nombre) => {

          solicitarEntrada('\nEspecie del Paciente (Gato | Perro | Otra Especie): ', validarEspecie, false, (especie: string) => {
            let especiePaciente = especie.trim().toLowerCase();

            if (especiePaciente === '' || (especiePaciente !== 'gato' && especiePaciente !== 'perro')) {
              especiePaciente = 'exótica'; 
              console.log("\nEspecie Exótica 🐇: La especie ingresada no es 'Gato' ni 'Perro'. Se ha asignado como Exótica 🐢");
            }

            solicitarEntrada('\nSexo del Paciente (Macho | Hembra): ', validarSexo, false, (sexo: string) => {
              solicitarEntrada('\nFecha de nacimiento del Paciente (DD-MM-YYYY): ', validarFecha, false, (fecha) => {
                rl.question('\nObservación del Paciente: ', (observacion) => {
                  const fechaNacimiento = new Date(fecha);
                  clientePaciente.agregarPaciente(id, nombre, especiePaciente, sexo, fechaNacimiento, observacion);

                  console.log("\n🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾\n");

                  rl.question('Presione Enter para Continuar...', () => {
                    submenuPacientes();
                    leerOpcion();
                  });
                });
              });
            });
          });
        });
      } else {
        console.log(`\nError ​❌​: No se encontró un Cliente con Documento ${documento}.\n`);
        rl.question('Presione Enter para Continuar...', () => {

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
      console.log('\nPor favor, ingresa un número de Documento válido (entre 5 y 10 dígitos).');
      return modificarPaciente();
    }

    let clientePaciente: Cliente | undefined;

    for (const sucursal of sucursales) {
      clientePaciente = sucursal.getListaClientes().find(cliente => cliente.getDocumento() === documento);
      if (clientePaciente) {
        break; 
      }

    }
    if (!clientePaciente) {
      console.log('\nNo se encontró el Cliente con el Documento ingresado ​🔎\n​');
      rl.question('Presione Enter para Continuar...', () => {

        submenuPacientes();
        leerOpcion();
      });
      return;
    }

    console.log(clientePaciente.mostrarListaPacientes());

    rl.question('\nIngresa el ID del Paciente a Modificar: ', (idStr) => {
      const id = parseInt(idStr);

      if (isNaN(id)) {
        console.log('\nPor favor, ingresa un ID válido.');
        return leerOpcion();
      }

      pacienteCliente = clientePaciente.getListaPacientes().find(paciente => paciente.getId() === id);

      if (!pacienteCliente) {
        console.log('\nNo se encontró el Paciente con el ID ingresado ​🔎\n​');
        rl.question('Presione Enter para Continuar...', () => {
        
          submenuPacientes();
          leerOpcion();
        });
        return;
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

                console.log("\n🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾\n");

                rl.question('Presione Enter para Continuar...', () => {
                  submenuPacientes();
                  leerOpcion();
                });
              });
            });
          });
        });
      });
    });

    rl.question('Presione Enter para Continuar...', () => {
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
      console.log('Por favor, ingresa un número de Documento válido (entre 5 y 10 dígitos).');
      return eliminarPaciente();
    }

    let clientePaciente: Cliente | undefined;

    for (const sucursal of sucursales) {
      clientePaciente = sucursal.getListaClientes().find(cliente => cliente.getDocumento() === documento);
      if (clientePaciente) {
        break; 
      }
    }

    if (!clientePaciente) {
      console.log('\nNo se encontró el Cliente con el Documento ingresado ​🔎\n​');
      rl.question('Presione Enter para Continuar...', () => {

        submenuPacientes();
        leerOpcion();
      });
      return; 
    }

    console.log(clientePaciente.mostrarListaPacientes());

    rl.question('\nIngresa el ID del Paciente a Eliminar: ', (idStr) => {
      const id = parseInt(idStr);

      if (isNaN(id)) {
        console.log('\nPor favor, ingresa un ID válido.\n');
     
        rl.question('Presione Enter para Continuar...', () => {

          submenuPacientes();
          leerOpcion();
        });
        return; 
      }
  
      pacienteCliente = clientePaciente.getListaPacientes().find(paciente => paciente.getId() === id);

      if (!pacienteCliente) {
        console.log('\nNo se encontró el Paciente con el ID ingresado ​🔎\n​');
        rl.question('Presione Enter para Continuar...', () => {

          submenuPacientes();
          leerOpcion();
        });
      } else {

        clientePaciente.eliminarPaciente(id);

        console.log("\n🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾\n");
      }

      rl.question('Presione Enter para Continuar...', () => {

        submenuPacientes();
        leerOpcion();
      });
    });
  });
}
  
// MOSTRAR LISTA DE PACIENTES

function mostrarListaPacientes(): void {
  console.log('\n🐾🐈 ---------------------------------------------------🐾 Listado de Pacientes por Cliente 🐾 -------------------------------------------------- 🐩🐾\n');
  rl.question('\nIngrese el Documento del Cliente: ', (documentoStr) => {
    const documento = parseInt(documentoStr);

    if (isNaN(documento) || documentoStr.length < 5) {
      console.log('\nPor favor, ingresa un número de Documento válido (entre 5 y 10 dígitos).\n');
      return mostrarListaPacientes();
    }

    let clientePaciente: Cliente | undefined;

    for (const sucursal of sucursales) {
      clientePaciente = sucursal.getListaClientes().find(cliente => cliente.getDocumento() === documento);
      if (clientePaciente) {
        break; 
      }
    }

    if (!clientePaciente) {
      console.log('\nNo se encontró el Cliente con el Documento ingresado ​🔎\n​');

      rl.question('Presione Enter para Continuar...', () => {

        mostrarListaPacientes();
        leerOpcion();
      });
      return; 
    }

    const pacientes = clientePaciente.getListaPacientes();

    if (pacientes.length === 0) {
      console.log('\nNo hay Pacientes registrados en este Cliente ❌\n');
    } else {
 
      const lista = pacientes.map(paciente => {
        return `\n🆔: ${paciente.getId()}, Nombre: ${paciente.getNombre()}, Especie: ${paciente.getEspecie()}, Sexo: ${paciente.getSexo()}, Nacimiento: ${paciente.getFechaNacimiento().toLocaleDateString()}, Observación: ${paciente.getObservacion()} `;
      }).join('\n');

      console.log(lista);
    }

    console.log('\n🐾🐈 -------------------------------------------------------------------🐾 🐾-------------------------------------------------------------------- 🐩🐾\n');

    rl.question('Presione Enter para Continuar...', () => {

      submenuPacientes();
      leerOpcion();
    });
  });
}

// FUNCION PARA REGISTRAR LA VISITA DEL CLIENTE EN CUALQUIERA DE LAS SUCURSALES

function registrarVisita() {
  rl.question('\nIngrese el Documento del Cliente: ', (documentoStr) => {
    const documento = parseInt(documentoStr);

    if (isNaN(documento) || documentoStr.length < 5) {
      console.log('\nPor favor, ingresa un número de Documento válido (entre 5 y 10 dígitos).\n');
      return registrarVisita();
    }

    let clienteVisita: Cliente | undefined;

    for (let sucursal of sucursales) {
      clienteVisita = sucursal.getListaClientes().find(cliente => cliente.getDocumento() === documento);
      if (clienteVisita) {
        break; 
      }
    }

    if (!clienteVisita) {
      console.log(`\nError ​❌​: No se encontró un Cliente con Documento ${documento} ​🔎\n`);
      rl.question('Presione Enter para Continuar...', () => {

        mostrarMenuPrincipal();
        leerOpcion();
      });
      return;
    }

    console.log('\nLista de Sucursales:');
    sucursales.forEach((sucursal, index) => {
      console.log(`\n${index + 1}: 🆔 ${sucursal.getId()} - Responsable: ${sucursal.getResponsable()} - Dirección: ${sucursal.getDireccion()}`);
    });

    rl.question('\nSeleccione la Sucursal para Registrar la Visita: ', (seleccionSucursal) => {
      const sucursalIndex = parseInt(seleccionSucursal) - 1;

      if (isNaN(sucursalIndex) || sucursalIndex < 0 || sucursalIndex >= sucursales.length) {
        console.log('\nSelección inválida. Por favor, ingrese un número de Sucursal válido.');
        return registrarVisita();
      }

      const listaPacientes = clienteVisita.getListaPacientes();

      if (listaPacientes.length === 0) {
        console.log('\nEste Cliente no tiene Pacientes registrados.\n');

        return mostrarMenuPrincipal();
      }

      console.log('\nLista de Pacientes del Cliente:\n');
      listaPacientes.forEach((paciente, index) => {
        console.log(`${index + 1}: 🆔 ${paciente.getId()} - ${paciente.getNombre()}`);
      });

      rl.question('\nSeleccione el número del Paciente para Registrar la Visita: ', (seleccionPaciente) => {
        const pacienteIndex = parseInt(seleccionPaciente) - 1;

        if (isNaN(pacienteIndex) || pacienteIndex < 0 || pacienteIndex >= listaPacientes.length) {
          console.log('\nSelección inválida. Por favor, ingrese un número de Paciente válido.\n');
          return registrarVisita();
        }

        const pacienteSeleccionado = listaPacientes[pacienteIndex];

       
          rl.question('\nIngrese el Diagnóstico del Paciente: ', (diagnostico) => {

            clienteVisita.registrarVisita(diagnostico, pacienteSeleccionado.getId());

            console.log('\nLa Visita fue Registrada con Éxito ​✅​');

            console.log("\n🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾\n");

            rl.question('\nPresione Enter para Continuar...', () => {

              mostrarMenuPrincipal();
              leerOpcion();
            });
          });
        });
      });
    });
  };
//ESTA FUNCION PERMITE REGISTRAR LA VISITA DEL CLIENTE CON EL PACIENTE QUE ELIGA, EN LA SUCURSAL QUE DEICDA. ADEMAS SE REGISTRA UN DIAGNOSTICO

// TODAS LA VALIDACIONES NECESARIAS SE ENCUENTRAN AQUI

function validarTelefono(telefono) {
  return /^\d{10}$/.test(telefono);
}

function validarDocumento(documento) {
  return /^\d{5,10}$/.test(documento); 
}

function validarCUIT(CUIT) {
  return /^\d{11}$/.test(CUIT); 
}

function validarSexo(sexo: string, esModificacion: boolean) {
  if (esModificacion && sexo.trim() === '') {      
    return true;  
  }

  const sexosValidos = ['macho', 'hembra'];
  return sexosValidos.includes(sexo.toLowerCase());
}

function validarEspecie(especie: string, esModificacion: boolean): boolean {
  if (esModificacion && especie.trim() === '') {
    return true;
  }


  const especieValida = /^[a-zA-Z]+$/.test(especie.trim()); // SOLO PERMITE LETRAS. NO ES LA MEJOR VALIDACION PORQUE POR EJEMPLO PUEDE ESCRIBIR PALABRAS QUE NO SEAN ESPECIES PERO SE APROXIMA
  return especieValida;
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
      console.log('\nDato inválido. Inténtelo de nuevo ​⚠️');
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
  


