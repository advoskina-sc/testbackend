import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from 'src/models/dto/create-product.dto';
import { ProductDbService } from './product.db.service';
import { Product } from 'src/models/product.model';
import { CreatePurchaseDto } from 'src/models/dto/create-purchase.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ProductService {

    constructor(private productDbServie : ProductDbService, private usersService: UsersService) {}

    async getProduct(id): Promise<Product | null> {
        return this.productDbServie.getProduct(id);
    }

    async getProductByName(name: string): Promise<Product | null> {
        return this.productDbServie.getProductByName(name);
    }

    async getProducts(): Promise<Product[] | null> {
        return this.productDbServie.getProducts();
    }

    async create(dto: CreateProductDto) : Promise<Product | null> {
        const productExist =  await this.getProductByName(dto.name);

        if (productExist) {
            throw new HttpException('Product with this name already exists', HttpStatus.BAD_REQUEST); 
         }
        return this.productDbServie.create(dto);
    }

    async createPurchase(createPurchaseDto: CreatePurchaseDto, id) {
        const product = await this.getProductByName(createPurchaseDto.productName);
        const user = await this.usersService.getUserInfo(id);
        if (product && user) {
            if (!user.purchases || !Array.isArray(user.purchases)) {
                user.purchases = [];
            }
            user.purchases.push(product);
            return this.usersService.update(user);
        }
        throw new HttpException('User or product not found', HttpStatus.NOT_FOUND)
    }

    
}
