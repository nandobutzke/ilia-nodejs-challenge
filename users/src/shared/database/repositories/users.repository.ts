import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createUserDto: Prisma.UserCreateArgs) {
    return this.prismaService.user.create(createUserDto);
  }

  update(updateUserDto: Prisma.UserUpdateArgs) {
    return this.prismaService.user.update(updateUserDto);
  }

  findUnique(findUniqueUserDto: Prisma.UserFindUniqueArgs) {
    return this.prismaService.user.findUnique(findUniqueUserDto);
  }

  delete(deleteUserDto: Prisma.UserDeleteArgs) {
    return this.prismaService.user.delete(deleteUserDto);
  }
}
