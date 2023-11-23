import { Controller, Get, Render, Post, HttpCode, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import type { CreateUserDto } from './users.dto';

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
  async create(@Body() user: CreateUserDto): Promise<void> {
    return this.usersService.create(user);
  }

  @Get('/list')
  @Render('list')
  async list(): Promise<void> {
    const users = await this.usersService.findAll();
  }
}
