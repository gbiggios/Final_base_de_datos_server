"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepertorioSchema = exports.Repertorio = exports.InstrumentoAsignadoSchema = exports.InstrumentoAsignado = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let InstrumentoAsignado = class InstrumentoAsignado {
};
exports.InstrumentoAsignado = InstrumentoAsignado;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], InstrumentoAsignado.prototype, "instrumento", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], InstrumentoAsignado.prototype, "miembro", void 0);
exports.InstrumentoAsignado = InstrumentoAsignado = __decorate([
    (0, mongoose_1.Schema)()
], InstrumentoAsignado);
exports.InstrumentoAsignadoSchema = mongoose_1.SchemaFactory.createForClass(InstrumentoAsignado);
let Repertorio = class Repertorio {
};
exports.Repertorio = Repertorio;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Repertorio.prototype, "nombre", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Repertorio.prototype, "compositor", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Boolean)
], Repertorio.prototype, "existenciaPartitura", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: [String] }),
    __metadata("design:type", Array)
], Repertorio.prototype, "instrumentos", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Repertorio.prototype, "tipo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [exports.InstrumentoAsignadoSchema], default: [] }),
    __metadata("design:type", Array)
], Repertorio.prototype, "asignaciones", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Repertorio.prototype, "partitura", void 0);
exports.Repertorio = Repertorio = __decorate([
    (0, mongoose_1.Schema)()
], Repertorio);
exports.RepertorioSchema = mongoose_1.SchemaFactory.createForClass(Repertorio);
//# sourceMappingURL=repertorio.schema.js.map