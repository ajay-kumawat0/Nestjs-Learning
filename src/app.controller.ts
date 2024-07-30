import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('app')
export class AppController {
  @Get()
  @UseGuards(AuthGuard('local'))
  getUser(@Request() req) {
    return req.user;
  }
}
