import * as readline from 'readline';
import { Cliente } from "./Cliente";
import { Paciente } from "./Paciente";
import { Sucursal } from "./Sucursal";
import { Proveedor } from './Proveedor';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

// Datos globales
let sucursales: Sucursal[] = [];

function mostrarMenu() {
  console.log(`
  1. Crear Sucursal
  2. Modificar Sucursal
  3. Eliminar Sucursal
  4. Crear Proveedor
  5. Modificar Proveedor
  6. Eliminar Proveedor
  7. Crear Cliente
  8. Modificar Cliente
  9. Eliminar Cliente
  10. Crear Paciente
  11. Modificar Paciente
  12. Eliminar Paciente
  13. Mostrar Sucursales
  14. Mostrar Proveedores
  15. Mostrar Clientes
  16. Mostrar Pacientes
  17. Registrar Visita
  18. Salir
  `);
}
console.log (" ")
console.log('Bienvenido a 🐾 🐈 Veterinaria Pocas Pulgas 🐩 🐾');

function leerOpcion() {
    //console.log (" ")
    rl.question('Selecciona una opción: ', (opcion) => {
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
                crearProveedor();
                break;
            case '5':
                modificarProveedor();
                break;  
            case '6':
                eliminarProveedor();
                break;  
            case '7':
                crearCliente();
                break;
            case '8':
                modificarCliente();
                break;
            case '9':
                eliminarCliente();
                break;
            case '10':
                crearPaciente();
                break;
            case '11':
                modificarPaciente();
                break;
            case '12':
                eliminarPaciente();
                break;
            case '13':
                mostrarSucursales();
                break;
            case '14':
                mostrarProveedoresPorSucursal(sucursales);
                break;
            case '15':
                mostrarClientesPorSucursal(sucursales);
                break;
            case '16':
                mostrarListaPacientes();
                break;
            case '17':
                registrarVisita();
                break;    
            case '18':
                rl.close();
                console.log("Salió correctamente del Sistema.\nGracias por ser parte de 🐾 🐈 Veterinaria Pocas Pulgas 🐩 🐾.")
                console.log (" ")
                break;
            default:
                console.log('Opción no válida');
                leerOpcion();
        }
    });
}

let id = 0;   // Inicializa el ID global 

/***********************************************************************************************************************************************************/
/* Sucursal */

//CREAMOS LA SUCURSAL
function crearSucursal() {
  id += 1; // Incrementar el ID global para el siguiente elemento que se crea
  console.log(`ID Sucursal: ${id}`); 
  rl.question('Nombre del Responsable de la Sucursal: ', (responsable) => {
    rl.question('Dirección de la Sucursal: ', (direccion: string) =>  {
        rl.question('Localidad en la que se encuentra la Sucursal: ', (localidad) =>  {   
      const sucursal = new Sucursal(id, responsable, direccion, localidad);
      sucursales.push(sucursal);
      console.log('\nSucursal creada exitosamente ​✅');

      console.log("\n🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾\n");
      leerOpcion();
        });
    });
  });
}

//PERMITE MODIFICAR LOS DATOS DE LA SUCURSAL
function modificarSucursal() {
  rl.question('Ingresa el ID de la Sucursal a modificar: ', (idStr) => {
    const id = parseInt(idStr);
    const sucursal = sucursales.find(s => s.getId() === id);

    if (!sucursal) {
      console.log('\nNo se encontró una Sucursal con ese ID ​🔎​');
      return leerOpcion();
    }

    rl.question('Nuevo responsable: ', (responsable) => {
      rl.question('Nueva dirección: ', (direccion) => {
        rl.question('Nueva localidad: ', (localidad) => {
          sucursal.setResponsable(responsable);
          sucursal.setDireccion(direccion);
          sucursal.setLocalidad(localidad);
          console.log('\nSucursal modificada exitosamente ​✅​');
          leerOpcion();
        });
      });
    });
  });
}

