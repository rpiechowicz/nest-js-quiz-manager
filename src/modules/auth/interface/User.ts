import { ApiProperty } from '@nestjs/swagger';

export class UserResponse {
  @ApiProperty()
  access_token: string;
}
