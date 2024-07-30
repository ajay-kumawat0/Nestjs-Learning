import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';

@Controller('app')
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @UseGuards(AuthGuard('local'))
  getUser(@Request() req) {
    return `Token = ${this.authService.generateToken(req.user)}`;
  }
}
