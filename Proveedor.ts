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
        return `Provedor (ID ${this.getId()}) ${this.getNombre()}\nDirección: ${this.getDireccion()}\nTeléfono: ${this.getTelefono()}\nDocumento: ${this.getDocumento()}\nRubro: ${this.getRubro()}\nC.U.I.T: ${this.getCUIT()}.`
    }
}