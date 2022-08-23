import { PartialType } from '@nestjs/mapped-types';
import { CreateDenemeDto } from './create-deneme.dto';

export class UpdateDenemeDto extends PartialType(CreateDenemeDto) {
  id: number;
}
