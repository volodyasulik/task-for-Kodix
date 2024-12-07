import { Body, Controller, Post, Session } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBody } from '@nestjs/swagger';
import { SignUpUserDto } from './dto/sign-up-user.dto';
import { IJwt } from './auth.types';
import { SignInUserDto } from './dto/sign-in-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  @ApiBody({
    description: 'Sign Up',
    type: SignUpUserDto,
  })
  public async signUp(
    @Body() userData: SignUpUserDto,
    @Session() session: IJwt,
  ): Promise<string> {
    const jwt = await this.authService.signUp(userData);
    session.jwtToken = jwt;
    return jwt;
  }

  @Post('sign-in')
  @ApiBody({
    description: 'Sign In',
    type: SignInUserDto,
  })
  public async SignIn(
    @Body() userData: SignInUserDto,
    @Session() session: IJwt,
  ): Promise<string> {
    const jwt = await this.authService.signIn(userData);
    session.jwtToken = jwt;
    return jwt;
  }
}
