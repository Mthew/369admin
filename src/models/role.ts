import { PrismaDB } from "@/lib";

import { roles } from "@prisma/client";

export default class RoleEntity {
  private Entity: any;
  constructor() {
    this.Entity = PrismaDB.roles;
  }

  async create(data: roles) {
    console.log("DATA => ", {
      name: data.name,
      description: data.description,
    });
    return await this.Entity.create({
      data: {
        name: data.name,
        description: data.description,
      },
    });
  }

  async update(id: string, item: any) {
    return await this.Entity.update({
      where: { id: Number(id) },
      data: item,
    });
  }

  async findByKey(filter: { key: string; value: any }) {}

  async findById(id: string) {
    return await this.Entity.findUnique({
      where: {
        id: Number(id),
      },
    });
  }

  async findMany() {
    return await this.Entity.findMany();
  }

  async delete(id: string) {
    return await this.Entity.delete({
      where: {
        id: Number(id),
      },
    });
  }
}
