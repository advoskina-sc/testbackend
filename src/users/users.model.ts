import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { hash} from "bcryptjs";

@Entity({ name: 'users' })
export class User  {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 300, unique: true, nullable: false})
    email: string;

    @Column({ type: 'varchar', length: 60, nullable: false})
    password: string;

    @Column({ type: 'varchar', length: 100 })
    firstName: string;

    @Column({ type: 'varchar', length: 100 })
    lastName: string;

    @Column({ type: 'varchar', length: 100 })
    phoneNumber: string;

    @BeforeInsert()
    public async hashPassword() {
        this.password = await hash(this.password, 10);
    }
}