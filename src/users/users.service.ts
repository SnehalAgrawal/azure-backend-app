import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from './users.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users.name) private userModel: Model<Users>) {}

  async create(createUserDto: CreateUserDto) {
    return await this.userModel.create<Users>({
      name: createUserDto.name,
      age: createUserDto.age,
    });
  }

  async findAll() {
    return await this.userModel.find<UsersDocument>();
  }

  async findOne(id: string) {
    return await this.userModel.findOne<UsersDocument>({
      _id: id,
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const result = await this.userModel.updateMany<UsersDocument>(
      { _id: id },
      { $set: { ...updateUserDto } },
    );
    if (result && (result?.modifiedCount > 0 || result?.matchedCount > 0)) {
      return result;
    } else {
      throw new NotFoundException('Unable to find user');
    }
  }

  async remove(id: string) {
    return await this.userModel.deleteOne({ _id: id });
  }
}
