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
exports.EventosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let EventosService = class EventosService {
    constructor(eventoModel) {
        this.eventoModel = eventoModel;
    }
    async createEvento(createEventoDTO) {
        const newEvento = new this.eventoModel(createEventoDTO);
        return await newEvento.save();
    }
    async getEventos() {
        return await this.eventoModel.find().exec();
    }
    async getEvento(eventoID) {
        const evento = await this.eventoModel.findById(eventoID).exec();
        if (!evento) {
            throw new common_1.NotFoundException('Evento no encontrado');
        }
        return evento;
    }
    async deleteEvento(eventoID) {
        const deletedEvento = await this.eventoModel.findByIdAndDelete(eventoID).exec();
        if (!deletedEvento) {
            throw new common_1.NotFoundException('Evento no encontrado');
        }
        return deletedEvento;
    }
    async updateEvento(eventoID, createEventoDTO) {
        const updatedEvento = await this.eventoModel.findByIdAndUpdate(eventoID, createEventoDTO, { new: true }).exec();
        if (!updatedEvento) {
            throw new common_1.NotFoundException('Evento no encontrado');
        }
        return updatedEvento;
    }
    async getEventosByMember(memberID) {
        return this.eventoModel.find({ memberID: memberID }).exec();
    }
};
exports.EventosService = EventosService;
exports.EventosService = EventosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Eventos')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], EventosService);
//# sourceMappingURL=eventos.service.js.map