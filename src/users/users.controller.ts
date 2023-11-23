import { Controller, Get, Render, Post, HttpCode } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('/signup')
  @Render('signup')
  async findAll(): Promise<void> {
    return;
  }

  @Post()
  @HttpCode(201)
  async create(): Promise<void> {
    
  }
}
