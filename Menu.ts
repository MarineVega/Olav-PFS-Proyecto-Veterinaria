
import * as readline from 'readline';
import { Persona } from "./Persona";
import { Cliente } from "./Cliente";
import { Paciente } from "./Paciente";
import { Proveedor } from "./Proveedor";
import { Sucursal } from "./Sucursal";
import { log } from 'console';


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
  14. Mostrar Provedores
  15. Mostrar Clientes
  16. Mostrar Pacientes
  17. Registrar Visita
  18. Salir
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
                //modificarPaciente();
                break;
            case '12':
                //eliminarPaciente();
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
                //mostrarListaPacientes();
                break;
            case '17':
                registrarVisita();
                break;    
            case '18':
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

/***********************************************************************************************************************************************************/
/* Sucursal */
//CREAMOS LA SUCURSAL
function crearSucursal() {
  id += 1; // Incrementar el ID global para el siguiente elemento que se crea
  console.log(`ID Sucursal: ${id}`); 
  rl.question('Nombre del Responsable de la Sucursal: ', (responsable) => {
    rl.question('Dirección de la sucursal: ', (direccion: string) =>  {
        rl.question('Localidad en la que se encuentra la sucursal: ', (localidad) =>  {   
      const sucursal = new Sucursal(id, responsable, direccion, localidad);
      sucursales.push(sucursal);
      console.log('Sucursal creada exitosamente.');
      //console.log('-------------------------------------------------------------------------');
      console.log("🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾🐾");
      leerOpcion();
        });
    });
  });
}
//PERMITE MODIFICAR LOS DATOS DE LA SUCURSAL
function modificarSucursal() {
  rl.question('Ingresa el ID de la sucursal a modificar: ', (idStr) => {
    const id = parseInt(idStr);
    const sucursal = sucursales.find(s => s.getId() === id);

    if (!sucursal) {
      console.log('No se encontró una sucursal con ese ID.');
      return leerOpcion();
    }

    rl.question('Nuevo responsable: ', (responsable) => {
      rl.question('Nueva dirección: ', (direccion) => {
        rl.question('Nueva localidad: ', (localidad) => {
          sucursal.setResponsable(responsable);
          sucursal.setDireccion(direccion);
          sucursal.setLocalidad(localidad);
          console.log('Sucursal modificada exitosamente.');
          leerOpcion();
        });
      });
    });
  });
}

//SE VERIFICA QUE NO TENGA NI CLIENTES NI PROVEEDORES! SI TIENE NO SE BORRA
function eliminarSucursal() {
  rl.question('Ingresa el ID de la sucursal a eliminar: ', (idStr) => {
    const id = parseInt(idStr);
    const index = sucursales.findIndex(s => s.getId() === id);

    if (index === -1) {
      console.log('No se encontró una sucursal con ese ID.');
      return leerOpcion();
    }

    const sucursal = sucursales[index];

    // Validar si la sucursal tiene clientes o proveedores
    if (sucursal.getListaClientes().length > 0 || sucursal.getListaProveedores().length > 0) {
      console.log('No se puede eliminar esta sucursal porque tiene clientes o proveedores registrados.');
    } else {
      sucursales.splice(index, 1);
      console.log('Sucursal eliminada exitosamente.');
    }
    leerOpcion();
  });
}
/***********************************************************************************************************************************************************/
/* Proveeodres */

//CREAMOS PROVEEDORES
function crearProveedor() {
  elegirSucursal();

  rl.question('Elija el ID de la sucursal a la que pertenece el Proveedor: ', (idSucursalStr) => {    
    const idSucursal = parseInt(idSucursalStr);
    const index = sucursales.findIndex(sucursal => sucursal.getId() == idSucursal);
    
    if (index >= 0) {
      let sucursalProveedor = sucursales[index];
      
      id += 1; 
      console.log(`ID Proveedor: ${id}`); 
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
                        
                        sucursalProveedor.agregarProveedor(id, nombre, direccion, telefono, documento, rubro, CUIT);  
                        console.log('Proveedor creado exitosamente.');
                        console.log("🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾");
                        
                        leerOpcion();  
                    });
                  });
              });
            });
          });
        });

      } else {
        console.log("Por favor ingrese un número de sucursal existente");
        return crearProveedor();
      };
    });
  }
