import { Repository } from 'typeorm';
import { User } from './users.entity';

export class UsersRepository extends Repository<User> {}
