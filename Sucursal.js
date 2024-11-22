"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sucursal = void 0;
var Cliente_1 = require("./Cliente");
var Proveedor_1 = require("./Proveedor");
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
    /*public mostrarDatosSucursal(): string {
      return `Sucursal Veterinaria (id ${this.getId()}) Responsable: ${this.getResponsable()}\n Dirección: ${this.getDireccion()}\n Localidad: ${this.getLocalidad()}\n Lista Clientes: ${this.getListaClientes()}\n Lista Proveedores: ${this.getListaProveedores()} .`
    }*/
    Sucursal.prototype.mostrarDatosSucursal = function () {
        var clientes = this.listaClientes.map(function (cliente) { return cliente.mostrarDatos(); }).join(", ");
        var proveedores = this.listaProveedores.map(function (proveedor) { return proveedor.mostrarDatos(); }).join(", ");
        return "Sucursal Veterinaria (id ".concat(this.getId(), ") Responsable: ").concat(this.getResponsable(), "\n   Direcci\u00F3n: ").concat(this.getDireccion(), "\n   Localidad: ").concat(this.getLocalidad(), "\n   Lista Clientes: [").concat(clientes, "]\n   Lista Proveedores: [").concat(proveedores, "]");
    };
    // alta, baja  y modificacion de Proveedores
    Sucursal.prototype.agregarProveedor = function (datosProveedor) {
        var proveedorExistente = this.listaProveedores.find(function (proveedor) { return proveedor.getDocumento() === datosProveedor.documento; });
        if (proveedorExistente) {
            console.log("Error: El proveedor con documento ".concat(datosProveedor.documento, " ya existe."));
        }
        else {
            var nuevoProveedor = new Proveedor_1.Proveedor(datosProveedor.id, datosProveedor.nombre, datosProveedor.direccion, datosProveedor.telefono, datosProveedor.documento, datosProveedor.rubro, datosProveedor.CUIT);
            this.listaProveedores.push(nuevoProveedor);
            console.log("Proveedor con documento ".concat(datosProveedor.documento, " agregado correctamente."));
        }
    };
    Sucursal.prototype.modificarProveedor = function (datosProveedor) {
        var proveedorExistente = this.listaProveedores.find(function (proveedor) { return proveedor.getDocumento() === datosProveedor.documento; });
        if (proveedorExistente) {
            proveedorExistente.setNombre(datosProveedor.nombre);
            proveedorExistente.setDireccion(datosProveedor.direccion);
            proveedorExistente.setTelefono(datosProveedor.telefono);
            proveedorExistente.setRubro(datosProveedor.rubro);
            proveedorExistente.setCUIT(datosProveedor.CUIT);
            console.log("Proveedor con documento ".concat(datosProveedor.documento, " modificado correctamente."));
        }
        else {
            console.log("Error: No se encontr\u00F3 un proveedor con documento ".concat(datosProveedor.documento, "."));
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
    // alta, modificacion y eliminacion de Clientes
    Sucursal.prototype.agregarCliente = function (datosCliente) {
        var clienteExistente = this.listaClientes.find(function (cliente) { return cliente.getDocumento() === datosCliente.documento; });
        if (clienteExistente) {
            console.log("Error: El cliente con documento ".concat(datosCliente.documento, " ya existe."));
        }
        else {
            var nuevoCliente = new Cliente_1.Cliente(datosCliente.id, datosCliente.nombre, datosCliente.direccion, datosCliente.telefono, datosCliente.documento);
            this.listaClientes.push(nuevoCliente);
            console.log("Cliente con documento ".concat(datosCliente.documento, " agregado correctamente."));
        }
    };
    Sucursal.prototype.modificarCliente = function (datosCliente) {
        var clienteExistente = this.listaClientes.find(function (cliente) { return cliente.getDocumento() === datosCliente.documento; });
        if (clienteExistente) {
            clienteExistente.setNombre(datosCliente.nombre);
            clienteExistente.setDireccion(datosCliente.direccion);
            clienteExistente.setTelefono(datosCliente.telefono);
            console.log("Cliente con documento ".concat(datosCliente.documento, " modificado correctamente."));
        }
        else {
            console.log("Error: No se encontr\u00F3 un cliente con documento ".concat(datosCliente.documento, "."));
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
