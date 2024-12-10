import { Persona } from "./Persona";
import { Paciente } from "./Paciente";


export class Cliente extends Persona {
    private visitas: number;
    private vip: boolean;
    private listaPacientes: Paciente[];
    private listaVisitas: {diagnostico: string }[] = [];//Nuevo
  

    constructor(id: number, nombre: string, direccion: string, telefono: number, documento: number) {
        super(id, nombre, direccion, telefono, documento);
        this.visitas = 0;
        this.vip = false;
        this.listaPacientes = [];
        this.listaVisitas = [];//nuevo
    }

    /*public getVisitas(): number {
        return this.visitas;
    }*/

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

    public getVisitas(): {diagnostico: string }[] {
        return this.listaVisitas;
      }// nuevo

    public setVisitas(visitas: number): void {
        this.visitas = visitas;
    }

    public setVip(vip: boolean): void {
        this.vip = vip;
    }

    public agregarPaciente(id: number, nombre: string, especie: string, sexo: string, fechaNacimiento: Date, observacion: string): void {
        if (!id || !nombre || !especie || !sexo || !fechaNacimiento) {
            console.log("\nError ❌: Todos los datos del Paciente deben estar completos para darlo de alta.\n");
            return;
        }
            
        const existePaciente = this.listaPacientes.some(paciente => paciente.getId() === id);
        if (existePaciente) {
            console.log(`\nError ❌: Ya existe un Paciente con ID ${id} en la lista.\n`);
            return;
        }
    
        const paciente = new Paciente(id, nombre, especie, sexo, fechaNacimiento, observacion);
        this.listaPacientes.push(paciente);
        console.log(`\nEl Paciente ${nombre} (🆔 ${id}) ha sido agregado correctamente ✔️\n`);
    }
    
   /* public registrarVisita(): void {
        this.visitas += 1;
        if (this.visitas >= 5 && !this.vip) {
            this.definirVIP();
        }
    }

    private definirVIP(): void {
        this.vip = true;
        console.log(`\nEl cliente ${this.nombre} es considerado VIP`);
    }
*/

   /* public registrarVisita(fecha: string, diagnostico: string): void {
        this.visitas += 1;
        this.listaVisitas.push({ fecha, diagnostico });

        if (this.visitas >= 5 && !this.vip) {
            this.definirVIP();
        }
    }
*/

public registrarVisita(diagnostico: string, pacienteId: number): void {
    this.visitas += 1;
    const paciente = this.listaPacientes.find(p => p.getId() === pacienteId);
    
    if (paciente) {
      console.log(`\nSe Registra la Visita del Paciente: ${paciente.getNombre()}}\n - Diagnóstico: ${diagnostico}`);
    } else {
      console.log(`\nNo se encontró un paciente con ID ${pacienteId}`);
    }

    if (this.visitas >= 2 && !this.vip) {
      this.definirVIP();
    }
  }

    private definirVIP(): void {
        this.vip = true;
        console.log(`\nEl cliente ${this.nombre} es considerado VIP`);
    }

    public modificarPaciente(id: number, nombre: string, especie: string, sexo: string, fechaNacimiento: Date, observacion: string): void {
        const paciente = this.listaPacientes.find(paciente => paciente.id == id);
        if (paciente) {
            paciente.setNombre(nombre);
            paciente.setEspecie(especie);
            paciente.setSexo(sexo);
            paciente.setFechaNacimiento(fechaNacimiento);
            paciente.setObservacion(observacion);
            console.log(`\nLos datos del Paciente ${nombre} han sido modificados Correctamente ✔️\n`)
        } else {
            console.log(`\nEl Paciente ${nombre} (${id}) no se ha encontrado en la lista de Pacientes de la Sucursal 🔎\n`);
        }
    }

    public eliminarPaciente(id: number): void {
        const index = this.listaPacientes.findIndex(paciente => paciente.id == id);

        if (index != -1) {
            const pacienteEliminado = this.listaPacientes[index]; // NO SALIA EL NOMBRE DEL PACIENTE ELIMINADO SINO EL DEL CLIENTE Y ESTABA MAL! YA SE CORRIGIO.
            this.listaPacientes.splice(index, 1);
            console.log(`\nEl Paciente ${pacienteEliminado.getNombre()} (${id}) ha sido eliminado de la lista de Pacientes de la Sucursal 🗑️`);
        } else {
            console.log(`\nEl Paciente con ID ${id} no ha sido encontrado en la lista de Pacientes de la Sucursal 🔎`);
        }
    }

    public mostrarDatos(): string {
        const pacientesInfo = this.listaPacientes.map(paciente => paciente.mostrarDatosPaciente()).join("\n");
        return `\nCliente (​​🆔​ ${this.getId()}) ${this.getNombre()}\nDirección: ${this.getDireccion()}\nTeléfono: ${this.getTelefono()}\nDocumento: ${this.getDocumento()}\nEs Vip: ${this.esVip()}\nPacientes:\n${pacientesInfo}`;
    }

    public mostrarListaPacientes(): string {
        const pacientesInfo = this.listaPacientes.map(paciente => paciente.mostrarDatosPaciente()).join("\n");
        return `\nPacientes:\n${pacientesInfo}`;
    }
}