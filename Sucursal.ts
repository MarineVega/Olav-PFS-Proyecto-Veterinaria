import { Persona } from "./Persona";
import { Cliente } from "./Cliente";
import { Proveedor } from "./Proveedor";


export class Sucursal {
  private id: number;
  private responsable: string;
  private direccion: string;
  private localidad: string;
  private listaClientes: Cliente[];
  private listaProveedores: Proveedor[];


  constructor(id: number, responsable: string, direccion: string, localidad: string) {
    this.id = id;
    this.responsable = responsable;
    this.direccion = direccion;
    this.localidad = localidad;
    this.listaClientes = [];
    this.listaProveedores = [];
  }

  public getId(): number {
    return this.id;
  }

  public getResponsable(): string {
    return this.responsable;
  }

  public getDireccion(): string {
    return this.direccion;
  }

  public getLocalidad(): string {
    return this.localidad;
  }

  public getListaClientes(): Cliente[] {
    return this.listaClientes;
  }

  public getListaProveedores(): Proveedor[] {
    return this.listaProveedores;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public setResponsable(responsable: string): void {
    this.responsable = responsable;
  }

  public setDireccion(direccion: string): void {
    this.direccion = direccion;
  }

  public setLocalidad(localidad: string): void {
    this.localidad = localidad;
  }

  /*public mostrarDatosSucursal(): string {
    return `Sucursal Veterinaria (id ${this.getId()}) Responsable: ${this.getResponsable()}\n Dirección: ${this.getDireccion()}\n Localidad: ${this.getLocalidad()}\n Lista Clientes: ${this.getListaClientes()}\n Lista Proveedores: ${this.getListaProveedores()} .`
  }*/

  public mostrarDatosSucursal(): string {
    const clientes = this.listaClientes.map(cliente => cliente.mostrarDatos()).join(", ");
    const proveedores = this.listaProveedores.map(proveedor => proveedor.mostrarDatos()).join(", ");

    return `Sucursal Veterinaria (id ${this.getId()}) Responsable: ${this.getResponsable()}
   Dirección: ${this.getDireccion()}
   Localidad: ${this.getLocalidad()}
   Lista Clientes: [${clientes}]
   Lista Proveedores: [${proveedores}]`;
  }
  
  // alta, baja  y modificacion de Proveedores
  public agregarProveedor(id: number, nombre: string, direccion: string, telefono: number, documento: number, rubro: string, CUIT: number ): void {
    const proveedorExistente = this.listaProveedores.find((proveedor) => proveedor.getDocumento() === documento);
  
    if (proveedorExistente) {
      console.log(`Error: El proveedor con documento ${documento} ya existe.`);
    } else {
      const nuevoProveedor = new Proveedor(id, nombre, direccion, telefono, documento, rubro, CUIT);
      this.listaProveedores.push(nuevoProveedor);
      console.log(`Proveedor con documento ${documento} agregado correctamente.`);
    }
  }

  public modificarProveedor(documento: number, nombre: string, direccion: string, telefono: number, rubro: string, CUIT: number): void {
    const proveedorExistente = this.listaProveedores.find(
      (proveedor) => proveedor.getDocumento() === documento
    );
  
    if (proveedorExistente) {
      proveedorExistente.setNombre(nombre);
      proveedorExistente.setDireccion(direccion);
      proveedorExistente.setTelefono(telefono);
      proveedorExistente.setRubro(rubro);
      proveedorExistente.setCUIT(CUIT);
      console.log(`Proveedor con documento ${documento} modificado correctamente.`);
    } else {
      console.log(`Error: No se encontró un proveedor con documento ${documento}.`);
    }
  
  }
  
  public eliminarProveedor(id: number, nombre: string): void { 
    const index = this.listaProveedores.findIndex(proveedor => proveedor.id === id); // Corrección aquí
    if (index !== -1) { // Mejor práctica: uso estricto de !==
      this.listaProveedores.splice(index, 1);
      console.log(`El Proveedor ${nombre} (${id}) ha sido eliminado de la lista de Proveedores de la Sucursal.`);
    } else {
      console.log(`El Proveedor ${nombre} (${id}) no ha sido encontrado en la lista de Proveedores de la Sucursal.`);
    }
  }
  
  // alta, modificacion y eliminacion de Clientes
  public agregarCliente( id: number, nombre: string, direccion: string, telefono: number, documento: number): void {
    const clienteExistente = this.listaClientes.find(cliente => cliente.getDocumento() === documento);

    if (clienteExistente) {
      console.log(`Error: El cliente con documento ${documento} ya existe.`);
    } else {
      const nuevoCliente = new Cliente(id, nombre, direccion, telefono, documento);
      this.listaClientes.push(nuevoCliente);
      console.log(`Cliente con documento ${documento} agregado correctamente.`);
    }
  }

  public modificarCliente(documento: number, nombre: string, direccion: string, telefono: number ): void {
    const clienteExistente = this.listaClientes.find(cliente => cliente.getDocumento() === documento);

    if (clienteExistente) {
      clienteExistente.setNombre(nombre);
      clienteExistente.setDireccion(direccion);
      clienteExistente.setTelefono(telefono);
      console.log(`Cliente con documento ${documento} modificado correctamente.`);
    } else {
      console.log(`Error: No se encontró un cliente con documento ${documento}.`);
    }
  }
  
  public eliminarCliente(id: number, nombre: string): void {
    const index = this.listaClientes.findIndex(cliente => cliente.id == id);
    if (index != -1) {
      this.listaClientes.splice(index, 1);
      console.log(`El Cliente ${nombre} se ha eliminado correctamente de la lista de Clientes de la Sucursal.`);
    } else {
      console.log(`El Cliente ${nombre} no ha sido encontrado en la lista de Clientes de la Sucursal.`);
    }
  }
}