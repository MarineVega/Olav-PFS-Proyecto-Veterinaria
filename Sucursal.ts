
import { Persona } from "./Persona";
import { Cliente } from "./Cliente";
import { Proveedor } from "./Proveedor";


export class Sucursal { // Qué significa que la clase Sucursal sea Default?
    private id: number;
    private responsable: string;
    private direccion: string;
    private localidad: string;
    private condicionVip: number;
    private listaClientes: Cliente[];
    private listaProveedores: Proveedor[];

   
    constructor (id: number, responsable: string, direccion: string, localidad: string, condicionVip: number) {
        this.id = id;
        this.responsable = responsable;
        this.direccion = direccion;
        this.localidad = localidad;
        this.condicionVip = condicionVip;
        this.listaClientes = [];
        this.listaProveedores = []           
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

    public getCondicionVip(): number {
        return this.condicionVip;
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

    public setCondicionVip(condicionVip: number): void {
        this.condicionVip = condicionVip;
    }

    /*public setListaClientes(listaClientes: Cliente[]): void {
        this.listaClientes = listaClientes;
    }

    public setListaProveedores(listaProveedores: Proveedor[]): void {
        this.listaProveedores = listaProveedores;
    }*/ // NO ESTOY SEGURA QUE DEBAMOS DEJAR ESTOS SET 

    public mostrarDatosSucursal(): string {
        return `Sucursal Veterinaria (ID ${this.id}) Responsable: ${this.responsable}\n Dirección: ${this.direccion}\n Localidad: ${this.localidad}\n Condición VIP: ${this.condicionVip}\n Lista Clientes: ${this.getListaClientes()}\n Lista Proveedores: ${this.getListaProveedores()}.`
    }  
    
    /*public mostrarDatosSucursal(): string {
        return `Sucursal Veterinaria (id ${this.getId()}) Responsable: ${this.getResponsable()}\n Dirección: ${this.getDireccion()}\n Localidad: ${this.getLocalidad()}\n Condición VIP: ${this.getCondicionVip()}\n Lista Clientes: ${this.getListaClientes()}\n Lista Proveedores: ${this.getListaProveedores()} .`
    }*/ // Es esta la manera en la que se aplica la buena práctica de utilizar el this.get para obtener los datos de la sucursal?
    
    public agregarProveedor(proveedor: Proveedor): void {
        this.listaProveedores.push(proveedor);
    }

    public modificarProveedor(): void {

    }

    eliminarProveedor(id: number): boolean {
        const index = this.listaProveedores.findIndex(proveedor => proveedor.id === this.id);
        if (index !== -1) {
          this.listaProveedores.splice(index, 1); // Elimina el proveedor del arreglo listaProveedores
          return true; // Si se elimina correctamnete del arreglo listaProveedores
        } else {
          return false; // Si no se encuentra un proveedor con el ID especificado
        }
      }

      public agregarCliente(id: number, nombre: string, direccion: string, telefono: number, documento: number): void {
        const cliente: Cliente = new Cliente (id, nombre, direccion, telefono, documento);
        this.listaClientes.push(cliente);
    }

      /*public agregarCliente1(cliente: Cliente): void {
        this.listaClientes.push(cliente);  
      }*/ //Método alternativo para agregar Cliente a la sucursal.
  
      public modificarCliente(): void {
  
      }

      public eliminarCliente(id: number, nombre: string): void {
        const index = this.listaClientes.findIndex(cliente => cliente.id === id);
        
        if (index !== -1) {
          this.listaClientes.splice(index, 1); // Elimina 1 cliente en el índice encontrado
          console.log(`Cliente ${nombre} se ha eliminado exitosamente.`);
        } else {
          console.log(`Cliente ${nombre} no encontrado en la lista de Clientes de la Sucursal.`);
        }
      }
}
