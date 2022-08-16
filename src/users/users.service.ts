import { createUser } from './user.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }
  findUsersById(id): Promise<User> {
    return this.usersRepository.findOne(id);
  }
  createUser(createUser: User) {
    const newUser = this.usersRepository.create(createUser);
    return this.usersRepository.save(newUser);
  }
}
