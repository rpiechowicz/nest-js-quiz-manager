import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { User } from '../../user/entity/user.entity';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() request): Promise<{ access_token: string }> {
    return await this.authService.generateToken(request.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/user')
  async user(@Request() request): Promise<User> {
    return request.user;
  }
}
