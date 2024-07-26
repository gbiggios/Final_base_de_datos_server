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
exports.MeetingsController = void 0;
const common_1 = require("@nestjs/common");
const meetings_dto_1 = require("./dto/meetings.dto");
const meetings_service_1 = require("./meetings.service");
let MeetingsController = class MeetingsController {
    constructor(meetingService) {
        this.meetingService = meetingService;
    }
    async createMeeting(res, createMeetingDto) {
        try {
            const meeting = await this.meetingService.createMeeting(createMeetingDto);
            return res.status(common_1.HttpStatus.CREATED).json({
                message: 'Meeting created successfully',
                meeting
            });
        }
        catch (error) {
            return res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: 'Error creating meeting',
                error: error.message
            });
        }
    }
    async getMeetings(res) {
        try {
            const meetings = await this.meetingService.getAllMeetings();
            return res.status(common_1.HttpStatus.OK).json({
                meetings
            });
        }
        catch (error) {
            return res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: 'Error fetching meetings',
                error: error.message
            });
        }
    }
    async getMeeting(res, id) {
        try {
            const meeting = await this.meetingService.getMeetingById(id);
            if (!meeting)
                throw new common_1.NotFoundException('Meeting not found');
            return res.status(common_1.HttpStatus.OK).json(meeting);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: 'Error fetching meeting',
                error: error.message
            });
        }
    }
    async deleteMeeting(res, id) {
        try {
            const deletedMeeting = await this.meetingService.deleteMeeting(id);
            if (!deletedMeeting)
                throw new common_1.NotFoundException('Meeting not found');
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Meeting deleted successfully',
                deletedMeeting
            });
        }
        catch (error) {
            return res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: 'Error deleting meeting',
                error: error.message
            });
        }
    }
    async updateMeeting(res, updateMeetingDto, id) {
        try {
            const updatedMeeting = await this.meetingService.updateMeeting(id, updateMeetingDto);
            if (!updatedMeeting)
                throw new common_1.NotFoundException('Meeting not found');
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Meeting updated successfully',
                updatedMeeting
            });
        }
        catch (error) {
            return res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: 'Error updating meeting',
                error: error.message
            });
        }
    }
    async getMeetingsByMember(res, memberID) {
        try {
            const meetings = await this.meetingService.getMeetingsByMember(memberID);
            return res.status(common_1.HttpStatus.OK).json({
                meetings
            });
        }
        catch (error) {
            return res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: 'Error fetching meetings by member',
                error: error.message
            });
        }
    }
};
exports.MeetingsController = MeetingsController;
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, meetings_dto_1.CreateMeetingDto]),
    __metadata("design:returntype", Promise)
], MeetingsController.prototype, "createMeeting", null);
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MeetingsController.prototype, "getMeetings", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], MeetingsController.prototype, "getMeeting", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], MeetingsController.prototype, "deleteMeeting", null);
__decorate([
    (0, common_1.Put)('/update/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String]),
    __metadata("design:returntype", Promise)
], MeetingsController.prototype, "updateMeeting", null);
__decorate([
    (0, common_1.Get)('/by-member/:memberID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('memberID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], MeetingsController.prototype, "getMeetingsByMember", null);
exports.MeetingsController = MeetingsController = __decorate([
    (0, common_1.Controller)('meetings'),
    __metadata("design:paramtypes", [meetings_service_1.MeetingService])
], MeetingsController);
//# sourceMappingURL=meetings.controller.js.map