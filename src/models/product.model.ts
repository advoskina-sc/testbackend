import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'product' })
export class Product  {

    @ApiProperty({example:'"529228e2-a4c2-462e-84dc-78475a2877c0"', description:'Primary key'})
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({example:'Pen', description:'Product name'})
    @Column({ type: 'varchar', length: 300, unique: true, nullable: false})
    name: string;

    @ApiProperty({example:'Red pen', description:'Product description'})
    @Column({ type: 'varchar', length: 100 })
    description: string;

    @ApiProperty({example:'3.43', description:'Product price per unit'})
    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false})
    price: number;
}