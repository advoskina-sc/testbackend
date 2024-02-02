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
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

function fileFilter(req, file, cb) {
  if (file.size == 0) {
    cb(new Error('File is empty'), false);
  }
  
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
     cb(null, true);
  } else {
     cb(new Error('Only .jpg and .png files are allowed!'), false);
  }
 }

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersDbService],
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: './static',
        filename: (req, file, cb) => {
          const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
          return cb(null, `${randomName}${extname(file.originalname)}`);
        }
      }),
      fileFilter: fileFilter
    }),
    TypeOrmModule.forFeature([User]),
    forwardRef(() => AuthModule),
    GuardModule,
    ModelsModule
  ],
  exports: [UsersService]
})
export class UsersModule {}
