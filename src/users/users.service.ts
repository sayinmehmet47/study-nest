import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme',
        email: 'john@example.com',
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret',
        email: 'chris@example.com',
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess',
        email: 'maria@example.com',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async create(user: CreateUserDto): Promise<CreateUserDto | undefined> {
    this.users.push(user);
    return user;
  }
}
