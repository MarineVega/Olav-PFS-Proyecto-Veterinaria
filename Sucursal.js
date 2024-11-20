"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sucursal = void 0;
var Cliente_1 = require("./Cliente");
var Sucursal = /** @class */ (function () {
    function Sucursal(id, responsable, direccion, localidad, condicionVip) {
        this.id = id;
        this.responsable = responsable;
        this.direccion = direccion;
        this.localidad = localidad;
        this.condicionVip = condicionVip;
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
    Sucursal.prototype.getCondicionVip = function () {
        return this.condicionVip;
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
    Sucursal.prototype.setCondicionVip = function (condicionVip) {
        this.condicionVip = condicionVip;
    };
    /*public setListaClientes(listaClientes: Cliente[]): void {
        this.listaClientes = listaClientes;
    }

    public setListaProveedores(listaProveedores: Proveedor[]): void {
        this.listaProveedores = listaProveedores;
    }*/ // NO ESTOY SEGURA QUE DEBAMOS DEJAR ESTOS SET 
    Sucursal.prototype.mostrarDatosSucursal = function () {
        return "Sucursal Veterinaria (ID ".concat(this.id, ") Responsable: ").concat(this.responsable, "\n Direcci\u00F3n: ").concat(this.direccion, "\n Localidad: ").concat(this.localidad, "\n Condici\u00F3n VIP: ").concat(this.condicionVip, "\n Lista Clientes: ").concat(this.getListaClientes(), "\n Lista Proveedores: ").concat(this.getListaProveedores(), ".");
    };
    /*public mostrarDatosSucursal(): string {
        return `Sucursal Veterinaria (id ${this.getId()}) Responsable: ${this.getResponsable()}\n Dirección: ${this.getDireccion()}\n Localidad: ${this.getLocalidad()}\n Condición VIP: ${this.getCondicionVip()}\n Lista Clientes: ${this.getListaClientes()}\n Lista Proveedores: ${this.getListaProveedores()} .`
    }*/ // Es esta la manera en la que se aplica la buena práctica de utilizar el this.get para obtener los datos de la sucursal?
    Sucursal.prototype.agregarProveedor = function (proveedor) {
        this.listaProveedores.push(proveedor);
    };
    Sucursal.prototype.modificarProveedor = function () {
    };
    Sucursal.prototype.eliminarProveedor = function (id) {
        var _this = this;
        var index = this.listaProveedores.findIndex(function (proveedor) { return proveedor.id === _this.id; });
        if (index !== -1) {
            this.listaProveedores.splice(index, 1); // Elimina el proveedor del arreglo listaProveedores
            return true; // Si se elimina correctamnete del arreglo listaProveedores
        }
        else {
            return false; // Si no se encuentra un proveedor con el ID especificado
        }
    };
    Sucursal.prototype.agregarCliente = function (id, nombre, direccion, telefono, documento) {
        var cliente = new Cliente_1.Cliente(id, nombre, direccion, telefono, documento);
        this.listaClientes.push(cliente);
    };
    /*public agregarCliente1(cliente: Cliente): void {
      this.listaClientes.push(cliente);
    }*/ //Método alternativo para agregar Cliente a la sucursal.
    Sucursal.prototype.modificarCliente = function () {
    };
    Sucursal.prototype.eliminarCliente = function (id, nombre) {
        var index = this.listaClientes.findIndex(function (cliente) { return cliente.id === id; });
        if (index !== -1) {
            this.listaClientes.splice(index, 1); // Elimina 1 cliente en el índice encontrado
            console.log("Cliente ".concat(nombre, " se ha eliminado exitosamente."));
        }
        else {
            console.log("Cliente ".concat(nombre, " no encontrado en la lista de Clientes de la Sucursal."));
        }
    };
    return Sucursal;
}());
exports.Sucursal = Sucursal;
