import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

export enum UserRole {
  USER = 'USER',
  CREATOR = 'CREATOR',
  SELLER = 'SELLER',
  ADMIN = 'ADMIN',
}

@Schema({ timestamps: true })
export class User {
  // Account Identity

  @Prop({
    required: true,
    type: String,
    trim: true,
  })
  firstName: string;

  @Prop({
    required: true,
    type: String,
    trim: true,
  })
  lastName: string;

  @Prop({
    required: true,
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
  })
  email: string;

  @Prop({
    required: true,
    type: String,
  })
  password: string;

  @Prop({
    required: true,
    enum: UserRole,
    default: UserRole.USER,
  })
  role: UserRole;

  @Prop({
    required: true,
    type: String,
    trim: true,
  })
  phoneCountryCode: string;

  @Prop({
    required: true,
    type: String,
    trim: true,
    unique: true,
  })
  phoneNumber: string;

  // Profile - Secondary

  @Prop({
    required: false,
    type: String,
    default: null,
  })
  profileImgUrl: string | null;

  @Prop({
    required: false,
    type: String,
    default: null,
    trim: true,
  })
  state: string | null;

  @Prop({
    required: false,
    type: String,
    default: null,
    trim: true,
  })
  city: string | null;

  @Prop({
    required: false,
    type: String,
    default: null,
    trim: true,
  })
  address: string | null;

  // Account Security

  @Prop({
    required: false,
    type: Boolean,
    default: false,
  })
  isEmailVerified: boolean;

  @Prop({
    required: false,
    type: Date,
    default: null,
  })
  lastLogin: Date | null;

  @Prop({
    required: false,
    type: Number,
    default: 0,
  })
  numberOfLoginAttempts: number;

  @Prop({
    required: false,
    type: Date,
    default: null,
  })
  loginLockUntil: Date | null;

  @Prop({
    required: false,
    type: Boolean,
    default: false,
  })
  isDeleted: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
