import { PrismaDB } from "@/lib";

import { Role } from "@/interfaces/role";

export default class RoleEntity {
  private Entity: any;
  constructor() {
    this.Entity = PrismaDB.roles;
  }

  async create(data: Role) {
    return await this.Entity.create({
      data: {
        name: data.name,
        description: data.description,
      },
    });
  }

  async update(id: string, item: Role) {
    return await this.Entity.update({
      where: { id: Number(id) },
      data: item,
    });
  }

  async findByKey(filter: { key: string; value: Role }) {}

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
