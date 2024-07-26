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
exports.MembersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let MembersService = class MembersService {
    constructor(memberModel) {
        this.memberModel = memberModel;
    }
    async getMembers() {
        const members = await this.memberModel.find().exec();
        return members;
    }
    async createMember(CreateMemberDTO) {
        const newMember = new this.memberModel(CreateMemberDTO);
        const savedMember = await newMember.save();
        return savedMember;
    }
    ;
    async deleteMember(memberID) {
        const deletedMember = await this.memberModel.findOneAndDelete();
        return deletedMember;
    }
    ;
    async updateMember(memberID, CreateMemberDTO) {
        const updateMember = await this.memberModel.findByIdAndUpdate(memberID, CreateMemberDTO, { new: true });
        return updateMember;
    }
    ;
    async getMember(memberID) {
        const member = await this.memberModel.findById(memberID);
        return member;
    }
    ;
};
exports.MembersService = MembersService;
exports.MembersService = MembersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Members')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], MembersService);
//# sourceMappingURL=members.service.js.map