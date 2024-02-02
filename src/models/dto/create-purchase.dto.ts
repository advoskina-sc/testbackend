import { ApiProperty } from "@nestjs/swagger";
import { IsDecimal, IsPositive, IsString, Matches } from "class-validator";

export class CreatePurchaseDto {

    @ApiProperty({example:'Pen', description:'Product name'})
    @IsString({message: 'Should be a string'})
    readonly productName: string;
}