import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserRegisterDto } from '../dto/UserRegister.dto';
import { SETTINGS } from '../../../app.utils';
import { User } from '../entity/user.entity';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/register')
  async registerUser(
    @Body(SETTINGS.VALIDATION_PIPE)
    userRegister: UserRegisterDto,
  ): Promise<User> {
    return await this.userService.registerUser(userRegister);
  }
}
