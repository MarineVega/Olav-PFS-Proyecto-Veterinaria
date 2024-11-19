import { Persona } from "./Persona";
import { Paciente } from "./Paciente";
export class Cliente extends Persona {
    private visitas: number;
    private vip: boolean;
    private mascotas: Paciente;
    
    //constructor  (id: number, nombre: string, direccion: string, telefono: number, documento: number, mascotas: Paciente) {
    constructor  (id: number, nombre: string, direccion: string, telefono: number, documento: number) {
        super(id, nombre, direccion, telefono, documento);
        this.visitas = 0;
        this.vip = false;
       // this.mascotas = mascotas;
    }

    mostrarDatos(): string {
        return `Cliente (id ${this.id}) ${this.nombre}\nDireción: ${this.direccion}\nTeléfono: ${this.telefono}\nDocumento: ${this.documento}\nMascotas ${this.mascotas}`
    }

    public getVisitas(): number {
        return this.visitas;
    }
    public setVisitas(visitas: number): void {
        this.visitas = visitas;
    }
    public isVip(): boolean {
        return this.vip;
    }
    public setVip(vip: boolean): void {
        this.vip = vip;
    }
    public getMascotas(): Paciente {
        return this.mascotas;
    }
    public setMascotas(mascotas: Paciente): void {
        this.mascotas = mascotas;
    }

    public registrarVisita(): void {
        this.visitas += 1;
        if (this.visitas >= 5 && !this.vip) {
            this.definirVIP();
        }
    }

    private definirVIP(): void {
        this.vip = true;
        console.log(`El cliente ${this.nombre} es considerado VIP`);        
    }

    public agregarPaciente() {

    }

    public modificarPaciente() {

    }

    public eliminarPaciente() {
        
    }
}