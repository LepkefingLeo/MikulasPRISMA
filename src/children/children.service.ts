/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ChildrenService {
  constructor(private readonly db: PrismaService) {}

  async addToyToChildren(childId: number, toyId: number) {
    return await this.db.connection.create({
      data: {
        childId,
        toyId
      }
    });
  }
  
  async removeToyFromChild(childId: number, toyId: number) {
    return await this.db.connection.deleteMany({
      where: {
        childId,
        toyId,
      },
    });
  }

  async update(id: number, updateChildDto: UpdateChildDto) {
    return await this.db.children.update({
      where: {
        id
      },
      data: updateChildDto
    });
  }

  async create(createChildDto: CreateChildDto) {
    return await this.db.children.create({
      data: createChildDto
    });
  }

  async findAll() {
    return await this.db.children.findMany();
  }

  async findOne(id: number) {
    return await this.db.children.findUniqueOrThrow({
      where: {
        id
      }
    });
  }

  async remove(id: number) {
    return await this.db.children.delete({
      where: {
        id,
      },
    });
  }
}
