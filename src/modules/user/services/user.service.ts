import { Injectable } from '@nestjs/common';
import { UserRegisterDto } from '../dto/UserRegister.dto';
import { User } from '../entity/user.entity';

@Injectable()
export class UserService {
  async registerUser(userRegister: UserRegisterDto): Promise<User> {
    const user = new User();
    user.name = userRegister.name;
    user.email = userRegister.email;
    user.password = userRegister.password;

    return await user.save();
  }

  async getUserByEmail(email: string): Promise<User> {
    return User.findOneOrFail({ where: { email } });
  }
}
