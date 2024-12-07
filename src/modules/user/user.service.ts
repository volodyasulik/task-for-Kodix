import { PrismaService } from 'nestjs-prisma';

import { Injectable } from '@nestjs/common';
import type { User, Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  public async getUser(
    userWhereUniqueInput: Prisma.UserWhereInput,
  ): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: userWhereUniqueInput,
    });
  }

  public async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  public async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;

    return this.prisma.user.update({
      data,
      where,
    });
  }

  public async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }
}
