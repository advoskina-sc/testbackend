import { Module, forwardRef } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../models/users.model';
import { AuthModule } from 'src/auth/auth.module';
import { GuardModule } from 'src/guard/guard.module';
import { ModelsModule } from 'src/models/models.module';
import { UsersDbService } from './users.db.service';
import { ProductModule } from 'src/product/product.module';
import { ProductService } from 'src/product/product.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersDbService],
  imports: [
    TypeOrmModule.forFeature([User]),
    forwardRef(() => AuthModule),
    GuardModule,
    ModelsModule
  ],
  exports: [UsersService]
})
export class UsersModule {}
