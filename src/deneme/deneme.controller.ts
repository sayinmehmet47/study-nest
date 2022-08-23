import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { DenemeService } from './deneme.service';
import { CreateDenemeDto } from './dto/create-deneme.dto';
import { UpdateDenemeDto } from './dto/update-deneme.dto';

@Controller('deneme')
export class DenemeController {
  constructor(private readonly denemeService: DenemeService) {}

  @Get()
  getHello(): string {
    return this.denemeService.getHello();
  }
  @Post()
  @ApiParam({
    name: 'deneme',
    type: CreateDenemeDto,
  })
  createUser(@Body() createDeneme: CreateDenemeDto) {
    return this.denemeService.create(createDeneme);
  }
}
