import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    // private readonly usersRepository: UsersRepository,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}
}
