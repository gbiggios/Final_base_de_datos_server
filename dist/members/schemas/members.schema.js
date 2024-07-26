"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberSchema = void 0;
const mongoose_1 = require("mongoose");
exports.MemberSchema = new mongoose_1.Schema({
    rut: { type: String, required: true },
    nombre: String,
    apellidoPaterno: String,
    apellidoMaterno: String,
    instrumento: String,
    correo: String,
    contacto: String,
    tipoUsuario: String,
    comite: String,
    activo: Boolean,
    createdAt: { type: Date, default: Date.now }
});
//# sourceMappingURL=members.schema.js.map