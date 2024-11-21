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
exports.Proveedor = void 0;
var Persona_1 = require("./Persona");
var Proveedor = /** @class */ (function (_super) {
    __extends(Proveedor, _super);
    function Proveedor(id, nombre, direccion, telefono, documento, rubro, CUIT) {
        var _this = _super.call(this, id, nombre, direccion, telefono, documento) || this;
        _this.rubro = rubro;
        _this.CUIT = CUIT;
        return _this;
    }
    Proveedor.prototype.getRubro = function () {
        return this.rubro;
    };
    Proveedor.prototype.getCUIT = function () {
        return this.CUIT;
    };
    Proveedor.prototype.setRubro = function (rubro) {
        this.rubro = rubro;
    };
    Proveedor.prototype.setCUIT = function (CUIT) {
        this.CUIT = CUIT;
    };
    Proveedor.prototype.mostrarDatos = function () {
        return "Provedor (ID ".concat(this.id, ") ").concat(this.nombre, "\nDirecci\u00F3n: ").concat(this.direccion, "\nTel\u00E9fono: ").concat(this.telefono, "\nDocumento: ").concat(this.documento, "\nRubro: ").concat(this.rubro, "\nC.U.I.T: ").concat(this.CUIT, ".");
    };
    return Proveedor;
}(Persona_1.Persona));
exports.Proveedor = Proveedor;
