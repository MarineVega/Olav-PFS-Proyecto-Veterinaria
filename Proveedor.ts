import { Persona } from "./Persona";

export class Proveedor extends Persona {
    private rubro: string;
    private CUIT: number;

    constructor(id: number, nombre: string, direccion: string, telefono: number, documento: number, rubro: string, CUIT: number) {
        super(id, nombre, direccion, telefono, documento);
        this.rubro = rubro;
        this.CUIT = CUIT;
    }

    public getRubro(): string {
        return this.rubro;
    }

    public getCUIT(): number {
        return this.CUIT;
    }

    public setRubro(rubro: string): void {
        this.rubro = rubro;
    }

    public setCUIT(CUIT: number): void {
        this.CUIT = CUIT;
    }

    public mostrarDatos(): string {
        return `Provedor (id ${this.id}) Nombre: ${this.nombre}\n Dirección: ${this.direccion}\n Teléfono: ${this.telefono}\n Documento: ${this.documento}\n Rubro: ${this.rubro}\n C.U.I.T: ${this.CUIT}.`
    }
    
    /*public mostrarDatos1(): string {
        return `Provedor (id ${this.getId()}) Nombre: ${this.getNombre()}\n Dirección: ${this.getDireccion()}\n Teléfono: ${this.getTelefono()}\n Documento: ${this.getDocumento()}\n Rubro: ${this.getRubro()}\n C.U.I.T: ${this.getCUIT()}.`
    }*/
}