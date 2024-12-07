import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SignUpUserDto {
  @IsString()
  @ApiProperty()
  public email!: string;

  @IsString()
  @ApiProperty()
  public name!: string;

  @IsString()
  @ApiProperty()
  public password!: string;
}
