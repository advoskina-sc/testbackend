import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User)  private usersRepository: Repository<User>) {}

    getUserInfo(id): Promise<User | null> {
        return this.usersRepository.findOneBy({ id });
    }

    getUserByEmail(email: string): Promise<User | null> {
        return this.usersRepository.findOneBy({email});
    }

    create(userDto: CreateUserDto) : Promise<User | null> {
        const user = this.usersRepository.create(userDto);
        return this.usersRepository.save(user);
    }
}
