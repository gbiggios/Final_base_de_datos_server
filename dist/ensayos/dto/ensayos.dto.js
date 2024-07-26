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
exports.CreateAsistenciaDTO = exports.CreateEnsayoDTO = void 0;
const class_validator_1 = require("class-validator");
class CreateEnsayoDTO {
}
exports.CreateEnsayoDTO = CreateEnsayoDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], CreateEnsayoDTO.prototype, "fecha", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateEnsayoDTO.prototype, "objetivo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateEnsayoDTO.prototype, "tipo", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateEnsayoDTO.prototype, "repertorios", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateEnsayoDTO.prototype, "asistencia", void 0);
class CreateAsistenciaDTO {
}
exports.CreateAsistenciaDTO = CreateAsistenciaDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAsistenciaDTO.prototype, "miembroID", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], CreateAsistenciaDTO.prototype, "presente", void 0);
//# sourceMappingURL=ensayos.dto.js.map