import { ConflictException, Injectable } from '@nestjs/common';
import { Password, User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}
  public getAll(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }
  public getById(id: User['id']): Promise<User | null> {
    return this.prismaService.user.findUnique({
      where: { id },
      include: { password: true },
    });
  }

  public getByEmail(
    email: User['email'],
  ): Promise<(User & { password: Password }) | null> {
    return this.prismaService.user.findUnique({
      where: { email },
      include: { password: true },
    });
  }

  public async create(
    userData: Omit<User, 'id' | 'role'>,
    password: Password['hashedPassword'],
  ): Promise<User> {
    try {
      return await this.prismaService.user.create({
        data: {
          ...userData,
          password: {
            create: {
              hashedPassword: password,
            },
          },
        },
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('This email is already in our database');
      }
    }
  }

  public async updateById(
    id: User['id'],
    userData: Omit<User, 'id' | 'role'>,
    password: string | undefined,
  ): Promise<User> {
    try {
      if (password !== undefined) {
        return await this.prismaService.user.update({
          where: { id },
          data: {
            ...userData,
            password: {
              update: {
                hashedPassword: password,
              },
            },
          },
        });
      }
      if (password == undefined) {
        return await this.prismaService.user.update({
          where: { id },
          data: userData,
        });
      }
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('This email is already in our database');
      }
    }
  }

  public deleteById(id: User['id']): Promise<User> {
    return this.prismaService.user.delete({
      where: { id },
    });
  }
}
