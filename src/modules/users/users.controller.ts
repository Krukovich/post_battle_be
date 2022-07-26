import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { IUsers } from './users.interface';

@Controller()
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('users')
  @HttpCode(HttpStatus.OK)
  async getHello(@Param('limit') limit?: number): Promise<IUsers[]> {
    return await this.userService.getUsers(limit);
  }
}
