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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnsayosController = void 0;
const common_1 = require("@nestjs/common");
const ensayos_dto_1 = require("./dto/ensayos.dto");
const ensayos_service_1 = require("./ensayos.service");
let EnsayosController = class EnsayosController {
    constructor(ensayosService) {
        this.ensayosService = ensayosService;
    }
    async createEnsayo(res, createEnsayoDTO) {
        const ensayo = await this.ensayosService.createEnsayo(createEnsayoDTO);
        return res.status(common_1.HttpStatus.OK).json(ensayo);
    }
    async getEnsayos(res) {
        const ensayos = await this.ensayosService.getEnsayos();
        return res.status(common_1.HttpStatus.OK).json(ensayos);
    }
    async getAttendancePercentage(res) {
        const attendanceStats = await this.ensayosService.getAttendancePercentage();
        return res.status(common_1.HttpStatus.OK).json(attendanceStats);
    }
    async getEnsayo(res, id) {
        const ensayo = await this.ensayosService.getEnsayo(id);
        if (!ensayo)
            throw new common_1.NotFoundException('Ensayo no encontrado');
        return res.status(common_1.HttpStatus.OK).json(ensayo);
    }
    async updateEnsayo(res, id, createEnsayoDTO) {
        const ensayo = await this.ensayosService.updateEnsayo(id, createEnsayoDTO);
        if (!ensayo)
            throw new common_1.NotFoundException('Ensayo no encontrado');
        return res.status(common_1.HttpStatus.OK).json(ensayo);
    }
    async updateAsistencia(res, id, asistencia) {
        const ensayo = await this.ensayosService.updateAsistencia(id, asistencia);
        if (!ensayo)
            throw new common_1.NotFoundException('Ensayo no encontrado');
        return res.status(common_1.HttpStatus.OK).json(ensayo);
    }
    async deleteEnsayo(res, id) {
        const ensayo = await this.ensayosService.deleteEnsayo(id);
        if (!ensayo)
            throw new common_1.NotFoundException('Ensayo no encontrado');
        return res.status(common_1.HttpStatus.OK).json(ensayo);
    }
    async getEnsayosByMember(res, memberID) {
        const ensayos = await this.ensayosService.getEnsayosByMember(memberID);
        return res.status(common_1.HttpStatus.OK).json({ ensayos });
    }
};
exports.EnsayosController = EnsayosController;
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ensayos_dto_1.CreateEnsayoDTO]),
    __metadata("design:returntype", Promise)
], EnsayosController.prototype, "createEnsayo", null);
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EnsayosController.prototype, "getEnsayos", null);
__decorate([
    (0, common_1.Get)('/attendance-percentage'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EnsayosController.prototype, "getAttendancePercentage", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], EnsayosController.prototype, "getEnsayo", null);
__decorate([
    (0, common_1.Put)('/update/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, ensayos_dto_1.CreateEnsayoDTO]),
    __metadata("design:returntype", Promise)
], EnsayosController.prototype, "updateEnsayo", null);
__decorate([
    (0, common_1.Put)('/updateAsistencia/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Array]),
    __metadata("design:returntype", Promise)
], EnsayosController.prototype, "updateAsistencia", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], EnsayosController.prototype, "deleteEnsayo", null);
__decorate([
    (0, common_1.Get)('/by-member/:memberID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('memberID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], EnsayosController.prototype, "getEnsayosByMember", null);
exports.EnsayosController = EnsayosController = __decorate([
    (0, common_1.Controller)('ensayos'),
    __metadata("design:paramtypes", [ensayos_service_1.EnsayosService])
], EnsayosController);
//# sourceMappingURL=ensayos.controller.js.map