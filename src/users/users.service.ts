import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../models/users.model';
import { LoginUserDto } from '../models/dto/login-user.dto';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User)  private usersRepository: Repository<User>) {}

    getUserInfo(id): Promise<User | null> {
        return this.usersRepository.findOneBy({ id });
    }

    getUserByEmail(email: string): Promise<User | null> {
        return this.usersRepository.findOneBy({email});
    }

    create(userDto: LoginUserDto) : Promise<User | null> {
        const user = this.usersRepository.create(userDto);
        return this.usersRepository.save(user);
    }
}
