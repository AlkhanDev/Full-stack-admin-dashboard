/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsArray, IsOptional, IsString } from 'class-validator';
export class createUserDto {
  @IsString()
  name: string;
  @IsString()
  zipCode: string;
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  permissions: string[];
}
