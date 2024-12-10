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

  public mostrarDatosSucursal(): string {
    const clientes = this.listaClientes.map(cliente => cliente.mostrarDatos()).join(", ");
    const proveedores = this.listaProveedores.map(proveedor => proveedor.mostrarDatos()).join(", ");

    return `Sucursal Veterinaria (🆔 ${this.getId()}) Responsable: ${this.getResponsable()}
   Dirección: ${this.getDireccion()}
   Localidad: ${this.getLocalidad()}
   Lista Clientes: [${clientes}]
   Lista Proveedores: [${proveedores}]`;
  }
  
  public agregarProveedor(id: number, nombre: string, direccion: string, telefono: number, documento: number, rubro: string, CUIT: number ): void {
    const proveedorExistente = this.listaProveedores.find((proveedor) => proveedor.getDocumento() === documento);
  
    if (proveedorExistente) {
      console.log(`\nError ❌: El Proveedor con Documento ${documento} ya existe.\n`);
    } else {
      const nuevoProveedor = new Proveedor(id, nombre, direccion, telefono, documento, rubro, CUIT);
      this.listaProveedores.push(nuevoProveedor);
      console.log(`\nProveedor con Documento ${documento} agregado correctamente ✔️\n`);
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
      console.log(`\nProveedor con Documento ${documento} modificado Correctamente ✔️\n`);
    } else {
      console.log(`\nError ❌: No se encontró un Proveedor con Documento ${documento}.\n`);
    }
  
  }
  
  public eliminarProveedor(id: number, nombre: string): void { 
    const index = this.listaProveedores.findIndex(proveedor => proveedor.id === id); 
    if (index !== -1) { // Mejor práctica: uso estricto de !==
      this.listaProveedores.splice(index, 1);
      console.log(`\nEl Proveedor ${nombre} (${id}) ha sido eliminado de la lista de Proveedores de la Sucursal 🗑️\n`);
      console.log('\n🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾\n');
    } else {
      console.log(`\nEl Proveedor ${nombre} (${id}) no ha sido encontrado en la lista de Proveedores de la Sucursal 🔎\n`);
    }
  }
  
  public agregarCliente(id: number, nombre: string, direccion: string, telefono: number, documento: number): void {
    const clienteExistente = this.listaClientes.find(cliente => cliente.getDocumento() === documento);

    if (clienteExistente) {
      console.log(`\nError ❌: El Cliente con Documento ${documento} ya existe.\n`);
    } else {
      const nuevoCliente = new Cliente(id, nombre, direccion, telefono, documento);
      this.listaClientes.push(nuevoCliente);
      console.log(`\nCliente con Documento ${documento} agregado Correctamente ✔️\n`);
    }
  }

  public modificarCliente(documento: number, nombre: string, direccion: string, telefono: number ): void {
    const clienteExistente = this.listaClientes.find(cliente => cliente.getDocumento() === documento);

    if (clienteExistente) {
      clienteExistente.setNombre(nombre);
      clienteExistente.setDireccion(direccion);
      clienteExistente.setTelefono(telefono);
      console.log(`\nCliente con documento ${documento} modificado Correctamente ✅\n`);
    } else {
      console.log(`\nError ❌: No se encontró un Cliente con Documento ${documento}.\n`);
    }
  }
  
  public eliminarCliente(documento: number) {

    const index = this.listaClientes.findIndex(cliente => cliente.getDocumento() === documento);

    if (index !== -1) {
      this.listaClientes.splice(index, 1);
    } else {
      console.log(`\nError ❌: No se encontró un Cliente con Documento ${documento} en ninguna Sucursal.\n`);
    }
  }
}