import { ApiProperty } from "@nestjs/swagger";
import { IsDecimal, IsPositive, IsString, Matches } from "class-validator";

export class CreateProductDto {

    @ApiProperty({example:'Pen', description:'Product name'})
    @IsString({message: 'Should be a string'})
    readonly name: string;

    @ApiProperty({example:'123', description: 'Product description'})
    @IsString({message: 'Description should be a string'})
    readonly description: string;

    @ApiProperty({example:'John', description:'Product price per unit'})
    @IsDecimal()
    @Matches(/^\d+\.\d{2}$/, { message: 'Price must be a decimal with 2 digits after the decimal point.' })
    readonly price: number;  
}