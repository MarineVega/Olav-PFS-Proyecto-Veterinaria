
import { Persona } from "./Persona";
import { Cliente } from "./Cliente";
import { Proveedor } from "./Proveedor";


export default class Sucursal {
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

    
}
    
