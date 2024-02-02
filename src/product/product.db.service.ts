import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from 'src/models/dto/create-product.dto';
import { Product } from 'src/models/product.model';
import { Repository } from 'typeorm';

@Injectable()
export class ProductDbService {

    constructor(@InjectRepository(Product)  private productRepository: Repository<Product>) {}

    getProduct(id): Promise<Product | null> {
        return this.productRepository.findOneBy({ id });
    }

    getProductByName(name: string): Promise<Product | null> {
        return this.productRepository.findOneBy({name});
    }

    getProducts(): Promise<Product[] | null> {
        return this.productRepository.find();
    }

    create(dto: CreateProductDto) : Promise<Product | null> {
        const product = this.productRepository.create(dto);
        return this.productRepository.save(product);
    }
}
