import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDenemeDto } from './dto/create-deneme.dto';
import { UpdateDenemeDto } from './dto/update-deneme.dto';
import { Deneme } from './entities/deneme.entity';

@Injectable()
export class DenemeService {
  constructor(
    @InjectRepository(Deneme) private denemeRepository: Repository<Deneme>,
  ) {}

  create(deneme: CreateDenemeDto) {
    return this.denemeRepository.save(deneme);
  }

  findAll() {
    return `This action returns all deneme`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deneme`;
  }

  update(id: number, updateDenemeDto: UpdateDenemeDto) {
    return `This action updates a #${id} deneme`;
  }

  remove(id: number) {
    return `This action removes a #${id} deneme`;
  }
  getHello(): any {
    return this.denemeRepository.find({});
  }
}
