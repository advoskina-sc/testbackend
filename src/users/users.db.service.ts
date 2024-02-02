import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../models/users.model';
import { LoginUserDto } from '../models/dto/login-user.dto';

@Injectable()
export class UsersDbService {

    constructor(@InjectRepository(User)  private usersRepository: Repository<User>) {}

    async getUserInfo(id): Promise<User | null> {
        return await this.usersRepository.findOne({ where: { id }, relations: ['purchases'] });
    }

    async getUserByEmail(email: string): Promise<User | null> {
        return this.usersRepository.findOneBy({email});
    }

    async create(userDto: LoginUserDto) : Promise<User | null> {
        const user = this.usersRepository.create(userDto);
        return this.usersRepository.save(user);
    }

    async update(userNew: User) : Promise<User | null> {
        const user = await this.usersRepository.preload({
            id: userNew.id,
            ...userNew
        });
        if (!user) {
            throw new NotFoundException(`User ${userNew.id} not found`);
        }

        return this.usersRepository.save(user);
    }

    
}
