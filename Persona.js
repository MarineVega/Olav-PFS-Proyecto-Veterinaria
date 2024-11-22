"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(id, nombre, direccion, telefono, documento) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.documento = documento;
    }
    Persona.prototype.getId = function () {
        return this.id;
    };
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setId = function (id) {
        this.id = id;
    };
    Persona.prototype.setNombre = function (nombre) {
        if (nombre != undefined) {
            this.nombre = nombre;
        }
        else {
            console.log("Error! Nombre de Persona no definido ".concat(nombre)); // Acá para mostrar el error podriamos usar algo de lo que enseñó Karen?       
        }
    };
    Persona.prototype.getDireccion = function () {
        return this.direccion;
    };
    Persona.prototype.setDireccion = function (direccion) {
        if (direccion != undefined) {
            this.direccion = direccion;
        }
        else {
            console.log("Error! Direcci\u00F3n de Persona no definido ".concat(direccion));
        }
    };
    Persona.prototype.getTelefono = function () {
        return this.telefono;
    };
    Persona.prototype.setTelefono = function (telefono) {
        if (telefono != undefined && typeof telefono != "number") {
            this.telefono = telefono;
        }
        else {
            console.log("Error! Tel\u00E9fono no v\u00E1lido ".concat(telefono));
        }
    };
    Persona.prototype.getDocumento = function () {
        return this.documento;
    };
    Persona.prototype.setDocumento = function (documento) {
        if (documento != undefined && typeof documento != "number" && documento < 1000000 && documento > 59999999) {
            this.documento = documento;
        }
        else {
            console.log("Error! Documento no v\u00E1lido ".concat(documento));
        }
    };
    return Persona;
}());
exports.Persona = Persona;
