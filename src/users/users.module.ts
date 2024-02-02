import { Module, forwardRef } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../models/users.model';
import { AuthModule } from 'src/auth/auth.module';
import { GuardModule } from 'src/guard/guard.module';
import { ModelsModule } from 'src/models/models.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    TypeOrmModule.forFeature([User]),
    forwardRef(() => AuthModule),
    GuardModule,
    ModelsModule
  ],
  exports: [UsersService]
})
export class UsersModule {}
