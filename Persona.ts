export abstract class Persona {
    protected id: number;
    protected nombre: string;
    protected direccion: string;
    protected telefono: number;
    protected documento: number;
    
    constructor (id: number, nombre: string, direccion: string, telefono: number, documento: number) {
        this.id = id;        
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.documento = documento;
    }
    
    abstract mostrarDatos(): string;

    public getId(): number {
        return this.id;
    }

    public getNombre(): string {
         return this.nombre;
    }

    public setId(id: number): void {
        this.id = id;        
    }

    public setNombre(nombre: string): void {
        if (nombre!=undefined) {
            this.nombre = nombre;
        } else {
            console.log(`Error! Nombre de Persona no definido ${nombre}`); // Acá para mostrar el error podriamos usar algo de lo que enseñó Karen?       
        }
    }

    public getDireccion(): string {
        return this.direccion;
    }

    public setDireccion(direccion: string): void {
        if (direccion!=undefined) {
            this.direccion = direccion;
        } else {
            console.log(`Error! Dirección de Persona no definido ${direccion}`);      
        }    
    }

    public getTelefono(): number {
        return this.telefono;
    }

    public setTelefono(telefono: number): void {
        if (telefono!=undefined && typeof telefono!= "number") {
            this.telefono = telefono;
        } else {
            console.log(`Error! Teléfono no válido ${telefono}`);      
        }     
    }

    public getDocumento(): number {
        return this.documento;
    }

    public setDocumento(documento: number): void {
        if (documento!=undefined && typeof documento!="number" && documento < 1000000 && documento > 59999999) {
            this.documento = documento;
        } else {
            console.log(`Error! Documento no válido ${documento}`);      
        }
    }    
}