import { PrismaService } from 'nestjs-prisma';

import { Module } from '@nestjs/common';

import { UserService } from './user.service';
import { UserController } from './user.controller';
import { JwtStrategy } from '../jwt/jwt.strategy';

@Module({
  providers: [UserService, PrismaService, JwtStrategy],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
