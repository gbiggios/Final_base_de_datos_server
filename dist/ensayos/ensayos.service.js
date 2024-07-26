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
exports.EnsayosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let EnsayosService = class EnsayosService {
    constructor(ensayoModel) {
        this.ensayoModel = ensayoModel;
    }
    async createEnsayo(createEnsayoDTO) {
        const ensayo = new this.ensayoModel(createEnsayoDTO);
        return await ensayo.save();
    }
    async getEnsayos() {
        return await this.ensayoModel.find().populate('repertorios').exec();
    }
    async getEnsayo(id) {
        const ensayo = await this.ensayoModel.findById(id).populate('repertorios').exec();
        if (!ensayo)
            throw new common_1.NotFoundException('Ensayo no encontrado');
        return ensayo;
    }
    async updateEnsayo(id, createEnsayoDTO) {
        const ensayo = await this.ensayoModel.findByIdAndUpdate(id, createEnsayoDTO, { new: true }).exec();
        if (!ensayo)
            throw new common_1.NotFoundException('Ensayo no encontrado');
        return ensayo;
    }
    async deleteEnsayo(id) {
        const ensayo = await this.ensayoModel.findByIdAndDelete(id).exec();
        if (!ensayo)
            throw new common_1.NotFoundException('Ensayo no encontrado');
        return ensayo;
    }
    async updateAsistencia(id, asistencia) {
        const ensayo = await this.ensayoModel.findById(id).exec();
        if (!ensayo)
            throw new common_1.NotFoundException('Ensayo no encontrado');
        ensayo.asistencia = asistencia;
        return await ensayo.save();
    }
    async getEnsayosByMember(memberID) {
        return this.ensayoModel.find({ 'asistencia.miembroID': memberID }).exec();
    }
    async getAttendancePercentage() {
        const attendanceStats = await this.ensayoModel.aggregate([
            {
                '$unwind': '$asistencia'
            }, {
                '$group': {
                    '_id': '$asistencia.miembroID',
                    'presentCount': {
                        '$sum': {
                            '$cond': [
                                '$asistencia.presente', 1, 0
                            ]
                        }
                    },
                    'totalCount': {
                        '$sum': 1
                    }
                }
            }, {
                '$lookup': {
                    'from': 'members',
                    'localField': '_id',
                    'foreignField': '_id',
                    'as': 'member'
                }
            }, {
                '$unwind': '$member'
            }, {
                '$project': {
                    '_id': 0,
                    'member': {
                        '$concat': [
                            '$member.nombre', ' ', '$member.apellidoPaterno', ' ', '$member.apellidoMaterno'
                        ]
                    },
                    'percentage': {
                        '$multiply': [
                            {
                                '$divide': [
                                    '$presentCount', '$totalCount'
                                ]
                            }, 100
                        ]
                    }
                }
            }
        ]).exec();
        return attendanceStats;
    }
};
exports.EnsayosService = EnsayosService;
exports.EnsayosService = EnsayosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Ensayo')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EnsayosService);
//# sourceMappingURL=ensayos.service.js.map