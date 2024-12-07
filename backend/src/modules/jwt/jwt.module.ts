import { Global, Module } from '@nestjs/common';

import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from '../user/user.module';

@Global()
@Module({
  imports: [PassportModule, UserModule],
  providers: [JwtStrategy],
})
export class JwtModule {}
