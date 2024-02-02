import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateProductDto } from 'src/models/dto/create-product.dto';
import { Product } from 'src/models/product.model';
import { ProductService } from './product.service';
import { JwtAuthGuard } from 'src/guard/jwt-auth.guard';
import { CreatePurchaseDto } from 'src/models/dto/create-purchase.dto';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) {}

    @ApiOperation({summary: 'Create product'})
    @ApiResponse({status:200, type: Product})
    @UseGuards(JwtAuthGuard)
    @Post()
    register(@Body() createProductDto: CreateProductDto) {
        return this.productService.create(createProductDto);
    }

    @ApiOperation({summary: 'Get all products'})
    @ApiResponse({status:200, type: [Product]})
    @UseGuards(JwtAuthGuard)
    @Get()
    getAll() {
        return this.productService.getProducts();
    }

    @ApiOperation({summary: 'Create purchase'})
    // @ApiResponse({status:200, type: Purchase})
     @UseGuards(JwtAuthGuard)
     @Post('/purchase')
     registerPurchase(@Body() createPurchaseDto: CreatePurchaseDto, @Request() req: any) {
         const userId = req.user.id; // receive user id from token
         return this.productService.createPurchase(createPurchaseDto, userId);
     }
}

