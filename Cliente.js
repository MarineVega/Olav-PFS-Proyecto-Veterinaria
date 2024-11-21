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
    function Cliente(id, nombre, direccion, telefono, documento) {
        var _this = _super.call(this, id, nombre, direccion, telefono, documento) || this;
        _this.visitas = 0;
        _this.vip = false;
        _this.listaPacientes = [];
        return _this;
    }
    Cliente.prototype.getVisitas = function () {
        return this.visitas;
    };
    Cliente.prototype.isVip = function () {
        return this.vip;
    };
    Cliente.prototype.getListaPacientes = function () {
        return this.listaPacientes;
    };
    Cliente.prototype.agregarPaciente = function (id, nombre, especie, sexo, fechaNacimiento, observacion) {
        var paciente = new Paciente_1.Paciente(id, nombre, especie, sexo, fechaNacimiento, observacion);
        this.listaPacientes.push(paciente);
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
    Cliente.prototype.modificarPaciente = function (id, nombre, especie, sexo, fechaNacimiento, observacion) {
        var paciente = this.listaPacientes.find(function (paciente) { return paciente.id == id; });
        if (paciente) {
            paciente.setNombre(nombre);
            paciente.setEspecie(especie);
            paciente.setSexo(sexo);
            paciente.setFechaNacimiento(fechaNacimiento);
            paciente.setObservacion(observacion);
            console.log("Los datos del Paciente ".concat(nombre, " han sido modificados Correctamente."));
        }
        else {
            console.log("El Paciente ".concat(nombre, " (").concat(id, ") no se ha encontrado en la lista de Pacientes de la Sucursal."));
        }
    };
    Cliente.prototype.eliminarPaciente = function (id) {
        var _this = this;
        var index = this.listaPacientes.findIndex(function (paciente) { return paciente.id == _this.id; });
        if (index != -1) {
            this.listaPacientes.splice(index, 1);
            console.log("El Paciente ".concat(this.getNombre(), " (").concat(id, ") ha sido eliminado de la lista de Pacientes de la Sucursal."));
        }
        else {
            console.log("El Paciente ".concat(this.getNombre(), " (").concat(id, ") no ha sido encontado en la lista de Pacientes de la Sucursal."));
        }
    };
    Cliente.prototype.mostrarDatos = function () {
        var pacientesInfo = this.listaPacientes.map(function (paciente) { return paciente.mostrarDatosPaciente(); }).join("\n");
        return "Cliente (ID ".concat(this.getId(), ") ").concat(this.getNombre(), "\nDirecci\u00F3n: ").concat(this.getDireccion(), "\nTel\u00E9fono: ").concat(this.getTelefono(), "\nDocumento: ").concat(this.getDocumento(), "\nPacientes:\n").concat(pacientesInfo);
    };
    return Cliente;
}(Persona_1.Persona));
exports.Cliente = Cliente;
