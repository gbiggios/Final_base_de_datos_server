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
exports.MeetingSchema = exports.Meeting = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Meeting = class Meeting {
};
exports.Meeting = Meeting;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], Meeting.prototype, "fecha", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Meeting.prototype, "comite", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Meeting.prototype, "acta", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], Meeting.prototype, "temas_discutidos", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: [{ miembroID: String, presente: Boolean }] }),
    __metadata("design:type", Array)
], Meeting.prototype, "participantes", void 0);
exports.Meeting = Meeting = __decorate([
    (0, mongoose_1.Schema)()
], Meeting);
exports.MeetingSchema = mongoose_1.SchemaFactory.createForClass(Meeting);
//# sourceMappingURL=meetings.schema.js.map