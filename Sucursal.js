"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sucursal = void 0;
var Cliente_1 = require("./Cliente");
var Sucursal = /** @class */ (function () {
    function Sucursal(id, responsable, direccion, localidad) {
        this.id = id;
        this.responsable = responsable;
        this.direccion = direccion;
        this.localidad = localidad;
        this.listaClientes = [];
        this.listaProveedores = [];
    }
    Sucursal.prototype.getId = function () {
        return this.id;
    };
    Sucursal.prototype.getResponsable = function () {
        return this.responsable;
    };
    Sucursal.prototype.getDireccion = function () {
        return this.direccion;
    };
    Sucursal.prototype.getLocalidad = function () {
        return this.localidad;
    };
    Sucursal.prototype.getListaClientes = function () {
        return this.listaClientes;
    };
    Sucursal.prototype.getListaProveedores = function () {
        return this.listaProveedores;
    };
    Sucursal.prototype.setId = function (id) {
        this.id = id;
    };
    Sucursal.prototype.setResponsable = function (responsable) {
        this.responsable = responsable;
    };
    Sucursal.prototype.setDireccion = function (direccion) {
        this.direccion = direccion;
    };
    Sucursal.prototype.setLocalidad = function (localidad) {
        this.localidad = localidad;
    };
    Sucursal.prototype.mostrarDatosSucursal = function () {
        return "Sucursal Veterinaria (id ".concat(this.getId(), ") Responsable: ").concat(this.getResponsable(), "\n Direcci\u00F3n: ").concat(this.getDireccion(), "\n Localidad: ").concat(this.getLocalidad(), "\n Lista Clientes: ").concat(this.getListaClientes(), "\n Lista Proveedores: ").concat(this.getListaProveedores(), " .");
    };
    Sucursal.prototype.agregarProveedor = function (proveedor) {
        this.listaProveedores.push(proveedor);
    };
    Sucursal.prototype.modificarProveedor = function (id, nombre, direccion, telefono, documento, rubro, CUIT) {
        var persona = this.listaProveedores.find(function (persona) { return persona.id == id; });
        if (persona) {
            persona.setNombre(nombre);
            persona.setDireccion(direccion);
            persona.setTelefono(telefono);
            persona.setDocumento(documento);
            persona.setRubro(rubro);
            persona.setCUIT(CUIT);
            console.log("Los datos del Proveedor ".concat(nombre, " han sido modificados Correctamente."));
        }
        else {
            console.log("El Proveedor ".concat(nombre, " (").concat(id, ") no se ha encontrado en la lista de Proveedores de la Sucursal."));
        }
    };
    Sucursal.prototype.eliminarProveedor = function (id, nombre) {
        var _this = this;
        var index = this.listaProveedores.findIndex(function (proveedor) { return proveedor.id == _this.id; });
        if (index != -1) {
            this.listaProveedores.splice(index, 1);
            console.log("El Provedor ".concat(nombre, " (").concat(id, ") ha sido eliminado de la lista de Provedores de la Sucursal."));
        }
        else {
            console.log("El Provedor ".concat(nombre, " (").concat(id, ") no ha sido encontrado en la lista de Provedores de la Sucursal."));
        }
    };
    Sucursal.prototype.agregarCliente = function (id, nombre, direccion, telefono, documento) {
        var cliente = new Cliente_1.Cliente(id, nombre, direccion, telefono, documento);
        this.listaClientes.push(cliente);
    };
    Sucursal.prototype.modificarCliente = function (id, nombre, direccion, telefono, documento) {
        var persona = this.listaClientes.find(function (persona) { return persona.id == id; });
        if (persona) {
            persona.setNombre(nombre);
            persona.setDireccion(direccion);
            persona.setTelefono(telefono);
            persona.setDocumento(documento);
            console.log("Los datos del Cliente ".concat(nombre, " han sido modificados Correctamente."));
        }
        else {
            console.log("El Cliente ".concat(nombre, " (").concat(id, ") no se ha encontrado en la lista de Clientes de la Sucursal."));
        }
    };
    Sucursal.prototype.eliminarCliente = function (id, nombre) {
        var index = this.listaClientes.findIndex(function (cliente) { return cliente.id == id; });
        if (index != -1) {
            this.listaClientes.splice(index, 1);
            console.log("El Cliente ".concat(nombre, " se ha eliminado correctamente de la lista de Clientes de la Sucursal."));
        }
        else {
            console.log("El Cliente ".concat(nombre, " no ha sido encontrado en la lista de Clientes de la Sucursal."));
        }
    };
    return Sucursal;
}());
exports.Sucursal = Sucursal;
