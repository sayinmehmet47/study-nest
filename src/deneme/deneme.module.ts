import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { DenemeService } from './deneme.service';
import { DenemeController } from './deneme.controller';
import { Deneme } from './entities/deneme.entity';

@Module({
  controllers: [DenemeController],
  providers: [DenemeService],
  imports: [TypeOrmModule.forFeature([Deneme])],
})
export class DenemeModule {}
