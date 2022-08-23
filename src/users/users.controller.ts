import { Body, Controller, Get, Post } from '@nestjs/common';
import { createUserDto } from './create-user.dto';
import { User } from './users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  //   @Get()
  //   getAllUsers(): Promise<Array<User>> {
  //     return this.usersService.getAllUsers();
  //   }

  @Post()
  createUser(@Body() createUser: createUserDto) {
    console.log(createUser);
    return this.usersService.create(createUser);
  }
}
