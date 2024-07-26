"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnsayosModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const ensayos_controller_1 = require("./ensayos.controller");
const ensayos_service_1 = require("./ensayos.service");
const ensayos_schemas_1 = require("./schemas/ensayos.schemas");
const members_module_1 = require("../members/members.module");
let EnsayosModule = class EnsayosModule {
};
exports.EnsayosModule = EnsayosModule;
exports.EnsayosModule = EnsayosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Ensayo', schema: ensayos_schemas_1.EnsayoSchema },
            ]),
            members_module_1.MembersModule
        ],
        controllers: [ensayos_controller_1.EnsayosController],
        providers: [ensayos_service_1.EnsayosService],
        exports: [ensayos_service_1.EnsayosService],
    })
], EnsayosModule);
//# sourceMappingURL=ensayos.module.js.map