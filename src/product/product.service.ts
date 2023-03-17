import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Product } from './product.interface';

@Injectable()
export class ProductService {
  constructor(private prismaService: PrismaService) {}
}
