import { Persona } from "./Persona";
import { Paciente } from "./Paciente";
export class Cliente extends Persona {
    private visitas: number;
    private vip: boolean;
    private listaMascotas: Paciente[];
    
    //constructor  (id: number, nombre: string, direccion: string, telefono: number, documento: number, mascotas: Paciente) {
    constructor  (id: number, nombre: string, direccion: string, telefono: number, documento: number) {
        super(id, nombre, direccion, telefono, documento);
        this.visitas = 0;
        this.vip = false;
        this.listaMascotas = [];
    }

    public getVisitas(): number {
        return this.visitas;
    }

    public isVip(): boolean {
        return this.vip;
    }

    public getListaMascotas(): Paciente[] {
        return this.listaMascotas;
    }

    public agregarMascota(ID: number, nombre: string, especie: string, sexo: string, fechaNacimiento: number, observacion: string): void {
        const mascota: Paciente = new Paciente (ID,nombre,especie,sexo,fechaNacimiento,observacion);
        this.listaMascotas.push(mascota);
    }

    public setVisitas(visitas: number): void {
        this.visitas = visitas;
    }

    public setVip(vip: boolean): void {
        this.vip = vip;
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

    public agregarPaciente(paciente: Paciente): void { // Este método se reemplazó por el método agregarMascota()?
      this.listaMascotas.push(paciente);
    }

    public modificarPaciente(): void {

    }

    public eliminarPaciente(): void {
        
    }

    mostrarDatos(): string {
        return `Cliente (ID ${this.id}) ${this.nombre}\nDireción: ${this.direccion}\nTeléfono: ${this.telefono}\nDocumento: ${this.documento}\nMascotas: ${this.listaMascotas}.`
        //return `Cliente (ID ${this.ID}) ${this.nombre}\nDireción: ${this.direccion}\nTeléfono: ${this.telefono}\nDocumento: ${this.documento}.`
    }

    /*mostrarDatos(): string {
        return `Cliente (id ${this.getId()}) ${this.nombre}\nDireción: ${this.getDireccion()}\nTeléfono: ${this.getTelefono()}\nDocumento: ${this.getDocumento()}\nMascotas: ${this.getMascotas()}.`
    }*/
}