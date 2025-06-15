import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { createUserDto } from './dto/createUser.dto';
import { parsedIpPipe } from './pipes/parsedIdPipe';

type UserDataDto = {
  data: Users[];
  totalCount: number;
};

type Users = {
  id: number;
  name: string;
  permissions: string[] | null;
  zipCode: string;
};

const users: Users[] = [
  {
    id: 1,
    name: 'Alxan',
    permissions: ['Users.Read', 'Users.Delete'],
    zipCode: 'AZ 1149',
  },
  {
    id: 2,
    name: 'Ruslan',
    permissions: null,
    zipCode: 'AZ 1149',
  },
  {
    id: 3,
    name: 'Elnur',
    permissions: ['Users.Read'],
    zipCode: 'AZ 1149',
  },
];

@Controller('users')
export class UsersController {
  @Get()
  findAllUsers(): UserDataDto {
    return { data: users, totalCount: users.length };
  }

  @Get(":id")
  findUserById(@Param("id",parsedIpPipe) id:number):Users|string{
    const findUser = users.find(user=>user.id===id) 
     if(findUser) return findUser
     return "not found";
  }

  @Post()
  @HttpCode(201)
  createUser(@Body() body:createUserDto){
    const newUser = {...body,id:users.length+1}
    users.push(newUser)
    return;
  }
}
