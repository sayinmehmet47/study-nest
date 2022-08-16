import { CatsService } from './cats.service';
import { CreateCatDto } from './create-cat.dto';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }

  @Post()
  async create(@Body() CreateCatDto: CreateCatDto) {
    this.catsService.create(CreateCatDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a ${id} cat`;
  }
}
