/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { CreateToyDto } from './dto/create-toy.dto';
import { UpdateToyDto } from './dto/update-toy.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ToysService {
  constructor(private readonly db: PrismaService) {}
  async create(createToyDto: CreateToyDto) {
    return await this.db.toys.create({
      data: createToyDto
    });
  }

  async findAll() {
    return await this.db.toys.findMany();
  }

  async findOne(id: number) {
    return await this.db.toys.findUniqueOrThrow({
      where: {
        id
      }
    });
  }

  async update(id: number, updateToyDto: UpdateToyDto) {
    return await this.db.toys.update({
      where: {
        id
      },
      data: updateToyDto
    });
  }

  async remove(id: number) {
    return await this.db.toys.delete({
      where: {
        id
      },
    });
  }
}
