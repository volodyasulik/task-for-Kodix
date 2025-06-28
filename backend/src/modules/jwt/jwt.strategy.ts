/* eslint-disable @typescript-eslint/no-explicit-any */
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CONFIG } from '../common/config.config';
import { UserService } from '../user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env[CONFIG.JWT_SECRET],
    });
  }

  public async validate({ userId }: any): Promise<string> {
    const user = await this.userService.getUser({
      id: userId,
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user.id;
  }
}
