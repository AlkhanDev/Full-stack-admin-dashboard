import { Module, ValidationPipe } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { APP_PIPE } from '@nestjs/core';

@Module({
  controllers: [UsersController],
  providers: [UsersService,{
    provide:APP_PIPE,
    useValue : new ValidationPipe({whitelist:true,forbidNonWhitelisted:true,transform:true})
  }],
})
export class UsersModule {}
