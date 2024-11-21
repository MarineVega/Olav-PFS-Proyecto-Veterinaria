
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

   
    constructor (id: number, responsable: string, direccion: string, localidad: string) {
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
        return `Sucursal Veterinaria (id ${this.getId()}) Responsable: ${this.getResponsable()}\n Dirección: ${this.getDireccion()}\n Localidad: ${this.getLocalidad()}\n Lista Clientes: ${this.getListaClientes()}\n Lista Proveedores: ${this.getListaProveedores()} .`
    }
    
    public agregarProveedor(proveedor: Proveedor): void {
        this.listaProveedores.push(proveedor);
    }

    public modificarProveedor(id: number, nombre: string, direccion: string, telefono: number, documento: number, rubro: string, CUIT: number): void {
        const persona = this.listaProveedores.find(persona => persona.id == id);
        if (persona) {
            persona.setNombre(nombre);
            persona.setDireccion(direccion);
            persona.setTelefono(telefono);
            persona.setDocumento(documento);
            persona.setRubro(rubro);
            persona.setCUIT(CUIT);
            console.log(`Los datos del Proveedor ${nombre} han sido modificados Correctamente.`)
          } else {
            console.log(`El Proveedor ${nombre} (${id}) no se ha encontrado en la lista de Proveedores de la Sucursal.`);
          }
        }

    public eliminarProveedor(id: number, nombre: string): void {
        const index = this.listaProveedores.findIndex(proveedor => proveedor.id == this.id);
        if (index != -1) {
          this.listaProveedores.splice(index, 1); 
          console.log(`El Provedor ${nombre} (${id}) ha sido eliminado de la lista de Provedores de la Sucursal.`);
        } else {
          console.log(`El Provedor ${nombre} (${id}) no ha sido encontrado en la lista de Provedores de la Sucursal.`);
        }
      }

      public agregarCliente(id: number, nombre: string, direccion: string, telefono: number, documento: number): void {
        const cliente: Cliente = new Cliente (id, nombre, direccion, telefono, documento);
        this.listaClientes.push(cliente);
     }

      public modificarCliente(id: number, nombre: string, direccion: string, telefono: number, documento: number): void {
        const persona = this.listaClientes.find(persona => persona.id == id);
        if (persona) {
            persona.setNombre(nombre);
            persona.setDireccion(direccion);
            persona.setTelefono(telefono);
            persona.setDocumento(documento);
            console.log(`Los datos del Cliente ${nombre} han sido modificados Correctamente.`)
          } else {
            console.log(`El Cliente ${nombre} (${id}) no se ha encontrado en la lista de Clientes de la Sucursal.`);
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
