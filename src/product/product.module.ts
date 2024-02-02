import { Module, forwardRef } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductDbService } from './product.db.service';
import { Product } from 'src/models/product.model';
import { AuthModule } from 'src/auth/auth.module';
import { GuardModule } from 'src/guard/guard.module';
import { ModelsModule } from 'src/models/models.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';

@Module({
  providers: [ProductService, ProductDbService],
  controllers: [ProductController],
  imports: [
    TypeOrmModule.forFeature([Product]),
    forwardRef(() => AuthModule),
    GuardModule,
    ModelsModule,
    forwardRef(() => UsersModule),
  ],
  exports: [
    ProductModule
  ]
})
export class ProductModule {}
