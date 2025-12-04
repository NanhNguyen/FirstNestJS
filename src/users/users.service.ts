import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Cristiano Ronaldo',
    },
    {
      id: 2,
      name: 'Lionel Messi',
    },
    {
      id: 3,
      name: 'Neymar Jr',
    },
  ];
  findAll() {
    return this.users;
  }
}
