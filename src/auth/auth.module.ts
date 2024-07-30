import { Module } from '@nestjs/common';
import { PassportLocalStrategy } from './passport.local.strategy';
import { UserModule } from 'src/users/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { PassportJwtStrategy } from './passport.jwt.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: 'NestJs-Api',
      signOptions: {
        expiresIn: '60s',
      },
    }),
  ],
  controllers: [],
  providers: [PassportLocalStrategy, PassportJwtStrategy, AuthService],
  exports: [AuthService],
})
export class AuthModule {}
