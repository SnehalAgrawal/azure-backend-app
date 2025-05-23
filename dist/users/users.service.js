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
exports.UsersService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const users_schema_1 = require("./users.schema");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async create(createUserDto) {
        return await this.userModel.create({
            name: createUserDto.name,
            age: createUserDto.age,
        });
    }
    async findAll() {
        return await this.userModel.find();
    }
    async findOne(id) {
        return await this.userModel.findOne({
            _id: id,
        });
    }
    async update(id, updateUserDto) {
        const result = await this.userModel.updateMany({ _id: id }, { $set: Object.assign({}, updateUserDto) });
        if (result && ((result === null || result === void 0 ? void 0 : result.modifiedCount) > 0 || (result === null || result === void 0 ? void 0 : result.matchedCount) > 0)) {
            return result;
        }
        else {
            throw new common_1.NotFoundException('Unable to find user');
        }
    }
    async remove(id) {
        return await this.userModel.deleteOne({ _id: id });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(users_schema_1.Users.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map