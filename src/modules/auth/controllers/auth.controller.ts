import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { User } from '../../user/entity/user.entity';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';

import { UserResponse } from '../interface/User';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiCreatedResponse({ type: UserResponse })
  @ApiBadRequestResponse()
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() request): Promise<UserResponse> {
    return await this.authService.generateToken(request.user);
  }

  @ApiCreatedResponse({ type: User })
  @ApiBadRequestResponse()
  @UseGuards(JwtAuthGuard)
  @Get('/user')
  async user(@Request() request): Promise<User> {
    return request.user;
  }
}
