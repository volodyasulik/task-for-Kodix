import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { JwtStrategy } from '../jwt/jwt.strategy';
import { UserService } from '../user/user.service';

@Module({
  providers: [PostsService, JwtStrategy, UserService],
  controllers: [PostsController],
  exports: [PostsService],
})
export class PostsModule {}
