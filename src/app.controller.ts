import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { RoleGuard } from './role.guard';
import { CONSTANT } from './constant';

@Controller('app')
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @UseGuards(AuthGuard('local'))
  getUser(@Request() req) {
    return `Token = ${this.authService.generateToken(req.user)}`;
  }

  @Get('/user')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(CONSTANT.ROLES.USER))
  user(): string {
    return `Checking user data`;
  }

  @Get('/admin')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(CONSTANT.ROLES.ADMIN))
  admin(): string {
    return `Checking admin data`;
  }
}
