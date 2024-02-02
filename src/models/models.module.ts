import { Module } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { User } from './users.model';
import { Product } from './product.model';
import { CreateProductDto } from './dto/create-product.dto';
import { CreatePurchaseDto } from './dto/create-purchase.dto';

@Module({
    providers: [LoginUserDto, RegisterUserDto, CreateProductDto, CreatePurchaseDto, User, Product],
    exports: [LoginUserDto, RegisterUserDto, CreateProductDto, CreatePurchaseDto, User, Product]
})
export class ModelsModule {}