//SE VERIFICA QUE NO TENGA NI CLIENTES NI PROVEEDORES! SI TIENE NO SE BORRA
function eliminarSucursal() {
  rl.question('Ingresa el ID de la Sucursal a eliminar: ', (idStr) => {
    const id = parseInt(idStr);
    const index = sucursales.findIndex(s => s.getId() === id);

    if (index === -1) {
      console.log('\nNo se encontró una Sucursal con ese ID ​🔎​');
      return leerOpcion();
    }

    const sucursal = sucursales[index];

    // Validar si la sucursal tiene clientes o proveedores
    if (sucursal.getListaClientes().length > 0 || sucursal.getListaProveedores().length > 0) {
      console.log('\nNo se puede eliminar esta Sucursal porque tiene Clientes o Proveedores registrados ⚠️​');
    } else {
      sucursales.splice(index, 1);
      console.log('\nSucursal eliminada exitosamente ​✅​');
    }
    leerOpcion();
  });
}

/***********************************************************************************************************************************************************/
/* Proveeodres */

//CREAMOS PROVEEDORES
function crearProveedor() {
  elegirSucursal();

  rl.question('Elija el ID de la Sucursal a la que pertenece el Proveedor: ', (idSucursalStr) => {    
    const idSucursal = parseInt(idSucursalStr);
    const index = sucursales.findIndex(sucursal => sucursal.getId() == idSucursal);
    
    if (index >= 0) {
      let sucursalProveedor = sucursales[index];
      
      id += 1; 
      console.log(`ID Proveedor: ${id}`); 
        rl.question('Nombre del Proveedor: ', (nombre) => {//Nombre no presenta validación 
          rl.question('Dirección del Proveedor: ', (direccion) => { //Tampoco se valida la dirección
            solicitarEntrada('Número de teléfono (sin guiones ni espacios) (10 dígitos): ', validarTelefono, (telefono) => {
              solicitarEntrada('Documento del Proveedor: ', validarDocumento, (documento) => {
                  rl.question('Rubro del Proveedor: ', (rubro) => { //Rubro no presenta validación (Si el usuatio ingresa un número por ejemplo lo toma igual)
                    solicitarEntrada('CUIT del Proveedor (11 dígitos): ', validarCUIT, (CUIT) => {                   
                        sucursalProveedor.agregarProveedor(id, nombre, direccion, parseInt(telefono), parseInt(documento), rubro, parseInt(CUIT));  
                        console.log('\nProveedor creado exitosamente ​✅​');

                        console.log("\n🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾\n");
                        leerOpcion();  
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
}

//ELIMINA UN PROVEEDOR SEGUN EL DOCUMENTO INGRESADO
function eliminarProveedor() {
  rl.question('Ingresa el DNI del Proveedor a eliminar: ', (dniStr) => {
      const dni = parseInt(dniStr);
      const sucursal = obtenerSucursalProveedor(dni); 

      if (!sucursal) {
          console.log('\nNo se encontró la sucursal actual ​🔎​');
          return leerOpcion();
      }

      // Buscar PROVEEDOR en la sucursal
      const proveedor = sucursal.getListaProveedores().find(c => c.getDocumento() === dni);
      if (!proveedor) {
          console.log(`\nNo se encontró un Proveedor con DNI ${dni} ​🔎​`);
      } else {
          sucursal.eliminarProveedor(proveedor.getId(), proveedor.getNombre());
          console.log('\nProveedor eliminado exitosamente ​✅​');
      }
      leerOpcion();
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
  console.log(`\nNo se encontró un Proveedor con DNI ${dni} en ninguna Sucursal ​❌​`);
  return null;
}

/***********************************************************************************************************************************************************/
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

/***********************************************************************************************************************************************************/
/* Clientes */

//CREAMOS CLIENTES
function crearCliente() {
  elegirSucursal();

  rl.question('Elija el ID de la Sucursal a la que pertenece el cliente: ', (idSucursalStr) => {    
    const idSucursal = parseInt(idSucursalStr);
    const index = sucursales.findIndex(sucursal => sucursal.getId() == idSucursal);
    
    if (index >= 0) {
      let sucursalCliente = sucursales[index];
      
      id += 1; 
      console.log(`ID Cliente: ${id}`); 
      
      rl.question('Nombre del cliente: ', (nombre) => {
        rl.question('Dirección del cliente: ', (direccion) => {          
          solicitarEntrada('Número de teléfono (sin guiones ni espacios) (10 dígitos): ', validarTelefono, (telefono) => {
              solicitarEntrada('Documento del cliente: ', validarDocumento, (documento) => {

                  sucursalCliente.agregarCliente(id, nombre, direccion, parseInt(telefono), parseInt(documento));
                  console.log('\nCliente creado exitosamente ​✅​');
                  
                  console.log('\n🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾\n');
                  leerOpcion();
                  
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
}

//ELIMINA UN CLIENTE SEGUN EL DOCUMENTO INGRESADO
function eliminarCliente() {
  rl.question('Ingresa el DNI del Cliente a eliminar: ', (dniStr) => {
      const dni = parseInt(dniStr);
      const sucursal = obtenerSucursalCliente(dni); 

      if (!sucursal) {
          console.log('\nNo se encontró la sucursal actual ​🔎​');
          return leerOpcion();
      }

      // Buscar cliente en la sucursal
      const cliente = sucursal.getListaClientes().find(c => c.getDocumento() === dni);
      if (!cliente) {
          console.log(`\nNo se encontró un Cliente con DNI ${dni} ​🔎​`);
      } else {
          sucursal.eliminarCliente(cliente.getId(), cliente.getNombre());
          console.log('\nCliente eliminado exitosamente ​✅​');
      }
      leerOpcion();
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
  console.log(`\nNo se encontró un Cliente con DNI ${dni} en ninguna sucursal ​🔎​`);
  return null;
}

/***********************************************************************************************************************************************************/
/* PACIENTES */

//CREAMOS PACIENTES
function crearPaciente() {
  rl.question('Ingrese el Documento del Cliente: ', (documentoStr) => {
    const documento = parseInt(documentoStr);

    if (isNaN(documento) ||documentoStr.length < 5) {      
      console.log('Por favor, ingresa un número de documento válido (al menos 5 dígitos).');      
      return crearPaciente();
    }    

    let clientePaciente: Cliente | undefined;

    sucursales.forEach(sucursal =>{
      clientePaciente = sucursal.getListaClientes().find(cliente => cliente.getDocumento() === documento);
    });    

    if (clientePaciente) {
      id += 1; 
      console.log(`ID Paciente: ${id}`);
      rl.question('Nombre del paciente: ', (nombre) => {
        rl.question('Especie del paciente: ', (especie) => {
          solicitarEntrada('Sexo del paciente (Macho | Hembra): ', validarSexo, (sexo) => {
            solicitarEntrada('Fecha de nacimiento del paciente (DD-MM-YYYY): ', validarFecha, (fecha) => {
              rl.question('Observación del paciente: ', (observacion) => {       
                const fechaNacimiento = new Date(fecha);
                clientePaciente.agregarPaciente(id, nombre, especie, sexo, fechaNacimiento, observacion);
                console.log('\nPaciente creado exitosamente ​✅​');                
                
                console.log("\n🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾\n");
                leerOpcion();  
              });
            });
          });
        });
      });
    } else {
      console.log(`Error ​❌​: No se encontró un Cliente con documento ${documento}.`);
    }
  });
}

//MODIFICAR PACIENTE
function modificarPaciente() {
    let pacienteCliente: Paciente | undefined;

    rl.question('Ingrese el Documento del Cliente: ', (documentoStr) => {
      const documento = parseInt(documentoStr);
  
      // Validación del documento
      if (isNaN(documento) ||documentoStr.length < 5) {  
        console.log('\nPor favor, ingresa un número de documento válido (al menos 5 dígitos).');      
        return registrarVisita();
      }    
      
      // Buscar el cliente con el documento proporcionado
      let clientePaciente: Cliente | undefined;
  
      // Buscar el cliente en todas las sucursales
      sucursales.forEach(sucursal =>{
        clientePaciente = sucursal.getListaClientes().find(cliente => cliente.getDocumento() === documento);
      });    
      
      if (!clientePaciente) {
        console.log('\nNo se encontró el Cliente con el ID ingresado ​🔎​');
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
          console.log('\nNo se encontró el paciente con el ID ingresado ​🔎​');
          return leerOpcion(); 
        }

        rl.question('Nuevo nombre (deja vacío para no modificar): ', (nombre) => {
          rl.question('Nueva especie (deja vacío para no modificar): ', (especie) => {
            rl.question('Nuevo sexo (deja vacío para no modificar): ', (sexo) => {
              rl.question('Nueva fecha de nacimiento (formato: DD-MM-YYYY) (deja vacío para no modificar): ', (fechaStr) => {
                rl.question('Nueva observación (deja vacío para no modificar): ', (observacion) => {
                  
                  const fechaNacimiento = new Date(fechaStr);
                    clientePaciente.modificarPaciente (id,
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

      leerOpcion(); 
    });
} 

//ELIMINA UN PACIENTE SEGUN EL ID INGRESADO
function eliminarPaciente() {
  rl.question('Ingrese el Documento del Cliente: ', (documentoStr) => {
    const documento = parseInt(documentoStr);

    // Validación del documento
    if (isNaN(documento) ||documentoStr.length < 5) {  
      console.log('Por favor, ingresa un número de documento válido (al menos 5 dígitos).');      
      return eliminarPaciente();
    }    
    
    // Buscar el cliente con el documento proporcionado
    let clientePaciente: Cliente | undefined;

    // Buscar el cliente en todas las sucursales
    sucursales.forEach(sucursal =>{
      clientePaciente = sucursal.getListaClientes().find(cliente => cliente.getDocumento() === documento);
    });    
    
    if (!clientePaciente) {
      console.log('\nNo se encontró el Cliente con el ID ingresado ​🔎​');
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

      console.log('\nPaciente eliminado exitosamente ​✅​');
      leerOpcion(); 
  });
});
}

//MOSTRAR LISTA DE PACIENTES
function mostrarListaPacientes(): void {
  console.log('\n🐾🐈---------------------------------------------🐾Listado de Pacientes por Cliente🐾---------------------------------------------🐩🐾\n');
  rl.question('Ingrese el Documento del Cliente: ', (documentoStr) => {
    const documento = parseInt(documentoStr);

    // Validación del documento
    if (isNaN(documento) ||documentoStr.length < 5) {  
      console.log('Por favor, ingresa un número de documento válido (al menos 5 dígitos).');      
      return eliminarPaciente();
    }    
    
    // Buscar el cliente con el documento proporcionado
    let clientePaciente: Cliente | undefined;

    // Buscar el cliente en todas las sucursales
    sucursales.forEach(sucursal =>{
      clientePaciente = sucursal.getListaClientes().find(cliente => cliente.getDocumento() === documento);
    });    
    
    if (!clientePaciente) {
      console.log('\nNo se encontró el Cliente con el ID ingresado ​🔎​');
      return leerOpcion(); 
    } 

    const pacientes = clientePaciente.getListaPacientes();
  
    // Si no hay pacientes, mostramos un mensaje
    if (pacientes.length === 0) {
      return '\nNo hay Pacientes registrados en este cliente ❌';
    }

    // Creamos un string con la información de cada paciente
    const lista = pacientes.map(paciente => {
      return `🆔: ${paciente.getId()}, Nombre: ${paciente.getNombre()}, Especie: ${paciente.getEspecie()}, Sexo: ${paciente.getSexo()}, Nacimiento: ${paciente.getFechaNacimiento().toLocaleDateString()}`;
    }).join('\n');

    console.log(lista);

    console.log('\n🐾🐈------------------------------------------------------🐾🐾-------------------------------------------------------🐩🐾\n');
    leerOpcion();
});  
}

function elegirSucursal(): void {
  if (sucursales.length === 0) {
    console.log('No hay Sucursales registradas.');
  } else {   
    sucursales.forEach((sucursal, index) => {
        console.log(`Sucursal (ID): ${sucursales[index].getId()} - Responsable: ${sucursales[index].getResponsable()}`);
    });
  }
}

function mostrarSucursales(): void {
    console.log('\n🐾🐈---------------------------------------------🐾Listado de Sucursales🐾---------------------------------------------🐩🐾\n');
    if (sucursales.length === 0) {
        console.log("No hay Sucursales registradas.");
    } else {
      sucursales.forEach((sucursal, index) => {
        console.log(`Sucursal (ID): ${sucursales[index].getId()} - Responsable: ${sucursales[index].getResponsable()}\n   Dirección: ${sucursal.getDireccion()}\n   Localidad: ${sucursal.getLocalidad()}`);
      });
      console.log('\n🐾🐈------------------------------------------------------🐾🐾-------------------------------------------------------🐩🐾\n');
    }
    
    leerOpcion(); 
       
  }

//MOSTRAMOS LOS CLIENTES CREADOS (LISTA DE CLIENTES)

// Función para mostrar los clientes agrupados por sucursal
function mostrarClientesPorSucursal(sucursales: Sucursal[]): void {
  console.log('\n🐾🐈---------------------------------------------🐾Listado de Clientes por Sucursal🐾---------------------------------------------🐩🐾\n');
  let resultado = "";

  for (const sucursal of sucursales) {
      // Título con el nombre de la sucursal
      resultado += `Sucursal: ${sucursal.getId()}\n`;
      resultado += "Clientes:\n";

      const listaClientes = sucursal.getListaClientes();

      if (listaClientes.length === 0) {
          resultado += "  - No hay Clientes registrados.\n";
      } else {
          for (const cliente of listaClientes) {
              // Agregar información formateada de cada cliente
              resultado += `  - ${cliente.mostrarDatos()}\n`;
              resultado += `\n🐾🐈------------------------------------------------------🐾🐾-------------------------------------------------------🐩🐾\n`
          }
      }

      resultado += "\n"; 
  }

  console.log(resultado);

  console.log('\n🐾🐈------------------------------------------------------🐾🐾-------------------------------------------------------🐩🐾\n');
  leerOpcion();
} 

//MOSTRAMOS LOS PROVEEDORES CREADOS (LISTA DE CLIENTES)
function mostrarProveedoresPorSucursal(sucursales: Sucursal[]): void {
  console.log('\n🐾🐈---------------------------------------------🐾Listado de Proveedores por Sucursal🐾---------------------------------------------🐩🐾\n');
  let resultado = "";

  for (const sucursal of sucursales) {
      // Título con el nombre de la sucursal
      resultado += `Sucursal: ${sucursal.getId()}\n`;
      resultado += "Proveedores:\n";

      const listaProveedores = sucursal.getListaProveedores();

      if (listaProveedores.length === 0) {
          resultado += "  - No hay Proveedores registrados.\n";
      } else {
          for (const Proveedor of listaProveedores) {
              // Agregar información formateada de cada cliente
              resultado += `  - ${Proveedor.mostrarDatos()}\n`;
          }
      }

      resultado += "\n"; 
  }

  console.log(resultado);
  
  console.log('\n🐾🐈------------------------------------------------------🐾🐾-------------------------------------------------------🐩🐾\n');
  leerOpcion();
} 

//Registramos la visita del cliente
function registrarVisita() {
  
  rl.question('Ingrese el Documento del Cliente: ', (documentoStr) => {
    const documento = parseInt(documentoStr);

    // Validación del documento
    if (isNaN(documento) ||documentoStr.length < 5) {  
      console.log('Por favor, ingresa un número de documento válido (al menos 5 dígitos).');      
      return registrarVisita();
    }    
    
    // Buscar el cliente con el documento proporcionado
    let clienteVisita: Cliente | undefined;

    // Buscar el cliente en todas las sucursales
    sucursales.forEach(sucursal =>{
      clienteVisita = sucursal.getListaClientes().find(cliente => cliente.getDocumento() === documento);
    });    

    if (clienteVisita) {
      // Registrar la visita   
      clienteVisita.registrarVisita(); 
      console.log('\nLa visita fue registrada con éxito ​✅​');
      console.log('-------------------------------------------------------------------------');
    } else {
      console.log(`\nError ​❌​: No se encontró un Cliente con documento ${documento} ​🔎.`);
    }
    
    leerOpcion();   
  });
}

mostrarMenu();
leerOpcion();