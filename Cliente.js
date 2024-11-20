"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var Persona_1 = require("./Persona");
var Paciente_1 = require("./Paciente");
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    //constructor  (id: number, nombre: string, direccion: string, telefono: number, documento: number, mascotas: Paciente) {
    function Cliente(id, nombre, direccion, telefono, documento) {
        var _this = _super.call(this, id, nombre, direccion, telefono, documento) || this;
        _this.visitas = 0;
        _this.vip = false;
        _this.listaMascotas = [];
        return _this;
    }
    Cliente.prototype.getVisitas = function () {
        return this.visitas;
    };
    Cliente.prototype.isVip = function () {
        return this.vip;
    };
    Cliente.prototype.getListaMascotas = function () {
        return this.listaMascotas;
    };
    Cliente.prototype.agregarMascota = function (ID, nombre, especie, sexo, fechaNacimiento, observacion) {
        var mascota = new Paciente_1.Paciente(ID, nombre, especie, sexo, fechaNacimiento, observacion);
        this.listaMascotas.push(mascota);
    };
    Cliente.prototype.setVisitas = function (visitas) {
        this.visitas = visitas;
    };
    Cliente.prototype.setVip = function (vip) {
        this.vip = vip;
    };
    Cliente.prototype.registrarVisita = function () {
        this.visitas += 1;
        if (this.visitas >= 5 && !this.vip) {
            this.definirVIP();
        }
    };
    Cliente.prototype.definirVIP = function () {
        this.vip = true;
        console.log("El cliente ".concat(this.nombre, " es considerado VIP"));
    };
    Cliente.prototype.agregarPaciente = function (paciente) {
        this.listaMascotas.push(paciente);
    };
    Cliente.prototype.modificarPaciente = function () {
    };
    Cliente.prototype.eliminarPaciente = function () {
    };
    Cliente.prototype.mostrarDatos = function () {
        return "Cliente (ID ".concat(this.id, ") ").concat(this.nombre, "\nDireci\u00F3n: ").concat(this.direccion, "\nTel\u00E9fono: ").concat(this.telefono, "\nDocumento: ").concat(this.documento, "\nMascotas: ").concat(this.listaMascotas, ".");
        //return `Cliente (ID ${this.ID}) ${this.nombre}\nDireción: ${this.direccion}\nTeléfono: ${this.telefono}\nDocumento: ${this.documento}.`
    };
    return Cliente;
}(Persona_1.Persona));
exports.Cliente = Cliente;
