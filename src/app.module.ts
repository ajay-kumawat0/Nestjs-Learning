import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [AuthModule, UserModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
