import mongoose from 'mongoose';
import { User } from './entities/user.entity';
export declare class Users implements User {
    name: string;
    age: number;
}
export declare const UsersSchema: mongoose.Schema<Users, mongoose.Model<Users, any, any, any, mongoose.Document<unknown, any, Users> & Users & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Users, mongoose.Document<unknown, {}, Users> & Users & {
    _id: mongoose.Types.ObjectId;
}>;
export declare type UsersDocument = Users & mongoose.Document;
