import { Cliente } from "./Cliente";
import { Paciente } from "./Paciente";
import { Sucursal } from "./Sucursal";
import { leerOpcion, submenuSucursales, submenuProveedores, submenuClientes, submenuPacientes } from './MenuSubmenu';

import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export { rl };


// Arreglo para almacenar las Sucursales
let sucursales: Sucursal[] = [];

let id = 0;   // Inicializa el ID global 

/* Sucursal */

//CREAMOS LA SUCURSAL
export function crearSucursal() {


  id += 1; 
  console.log(`\nID Sucursal: ${id}`);
  rl.question('Nombre del Responsable de la Sucursal: ', (responsable) => {
    rl.question('Dirección de la Sucursal: ', (direccion: string) => {
      rl.question('Localidad en la que se encuentra la Sucursal: ', (localidad) => {
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
export function modificarSucursal() {
  rl.question('\nIngresa el ID de la Sucursal a modificar: ', (idStr) => {
    const id = parseInt(idStr);
    const sucursal = sucursales.find(s => s.getId() === id);

    if (!sucursal) {
      console.log('\nNo se encontró una Sucursal con ese ID ​🔎\n​');
      return leerOpcion();
    }

    rl.question('Nuevo responsable: ', (responsable) => {
      rl.question('Nueva dirección: ', (direccion) => {
        rl.question('Nueva localidad: ', (localidad) => {
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
export function eliminarSucursal() {
  rl.question('\nIngresa el ID de la Sucursal a eliminar: ', (idStr) => {
    const id = parseInt(idStr);
    const index = sucursales.findIndex(s => s.getId() === id);

    if (index === -1) {
      console.log('\nNo se encontró una Sucursal con ese ID ​🔎\n​');
      return leerOpcion();
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

export function mostrarSucursales(): void {
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
export function crearProveedor() {
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
          solicitarEntrada('Número de teléfono (sin guiones ni espacios) (10 dígitos): ', validarTelefono, (telefono) => {
            solicitarEntrada('Documento del Proveedor: ', validarDocumento, (documento) => {
              rl.question('Rubro del Proveedor: ', (rubro) => { 
                solicitarEntrada('CUIT del Proveedor (11 dígitos): ', validarCUIT, (CUIT) => {
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
export function modificarProveedor() {
  rl.question('\nIngresa el DNI del Proveedor a modificar: ', (dniStr) => {
    const dni = parseInt(dniStr);
    const sucursal = obtenerSucursalProveedor(dni); 

    if (!sucursal) {
      console.log('\nNo se encontró la sucursal actual ​🔎\n​');
      return leerOpcion();
    }

    rl.question('Nuevo nombre: ', (nombre) => {
      rl.question('Nueva dirección: ', (direccion) => {
        solicitarEntrada('Nuevo teléfono (sin guiones ni espacios) (10 dígitos): ', validarTelefono, (telefono) => {
          rl.question('Nuevo rubro: ', (rubro) => {
            solicitarEntrada('Nuevo del proveedor (11 dígitos): ', validarCUIT, (CUIT) => {

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
export function eliminarProveedor() {
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
export function obtenerSucursalProveedor(dni: number): Sucursal | null {
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

export function mostrarProveedoresPorSucursal(sucursales: Sucursal[]): void {
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
export function crearCliente() {
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
          solicitarEntrada('Número de teléfono (sin guiones ni espacios) (10 dígitos): ', validarTelefono, (telefono) => {
            solicitarEntrada('Documento del cliente: ', validarDocumento, (documento) => {

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
export function modificarCliente() {
  rl.question('\nIngresa el DNI del Cliente a modificar: ', (dniStr) => {
    const dni = parseInt(dniStr);
    const sucursal = obtenerSucursalCliente(dni);

    if (!sucursal) {
      console.log('\nNo se encontró la sucursal actual ​🔎\n​');
      return leerOpcion();
    }

    rl.question('Nuevo nombre: ', (nombre) => {
      rl.question('Nueva dirección: ', (direccion) => {
        solicitarEntrada('Nuevo de teléfono (sin guiones ni espacios) (10 dígitos): ', validarTelefono, (telefono) => {

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
export function eliminarCliente() {
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
export function obtenerSucursalCliente(dni: number): Sucursal | null {
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
export function mostrarClientesPorSucursal(sucursales: Sucursal[]): void {
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
export function crearPaciente() {
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
        rl.question('Especie del paciente: ', (especie) => {
          solicitarEntrada('Sexo del paciente (Macho | Hembra): ', validarSexo, (sexo) => {
            solicitarEntrada('Fecha de nacimiento del paciente (DD-MM-YYYY): ', validarFecha, (fecha) => {
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
    }
  });
}

//MODIFICAR PACIENTE
export function modificarPaciente() {
  let pacienteCliente: Paciente | undefined;

  rl.question('\nIngrese el Documento del Cliente: ', (documentoStr) => {
    const documento = parseInt(documentoStr);

    if (isNaN(documento) || documentoStr.length < 5) {
      console.log('\nPor favor, ingresa un número de documento válido (al menos 5 dígitos).');
      return registrarVisita();
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

      rl.question('Nuevo nombre (deja vacío para no modificar): ', (nombre) => {
        rl.question('Nueva especie (deja vacío para no modificar): ', (especie) => {
          rl.question('Nuevo sexo (deja vacío para no modificar): ', (sexo) => {
            rl.question('Nueva fecha de nacimiento (formato: DD-MM-YYYY) (deja vacío para no modificar): ', (fechaStr) => {
              rl.question('Nueva observación (deja vacío para no modificar): ', (observacion) => {

                const fechaNacimiento = new Date(fechaStr);
                clientePaciente.modificarPaciente(id,
                  nombre || pacienteCliente.getNombre(),
                  especie || pacienteCliente.getEspecie(),
                  sexo || pacienteCliente.getSexo(),
                  fechaNacimiento || pacienteCliente.getFechaNacimiento(),
                  observacion || pacienteCliente.getObservacion());

                console.log('\nPaciente modificado exitosamente ​✅​');
                leerOpcion();
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
export function eliminarPaciente() {
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

      console.log('\nPaciente eliminado exitosamente ​🗑️​');

      rl.question('Presione Enter para continuar...', () => {

        submenuPacientes(); 
        leerOpcion(); 
      });
    });
  });
}

// MOSTRAR LISTA DE PACIENTES
export function mostrarListaPacientes(): void {
  console.log('\n🐾 🐈---------------------------------------------🐾 Listado de Pacientes por Cliente🐾 ---------------------------------------------🐩 🐾\n');
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
      console.log('\nNo se encontró el Cliente con el ID ingresado ​🔎\n​');
      return leerOpcion();
    }

    const pacientes = clientePaciente.getListaPacientes();

    // Si no hay pacientes, mostramos un mensaje
    if (pacientes.length === 0) {
      return '\nNo hay Pacientes registrados en este cliente ❌';
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
export function registrarVisita() {

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

    submenuPacientes();
    leerOpcion();
  });
}

