import { ApiProperty } from '@nestjs/swagger';

import { IsEmail, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsEmail()
  @ApiProperty()
  public email?: string;

  @IsString()
  @ApiProperty()
  public name?: string;
}
