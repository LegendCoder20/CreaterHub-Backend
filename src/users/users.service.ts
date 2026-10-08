import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { RegisterUserDTO } from './dto/register-user.dto.js';
import { User, UserDocument } from './schemas/user.schema.js';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly User: Model<UserDocument>,
  ) {}

  async registerUser(registerUserDTO: RegisterUserDTO) {
    return this.User.create(registerUserDTO);
  }
}
