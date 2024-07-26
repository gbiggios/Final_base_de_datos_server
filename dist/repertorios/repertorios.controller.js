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
exports.RepertorioController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const repertorio_dto_1 = require("./dto/repertorio.dto");
const repertorios_service_1 = require("./repertorios.service");
const path_1 = require("path");
let RepertorioController = class RepertorioController {
    constructor(repertorioService) {
        this.repertorioService = repertorioService;
    }
    async createRepertorio(file, createRepertorioDTO, res) {
        try {
            createRepertorioDTO.instrumentos = JSON.parse(createRepertorioDTO.instrumentos);
            createRepertorioDTO.asignaciones = JSON.parse(createRepertorioDTO.asignaciones);
            const repertorioData = {
                ...createRepertorioDTO,
                partitura: file.filename
            };
            const repertorio = await this.repertorioService.createRepertorio(repertorioData);
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Repertorio creado correctamente',
                repertorio,
            });
        }
        catch (error) {
            console.error('Error al crear el repertorio:', error);
            return res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: 'Error al crear el repertorio',
                error: error.message
            });
        }
    }
    async getFile(filename, res) {
        const filePath = (0, path_1.join)(__dirname, '..', '..', 'uploads', filename);
        return res.sendFile(filePath);
    }
    async getRepertorios(res) {
        const repertorios = await this.repertorioService.getRepertorios();
        return res.status(common_1.HttpStatus.OK).json(repertorios);
    }
    async getRepertorio(res, id) {
        const repertorio = await this.repertorioService.getRepertorio(id);
        if (!repertorio)
            throw new common_1.NotFoundException('Repertorio no encontrado');
        return res.status(common_1.HttpStatus.OK).json(repertorio);
    }
    async updateRepertorio(res, id, createRepertorioDTO) {
        const repertorio = await this.repertorioService.updateRepertorio(id, createRepertorioDTO);
        if (!repertorio)
            throw new common_1.NotFoundException('Repertorio no encontrado');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Repertorio actualizado correctamente',
            repertorio,
        });
    }
    async deleteRepertorio(res, id) {
        const repertorio = await this.repertorioService.deleteRepertorio(id);
        if (!repertorio)
            throw new common_1.NotFoundException('Repertorio no encontrado');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Repertorio eliminado correctamente',
            repertorio,
        });
    }
    async getRepertoriosByMember(res, memberID) {
        const repertorios = await this.repertorioService.getRepertoriosByMember(memberID);
        return res.status(common_1.HttpStatus.OK).json({ repertorios });
    }
};
exports.RepertorioController = RepertorioController;
__decorate([
    (0, common_1.Post)('/create'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('partitura', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, cb) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
                const ext = (0, path_1.extname)(file.originalname);
                const filename = `${file.fieldname}-${uniqueSuffix}${ext}`;
                cb(null, filename);
            }
        })
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], RepertorioController.prototype, "createRepertorio", null);
__decorate([
    (0, common_1.Get)('/uploads/:filename'),
    __param(0, (0, common_1.Param)('filename')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], RepertorioController.prototype, "getFile", null);
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RepertorioController.prototype, "getRepertorios", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], RepertorioController.prototype, "getRepertorio", null);
__decorate([
    (0, common_1.Put)('/update/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, repertorio_dto_1.CreateRepertorioDTO]),
    __metadata("design:returntype", Promise)
], RepertorioController.prototype, "updateRepertorio", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], RepertorioController.prototype, "deleteRepertorio", null);
__decorate([
    (0, common_1.Get)('/by-member/:memberID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('memberID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], RepertorioController.prototype, "getRepertoriosByMember", null);
exports.RepertorioController = RepertorioController = __decorate([
    (0, common_1.Controller)('repertorios'),
    __metadata("design:paramtypes", [repertorios_service_1.RepertorioService])
], RepertorioController);
//# sourceMappingURL=repertorios.controller.js.map