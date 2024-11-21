export class Paciente {
    public id: number;
    private nombre: string;
    private especie: string;
    private sexo: string;
    private fechaNacimiento: number;
    private observacion: string;

    constructor(id: number, nombre: string, especie: string, sexo: string, fechaNacimiento: number, observacion: string) {
        this.id = id;
        this.nombre = nombre;
        this. especie = especie;
        this.sexo = sexo;
        this.fechaNacimiento = fechaNacimiento;
        this.observacion = observacion;
    }

    public getID(): number {
        return this.id;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getEspecie(): string {
        return this.especie;
    }

    public getSexo(): string {
        return this.sexo;
    }

    public getFechaNacimiento(): number {
        return this.fechaNacimiento;
    }

    public getObservacion(): string {
        return this.observacion;
    }

    public setID(id: number): void {
        this.id = id;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public setEspecie(especie: string): void {
        this.especie = especie;
    }
    
    public setSexo(sexo: string): void {
        this.sexo = sexo;
    }

    public setFechaNacimiento(fechaNacimiento: number): void {
        this.fechaNacimiento = fechaNacimiento;
    }

    public setObservacion(observacion: string): void {
        this.observacion = observacion;
    }

   
    public mostrarDatosPaciente(): string {
        return `Paciente (ID ${this.getID()}) ${this.getNombre()}\nEspecie: ${this.getEspecie()}\nSexo: ${this.getSexo()}\nFecha de Nacimiento: ${this.getFechaNacimiento()}\nObservación: ${this.getObservacion()}.`
    }   
}