"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventoSchema = void 0;
const mongoose_1 = require("mongoose");
exports.EventoSchema = new mongoose_1.Schema({
    fecha: { type: Date, required: true },
    descripcion: { type: String, required: true },
    lugar: { type: String, required: true },
    tipo: { type: String, enum: ['concierto', 'cumpleaños', 'charla', 'master class'], required: true }
});
//# sourceMappingURL=eventos.schema.js.map