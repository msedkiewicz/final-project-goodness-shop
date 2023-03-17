import { Controller, Delete, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('/')
  getAll() {
    return this.userService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const user = await this.userService.getById(id);
    if (!user) throw new Error('User not found');
    return user;
  }

  @Delete('/')
  async delete(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!(await this.userService.getById(id)))
      throw new Error('User not found');
    await this.userService.deleteById(id);
    return { success: true };
  }
}
