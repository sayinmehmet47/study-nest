import { ApiProperty } from '@nestjs/swagger';

export class loginUserDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}
