import { Controller, Body, Post } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { RegisterUserDTO } from './dto/register-user.dto.js';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() registerUserDTO: RegisterUserDTO) {
    return this.usersService.registerUser(registerUserDTO);
  }
}