//MODIFICA LOS DATOS DEL PROVEEDORES SEGUN DNI INGRESADO
function modificarProveedor() {
  rl.question('Ingresa el DNI del proveedor a modificar: ', (dniStr) => {
    const dni = parseInt(dniStr);
    const sucursal = obtenerSucursalProveedor(dni); // Método adaptado para proveedores

    if (!sucursal) {
      console.log('No se encontró la sucursal actual.');
      return leerOpcion();
    }

    rl.question('Nuevo nombre: ', (nombre) => {
      rl.question('Nueva dirección: ', (direccion) => {
        rl.question('Nuevo teléfono (sin guiones ni espacios): ', (telefonoStr) => {
          const telefono = parseInt(telefonoStr);
          if (isNaN(telefono) || telefonoStr.length < 10) {
            console.log('Por favor, ingresa un número de teléfono válido (al menos 10 dígitos).');
            return modificarProveedor();
          }

          rl.question('Nuevo rubro: ', (rubro) => {
            rl.question('Nuevo CUIT (11 dígitos): ', (CUITStr) => {
              const CUIT = parseInt(CUITStr);
              if (isNaN(CUIT) || CUITStr.length !== 11) {
                console.log('Por favor, ingresa un CUIT válido (11 dígitos).');
                return modificarProveedor();
              }


              // Método para modificar datos del proveedor
              sucursal.modificarProveedor(dni, nombre, direccion, telefono, rubro, CUIT);
              console.log('Proveedor modificado exitosamente.');
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
  rl.question('Ingresa el DNI del proveedor a eliminar: ', (dniStr) => {
      const dni = parseInt(dniStr);
      const sucursal = obtenerSucursalProveedor(dni); 

      if (!sucursal) {
          console.log('No se encontró la sucursal actual.');
          return leerOpcion();
      }

      // Buscar PROVEEDOR en la sucursal
      const proveedor = sucursal.getListaProveedores().find(c => c.getDocumento() === dni);
      if (!proveedor) {
          console.log(`No se encontró un proveedor con DNI ${dni}.`);
      } else {
          sucursal.eliminarProveedor(proveedor.getId(), proveedor.getNombre());
          console.log('Proveedor eliminado exitosamente.');
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
  console.log(`No se encontró un proveedor con DNI ${dni} en ninguna sucursal.`);
  return null;
}

/***********************************************************************************************************************************************************/
//CREAMOS CLIENTES
function crearCliente() {  
  elegirSucursal();

  rl.question('Elija el ID de la sucursal a la que pertenece el cliente: ', (idSucursalStr) => {    
    const idSucursal = parseInt(idSucursalStr);
    const index = sucursales.findIndex(sucursal => sucursal.getId() == idSucursal);
    
    if (index >= 0) {
      let sucursalCliente = sucursales[index];
      
      id += 1; 
      console.log(`ID Cliente: ${id}`); 
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
              sucursalCliente.agregarCliente(id, nombre, direccion, telefono, documento);    
              console.log('Cliente creado exitosamente.');            
              console.log("🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾");
              leerOpcion();  
            });
          });
        });
      });
    } else {
      console.log("Por favor ingrese un número de sucursal existente");
      return crearCliente();
    };
  });
}

//MODIFICA LOS DATOS DEL CLIENTE SEGUN DNI INGRESADO
function modificarCliente() {
  rl.question('Ingresa el DNI del cliente a modificar: ', (dniStr) => {
      const dni = parseInt(dniStr);
      const sucursal = obtenerSucursalCliente(dni); 

      if (!sucursal) {
          console.log('No se encontró la sucursal actual.');
          return leerOpcion();
      }

      rl.question('Nuevo nombre: ', (nombre) => {
          rl.question('Nueva dirección: ', (direccion) => {
              rl.question('Nuevo teléfono: ', (telefonoStr) => {
                  const telefono = parseInt(telefonoStr);

                  // Usar el método de la sucursal
                  sucursal.modificarCliente(dni, nombre, direccion, telefono);
                  console.log('Cliente modificado exitosamente.');
                  leerOpcion();
              });
          });
      });
  });
}

//ELIMINA UN CLIENTE SEGUN EL DOCUMENTO INGRESADO
function eliminarCliente() {
  rl.question('Ingresa el DNI del cliente a eliminar: ', (dniStr) => {
      const dni = parseInt(dniStr);
      const sucursal = obtenerSucursalCliente(dni); 

      if (!sucursal) {
          console.log('No se encontró la sucursal actual.');
          return leerOpcion();
      }

      // Buscar cliente en la sucursal
      const cliente = sucursal.getListaClientes().find(c => c.getDocumento() === dni);
      if (!cliente) {
          console.log(`No se encontró un cliente con DNI ${dni}.`);
      } else {
          sucursal.eliminarCliente(cliente.getId(), cliente.getNombre());
          console.log('Cliente eliminado exitosamente.');
      }
      leerOpcion();
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
  console.log(`No se encontró un cliente con DNI ${dni} en ninguna sucursal.`);
  return null;
}
/***********************************************************************************************************************************************************/

/***********************************************************************************************************************************************************/
/* PACIENTES */
function crearPaciente() {
  
  rl.question('Ingrese el Documento del cliente: ', (documentoStr) => {
    const documento = parseInt(documentoStr);

    // Validación del documento
    if (isNaN(documento) ||documentoStr.length < 5) {  
      console.log('Por favor, ingresa un número de documento válido (al menos 5 dígitos).');      
      return crearPaciente();
    }    
    
    // Buscar el cliente con el documento proporcionado    
    let clientePaciente: Cliente | undefined;

    // Buscar el cliente en todas las sucursales
    sucursales.forEach(sucursal =>{
      clientePaciente = sucursal.getListaClientes().find(cliente => cliente.getDocumento() === documento);
    });    

    if (clientePaciente) {
      // Agregar el paciente
      id += 1; 
      console.log(`ID Paciente: ${id}`); 
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
                clientePaciente.agregarPaciente(id, nombre, especie, sexo, fechaNacimiento, observacion);
                console.log('Paciente creado exitosamente.');                
                console.log("🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾");
                leerOpcion();  
              });
            });
          });
        });
      });

    } else {
      console.log(`Error: No se encontró un cliente con documento ${documento}.`);
    }
    leerOpcion();   // Volver al menú opciones
  });      
}

