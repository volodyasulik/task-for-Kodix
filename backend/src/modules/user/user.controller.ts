import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../jwt/jwt-auth.guard';
import { GuardId } from './user.typer';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiParam({
    name: 'id',
    description: 'User ID',
  })
  public async getUser(@Request() req: GuardId): Promise<User | null> {
    return this.userService.getUser({
      id: req.id,
    });
  }

  @Post('create')
  @ApiBody({
    description: 'Create user',
    type: CreateUserDto,
  })
  public async createUser(@Body() userData: CreateUserDto): Promise<User> {
    return this.userService.createUser(userData);
  }
}
