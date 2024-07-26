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
exports.MeetingService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const meetings_schema_1 = require("./schemas/meetings.schema");
let MeetingService = class MeetingService {
    constructor(meetingModel) {
        this.meetingModel = meetingModel;
    }
    async createMeeting(createMeetingDto) {
        const newMeeting = new this.meetingModel(createMeetingDto);
        return newMeeting.save();
    }
    async getAllMeetings() {
        return this.meetingModel.find().exec();
    }
    async getMeetingById(id) {
        const meeting = await this.meetingModel.findById(id).exec();
        if (!meeting) {
            throw new common_1.NotFoundException(`Meeting with ID ${id} not found`);
        }
        return meeting;
    }
    async deleteMeeting(id) {
        const deletedMeeting = await this.meetingModel.findByIdAndDelete(id).exec();
        if (!deletedMeeting) {
            throw new common_1.NotFoundException(`Meeting with ID ${id} not found`);
        }
        return deletedMeeting;
    }
    async updateMeeting(id, updateMeetingDto) {
        const updatedMeeting = await this.meetingModel.findByIdAndUpdate(id, updateMeetingDto, { new: true }).exec();
        if (!updatedMeeting) {
            throw new common_1.NotFoundException(`Meeting with ID ${id} not found`);
        }
        return updatedMeeting;
    }
    async getMeetingsByMember(memberID) {
        return this.meetingModel.find({ 'participantes.miembroID': memberID }).exec();
    }
};
exports.MeetingService = MeetingService;
exports.MeetingService = MeetingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(meetings_schema_1.Meeting.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MeetingService);
//# sourceMappingURL=meetings.service.js.map