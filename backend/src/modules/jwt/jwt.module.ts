import { Global, Module } from '@nestjs/common';

import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from '../user/user.module';
import { PostsModule } from '../posts/posts.module';

@Global()
@Module({
  imports: [PassportModule, UserModule, PostsModule],
  providers: [JwtStrategy],
})
export class JwtModule {}
