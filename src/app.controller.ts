import { loginUserDto } from './users/login-user.dto';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { ApiParam, ApiProperty } from '@nestjs/swagger';
import { User } from './users/users.entity';
import { createUserDto } from './users/create-user.dto';

@Controller()
export class AppController {
  constructor(
    private appService: AppService,
    private authService: AuthService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @ApiParam({
    name: 'user',
    type: loginUserDto,
  })
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('auth/register')
  @ApiParam({
    name: 'user',
    type: createUserDto,
  })
  async register(@Body() user: User) {
    return this.authService.register(user);
  }
}
