import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

const bcrypt = require('bcrypt');
import { SignUpUserDto } from './dto/sign-up-user.dto';
import { Prisma } from '@prisma/client';
import { CONFIG } from '../common/config.config';
import { UserService } from '../user/user.service';
import { ERR_MESSAGES } from '../common/common.const';
import { SignInUserDto } from './dto/sign-in-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  private async hashString(string: string): Promise<string> {
    const hash = await bcrypt.hash(
      string,
      Number.parseInt(process.env[CONFIG.PASS_HASH]),
    );
    return hash;
  }

  private async checkHashString(
    string: string,
    encrypted: string,
  ): Promise<boolean> {
    return bcrypt.compare(string, encrypted);
  }

  private async createJwt(payload: string): Promise<string> {
    return this.jwtService.signAsync({
      userId: payload,
    });
  }

  public async signUp(userData: SignUpUserDto): Promise<string> {
    const password = await this.hashString(userData.password);
    try {
      const user = await this.userService.createUser({
        ...userData,
        password,
      });

      return this.createJwt(user.id);
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new HttpException(
            ERR_MESSAGES.USER_ALREADY_EXIST,
            HttpStatus.BAD_REQUEST,
          );
        }
      }
      throw e;
    }
  }

  public async signIn({ email, password }: SignInUserDto): Promise<string> {
    const user = await this.userService.getUser({
      email,
    });
    if (!user) {
      throw new HttpException(
        ERR_MESSAGES.WRONG_CREDENTIALS,
        HttpStatus.BAD_REQUEST,
      );
    }

    const isPassworValid = await this.checkHashString(password, user.password);
    if (!isPassworValid) {
      throw new HttpException(
        ERR_MESSAGES.WRONG_CREDENTIALS,
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.createJwt(user.id);
  }
}
