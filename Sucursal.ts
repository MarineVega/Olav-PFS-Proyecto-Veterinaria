
import { Persona } from "./Persona";
import { Cliente } from "./Cliente";
import { Proveedor } from "./Proveedor";


export class Sucursal { // Qué significa que la clase Sucursal sea Default?
    private ID: number;
    private responsable: string;
    private direccion: string;
    private localidad: string;
    private condicionVip: number;
    private listaClientes: Cliente[];
    private listaProveedores: Proveedor[];

   
    constructor (ID: number, responsable: string, direccion: string, localidad: string, condicionVip: number) {
        this.ID = ID;
        this.responsable = responsable;
        this.direccion = direccion;
        this.localidad = localidad;
        this.condicionVip = condicionVip;
        this.listaClientes = [];
        this.listaProveedores = []           
    }

    public getId(): number {
        return this.ID;
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

    public setId(ID: number): void {
        this.ID = ID;
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
        return `Sucursal Veterinaria (ID ${this.ID}) Responsable: ${this.responsable}\n Dirección: ${this.direccion}\n Localidad: ${this.localidad}\n Condición VIP: ${this.condicionVip}\n Lista Clientes: ${this.getListaClientes()}\n Lista Proveedores: ${this.getListaProveedores()}.`
    }  
    
    /*public mostrarDatosSucursal(): string {
        return `Sucursal Veterinaria (id ${this.getId()}) Responsable: ${this.getResponsable()}\n Dirección: ${this.getDireccion()}\n Localidad: ${this.getLocalidad()}\n Condición VIP: ${this.getCondicionVip()}\n Lista Clientes: ${this.getListaClientes()}\n Lista Proveedores: ${this.getListaProveedores()} .`
    }*/ // Es esta la manera en la que se aplica la buena práctica de utilizar el this.get para obtener los datos de la sucursal?
    
    public agregarProveedor(): void {
    
    }

    public modificarProveedor(): void {

    }

    public eliminarProveedor(): void {

    }

    public agregarCliente(): void {
        
    }

    public modificarCliente(): void {

    }

    public eliminarCliente(): void {

    }
}
