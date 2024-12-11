
export class Paciente {
    public id: number;
    public nombre: string;
    private especie: string;
    private sexo: string;
    private fechaNacimiento: Date;
    private observacion: string;

    constructor(id: number, nombre: string, especie: string, sexo: string, fechaNacimiento: Date, observacion: string) {
        this.id = id;
        this.nombre = nombre;
        this. especie = especie;
        this.sexo = sexo;
        this.fechaNacimiento = fechaNacimiento;
        this.observacion = observacion;
    }

    public getId(): number {
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

    public getFechaNacimiento(): Date {
        return this.fechaNacimiento;
    }

    public getObservacion(): string {
        return this.observacion;
    }

    public setId(id: number): void {
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

    public setFechaNacimiento(fechaNacimiento: Date): void {
        this.fechaNacimiento = fechaNacimiento;
    }

    public setObservacion(observacion: string): void {
        this.observacion = observacion;
    }
          
    public mostrarDatosPaciente(): string {        
        return `\nPaciente (🆔 ${this.getId()}) ${this.getNombre()}\n   Especie: ${this.getEspecie()}\n   Sexo: ${this.getSexo()}\n   Fecha de Nacimiento: ${this.getFechaNacimiento().toLocaleDateString()}\n   Observación: ${this.getObservacion()}.`
    }   


    

 }