function elegirSucursal(): void {
  if (sucursales.length === 0) {
    console.log("No hay sucursales registradas.");
  } else {   
    sucursales.forEach((sucursal, index) => {
        console.log(`Sucursal (ID): ${sucursales[index].getId()} - Responsable: ${sucursales[index].getResponsable()}`);
    });
  }
}


function mostrarSucursales(): void {
    console.log("------------------------------------------------- 🐾 Listado de Sucursales 🐾 -------------------------------------------------");
    if (sucursales.length === 0) {
        console.log("No hay sucursales registradas.");
    } else {
      sucursales.forEach((sucursal, index) => {
        console.log(`Sucursal (ID): ${sucursales[index].getId()} - Responsable: ${sucursales[index].getResponsable()}\n   Dirección: ${sucursal.getDireccion()}\n   Localidad: ${sucursal.getLocalidad()}`);
      });

      
/*
            // Mostrar lista de clientes
            const listaClientes = sucursal.getListaClientes();
            if (listaClientes.length > 0) {
                console.log("  Clientes:");
                listaClientes.forEach(cliente => {
                    console.log(    - ID: ${cliente.getId()}, Nombre: ${cliente.getNombre()});
                });
            } else {
                console.log("  No hay clientes registrados.");
            }

            // Mostrar lista de proveedores
            const listaProveedores = sucursal.getListaProveedores();
            if (listaProveedores.length > 0) {
                console.log("  Proveedores:");
                listaProveedores.forEach(proveedor => {
                    console.log(    - ID: ${proveedor.getId()}, Nombre: ${proveedor.getNombre()});
                });
            } else {
                console.log("  No hay proveedores registrados.");
            }
*/
      console.log("-------------------------------------------------------------------------------------------------------------");
    }
    
    leerOpcion();   // Volver al menú opciones
       
  }
  /*
   
//MOSTRAMOS LOS PROVEEDORES CREADOS (LISTA DE PROVEEDORES)
function mostrarProvedores() {
  console.log("------------------------------------------------- 🐾 Listado de Proveedores 🐾 -------------------------------------------------");
  if (Proveedor.length === 0) { 
      console.log("No hay proveedores registrados.");
  } else {
    const proveedoresInfo = this.listaProveedores.map(proveedor => proveedor.mostrarDatos()).join("\n");
    console.log(proveedoresInfo);
    console.log('-------------------------------------------------------------------------');
  }
    leerOpcion();
}
*/


//MOSTRAMOS LOS CLIENTES CREADOS (LISTA DE CLIENTES)
// Función para mostrar los clientes agrupados por sucursal
function mostrarClientesPorSucursal(sucursales: Sucursal[]): void {
  let resultado = "";

  for (const sucursal of sucursales) {
      // Título con el nombre de la sucursal
      resultado += `Sucursal: ${sucursal.getId()}\n`;
      resultado += "Clientes:\n";

      const listaClientes = sucursal.getListaClientes();

      if (listaClientes.length === 0) {
          resultado += "  - No hay clientes registrados.\n";
      } else {
          for (const cliente of listaClientes) {
              // Agregar información formateada de cada cliente
              resultado += `  - ${cliente.mostrarDatos()}\n`;
          }
      }

      resultado += "\n"; // Línea en blanco entre sucursales
  }

  console.log(resultado);

  leerOpcion();
} 

//MOSTRAMOS LOS PROVEEDORES CREADOS (LISTA DE CLIENTES)

function mostrarProveedoresPorSucursal(sucursales: Sucursal[]): void {
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

      resultado += "\n"; // Línea en blanco entre sucursales
  }

  console.log(resultado);

  leerOpcion();
} 

//Registramos la visita del cliente
function registrarVisita() {
  
  rl.question('Ingrese el Documento del cliente: ', (documentoStr) => {
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
      console.log("La visita fue registrada con éxito");
      console.log('-------------------------------------------------------------------------');
    } else {
      console.log(`Error: No se encontró un cliente con documento ${documento}.`);
    }
    
    leerOpcion();   // Volver al menú opciones
  });
}

mostrarMenu();
leerOpcion();
