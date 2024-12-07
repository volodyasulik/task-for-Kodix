import { ApiProperty } from '@nestjs/swagger';

import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @ApiProperty()
  public email: string = '';

  @IsString()
  @ApiProperty()
  public password: string = '';

  @IsString()
  @ApiProperty()
  public name: string = '';
}
