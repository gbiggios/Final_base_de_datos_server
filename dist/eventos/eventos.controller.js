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
exports.EventosController = void 0;
const common_1 = require("@nestjs/common");
const eventos_service_1 = require("./eventos.service");
const eventos_dto_1 = require("./dto/eventos.dto");
let EventosController = class EventosController {
    constructor(eventoService) {
        this.eventoService = eventoService;
    }
    async createEvento(res, createEventoDTO) {
        const evento = await this.eventoService.createEvento(createEventoDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Evento creado correctamente',
            evento
        });
    }
    async getEventos(res) {
        const eventos = await this.eventoService.getEventos();
        return res.status(common_1.HttpStatus.OK).json({
            eventos
        });
    }
    async getEvento(res, eventoID) {
        const evento = await this.eventoService.getEvento(eventoID);
        if (!evento)
            throw new common_1.NotFoundException('Evento no encontrado');
        return res.status(common_1.HttpStatus.OK).json(evento);
    }
    async deleteEvento(res, eventoID) {
        const deletedEvento = await this.eventoService.deleteEvento(eventoID);
        if (!deletedEvento)
            throw new common_1.NotFoundException('Evento no encontrado');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Evento eliminado correctamente',
            deletedEvento
        });
    }
    async updateEvento(res, CreateEventoDTO, eventoID) {
        const updatedEvento = await this.eventoService.updateEvento(eventoID, CreateEventoDTO);
        if (!updatedEvento)
            throw new common_1.NotFoundException('Evento no encontrado');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Evento actualizado correctamente',
            updatedEvento
        });
    }
    async getEventosByMember(res, memberID) {
        const eventos = await this.eventoService.getEventosByMember(memberID);
        return res.status(common_1.HttpStatus.OK).json({ eventos });
    }
};
exports.EventosController = EventosController;
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, eventos_dto_1.CreateEventoDTO]),
    __metadata("design:returntype", Promise)
], EventosController.prototype, "createEvento", null);
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EventosController.prototype, "getEventos", null);
__decorate([
    (0, common_1.Get)('/:eventoID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('eventoID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], EventosController.prototype, "getEvento", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('eventoID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], EventosController.prototype, "deleteEvento", null);
__decorate([
    (0, common_1.Put)('/update'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)('eventoID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, eventos_dto_1.CreateEventoDTO, Object]),
    __metadata("design:returntype", Promise)
], EventosController.prototype, "updateEvento", null);
__decorate([
    (0, common_1.Get)('/by-member/:memberID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('memberID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], EventosController.prototype, "getEventosByMember", null);
exports.EventosController = EventosController = __decorate([
    (0, common_1.Controller)('eventos'),
    __metadata("design:paramtypes", [eventos_service_1.EventosService])
], EventosController);
//# sourceMappingURL=eventos.controller.js.map