import { ApiProperty } from '@nestjs/swagger';

export class createUserDto {
  @ApiProperty()
  userId: number;
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  username: string;
}
