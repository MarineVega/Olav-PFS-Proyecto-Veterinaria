import { Persona } from "./Persona";
import { Paciente } from "./Paciente";


export class Cliente extends Persona {
    private visitas: number;
    private vip: boolean;
    private listaPacientes: Paciente[];

    constructor(id: number, nombre: string, direccion: string, telefono: number, documento: number) {
        super(id, nombre, direccion, telefono, documento);
        this.visitas = 0;
        this.vip = false;
        this.listaPacientes = [];
    }

    public getVisitas(): number {
        return this.visitas;
    }

    public esVip(): string {
        if (this.vip) {
            return "Sí"
        } else {
            return "No"
        }
    }


    public getListaPacientes(): Paciente[] {
        return this.listaPacientes;
    }

    public agregarPaciente(id: number, nombre: string, especie: string, sexo: string, fechaNacimiento: Date, observacion: string): void {
        // Verificar que todos los datos están presentes
        if (!id || !nombre || !especie || !sexo || !fechaNacimiento) {
            console.log("Error: Todos los datos del paciente deben estar completos para darlo de alta.");
            return;
        }
            
        //Verificar que el paciente no exista ya en la lista
        const existePaciente = this.listaPacientes.some(paciente => paciente.getID() === id);
        if (existePaciente) {
            console.log(`Error: Ya existe un paciente con ID ${id} en la lista.`);
            return;
        }
    
        //  agregar el nuevo paciente
        const paciente = new Paciente(id, nombre, especie, sexo, fechaNacimiento, observacion);
        this.listaPacientes.push(paciente);
        console.log(`El paciente ${nombre} (ID ${id}) ha sido agregado correctamente.`);
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

    public modificarPaciente(id: number, nombre: string, especie: string, sexo: string, fechaNacimiento: Date, observacion: string): void {
        const paciente = this.listaPacientes.find(paciente => paciente.id == id);
        if (paciente) {
            paciente.setNombre(nombre);
            paciente.setEspecie(especie);
            paciente.setSexo(sexo);
            paciente.setFechaNacimiento(fechaNacimiento);
            paciente.setObservacion(observacion);
            console.log(`Los datos del Paciente ${nombre} han sido modificados Correctamente.`)
        } else {
            console.log(`El Paciente ${nombre} (${id}) no se ha encontrado en la lista de Pacientes de la Sucursal.`);
        }
    }

    public eliminarPaciente(id: number): void {
        const index = this.listaPacientes.findIndex(paciente => paciente.id == this.id);
        if (index != -1) {
            this.listaPacientes.splice(index, 1);
            console.log(`El Paciente ${this.getNombre()} (${id}) ha sido eliminado de la lista de Pacientes de la Sucursal.`)
        } else {
            console.log(`El Paciente ${this.getNombre()} (${id}) no ha sido encontado en la lista de Pacientes de la Sucursal.`)
        }
    }

    public mostrarDatos(): string {
        const pacientesInfo = this.listaPacientes.map(paciente => paciente.mostrarDatosPaciente()).join("\n");
        return `Cliente (ID ${this.getId()}) ${this.getNombre()}\nDirección: ${this.getDireccion()}\nTeléfono: ${this.getTelefono()}\nDocumento: ${this.getDocumento()}\nPacientes:\n${pacientesInfo}`;
    }
}