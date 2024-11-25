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
  9. Registrar Visita
  10. Salir
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
                mostrarProvedores();
                break;
            case '7':
                //mostrarListaClientes();
                break;
            case '8':
                //mostrarListaPacientes();
                break;
            case '9':
                registrarVisita();
                break;    
            case '10':
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
  id += 1; // Incrementar el ID global para el siguiente elemento que se crea
  console.log(`ID Sucursal: ${id}`); 
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
  elegirSucursal();

  rl.question('Elija el ID de la sucursal a la que pertenece el cliente: ', (idSucursalStr) => {    
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
/*
//MOSTRAMOS LOS CLIENTES CREADOS (LISTA DE CLIENTES)
function mostrarListaClientes() {
    console.log(listaClientes);
    console.log('-------------------------------------------------------------------------');
    leerOpcion();
}







*/
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
    //let clienteVisita: Cliente[] = sucursales[0].getClienteDeseado(documento);
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
