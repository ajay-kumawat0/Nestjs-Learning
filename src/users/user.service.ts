import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { CONSTANT } from 'src/constant';

@Injectable()
export class UserService {
  public users: User[] = [
    {
      username: 'user1',
      password: 'admin',
      email: 'user1@gmail.com',
      role: CONSTANT.ROLES.ADMIN,
    },
    {
      username: 'user2',
      password: 'admin',
      email: 'user2@gmail.com',
      role: CONSTANT.ROLES.ADMIN,
    },
    {
      username: 'user3',
      password: 'admin',
      email: 'user3@gmail.com',
      role: CONSTANT.ROLES.USER,
    },
  ];

  getUserById(username: string): User {
    return this.users.find((user) => user.username === username);
  }
}
