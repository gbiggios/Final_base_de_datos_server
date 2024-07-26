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
exports.MembersController = void 0;
const common_1 = require("@nestjs/common");
const members_dto_1 = require("./dto/members.dto");
const members_service_1 = require("./members.service");
let MembersController = class MembersController {
    constructor(memberService) {
        this.memberService = memberService;
    }
    async createMember(res, createMemberDTO) {
        const member = await this.memberService.createMember(createMemberDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Miembro creado correctamente',
            member
        });
    }
    async getMembers(res) {
        const members = await this.memberService.getMembers();
        return res.status(common_1.HttpStatus.OK).json({
            members
        });
    }
    async getMember(res, memberID) {
        const member = await this.memberService.getMember(memberID);
        if (!member)
            throw new common_1.NotFoundException('Miembro no encontrado');
        return res.status(common_1.HttpStatus.OK).json(member);
    }
    async deleteMember(res, memberID) {
        const memberDeleted = await this.memberService.deleteMember(memberID);
        if (!memberDeleted)
            throw new common_1.NotFoundException('Miembro no encontrado');
        return res.status(common_1.HttpStatus.OK).json({
            messaje: "Miembro borrado correctamente",
            memberDeleted
        });
    }
    async updateMember(res, CreateMemberDTO, memberID) {
        const memberUpdated = await this.memberService.updateMember(memberID, CreateMemberDTO);
        if (!memberUpdated)
            throw new common_1.NotFoundException('Miembro no encontrado');
        return res.status(common_1.HttpStatus.OK).json({
            message: "Producto actualizado correctamente",
            memberUpdated
        });
    }
};
exports.MembersController = MembersController;
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, members_dto_1.CreateMemberDTO]),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "createMember", null);
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "getMembers", null);
__decorate([
    (0, common_1.Get)('/:memberID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('memberID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "getMember", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('memberID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "deleteMember", null);
__decorate([
    (0, common_1.Put)("update"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)('memberID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, members_dto_1.CreateMemberDTO, Object]),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "updateMember", null);
exports.MembersController = MembersController = __decorate([
    (0, common_1.Controller)('members'),
    __metadata("design:paramtypes", [members_service_1.MembersService])
], MembersController);
//# sourceMappingURL=members.controller.js.map