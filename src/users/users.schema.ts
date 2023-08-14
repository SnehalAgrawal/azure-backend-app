import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from './entities/user.entity';

@Schema()
export class Users implements User {
  @Prop({ type: 'string' })
  name: string;

  @Prop({ type: 'number' })
  age: number;
}

export const UsersSchema = SchemaFactory.createForClass(Users);

export type UsersDocument = Users & mongoose.Document;
