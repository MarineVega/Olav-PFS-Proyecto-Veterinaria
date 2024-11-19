"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
var Paciente = /** @class */ (function () {
    function Paciente(ID, nombre, especie, sexo, fechaNacimiento, observacion) {
        this.ID = ID;
        this.nombre = nombre;
        this.especie = especie;
        this.sexo = sexo;
        this.fechaNacimiento = fechaNacimiento;
        this.observacion = observacion;
    }
    Paciente.prototype.getID = function () {
        return this.ID;
    };
    Paciente.prototype.getNombre = function () {
        return this.nombre;
    };
    Paciente.prototype.getEspecie = function () {
        return this.especie;
    };
    Paciente.prototype.getSexo = function () {
        return this.sexo;
    };
    Paciente.prototype.getFechaNacimiento = function () {
        return this.fechaNacimiento;
    };
    Paciente.prototype.getObservacion = function () {
        return this.observacion;
    };
    Paciente.prototype.setID = function (ID) {
        this.ID = ID;
    };
    Paciente.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Paciente.prototype.setEspecie = function (especie) {
        this.especie = especie;
    };
    Paciente.prototype.setSexo = function (sexo) {
        this.sexo = sexo;
    };
    Paciente.prototype.setFechaNacimiento = function (fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    };
    Paciente.prototype.setObservacion = function (observacion) {
        this.observacion = observacion;
    };
    Paciente.prototype.mostrarDatosPaciente = function () {
        return "Paciente (ID ".concat(this.ID, ") ").concat(this.nombre, "\nEspecie: ").concat(this.especie, "\nSexo: ").concat(this.sexo, "\nFecha de Nacimiento: ").concat(this.fechaNacimiento, "\nObservaci\u00F3n: ").concat(this.observacion, ".");
    };
    return Paciente;
}());
exports.Paciente = Paciente;
