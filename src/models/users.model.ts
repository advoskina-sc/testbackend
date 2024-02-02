import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, ManyToMany, JoinTable } from 'typeorm';
import { hash} from "bcryptjs";
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { Product } from './product.model';

@Entity({ name: 'users' })
export class User  {

    @ApiProperty({example:'"529228e2-a4c2-462e-84dc-78475a2877c0"', description:'Primary key'})
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({example:'test@gmail.com', description:'Email'})
    @Column({ type: 'varchar', length: 300, unique: true, nullable: false})
    email: string;

    @Exclude()
    @ApiProperty({example:'123', description:'Password'})
    @Column({ type: 'varchar', length: 60, nullable: false})
    password: string;

    @ApiProperty({example:'Alexa', description:'User\' first name'})
    @Column({ type: 'varchar', length: 100 })
    firstName: string;

    @ApiProperty({example:'Zh', description:'User\' last name'})
    @Column({ type: 'varchar', length: 100 })
    lastName: string;

    @ApiProperty({example:'+375111111111', description:'User\' phone number'})
    @Column({ type: 'varchar', length: 100 })
    phoneNumber: string;

    @ManyToMany(() => Product)
    @JoinTable()
    purchases: Product[]

    @BeforeInsert()
    public async hashPassword() {
        this.password = await hash(this.password, 10);
    }
}