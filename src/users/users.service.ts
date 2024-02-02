import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../models/users.model';
import { LoginUserDto } from '../models/dto/login-user.dto';
import { UsersDbService } from './users.db.service';

@Injectable()
export class UsersService {

    constructor(private userDbService : UsersDbService) {}

    getUserInfo(id): Promise<User | null> {
        return this.userDbService.getUserInfo(id);
    }

    getUserByEmail(email: string): Promise<User | null> {
        return this.userDbService.getUserByEmail(email);
    }

    create(userDto: LoginUserDto) : Promise<User | null> {
        return this.userDbService.create(userDto);
    }
}
