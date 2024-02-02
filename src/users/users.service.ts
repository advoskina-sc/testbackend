import { Injectable } from '@nestjs/common';
import { User } from '../models/users.model';
import { LoginUserDto } from '../models/dto/login-user.dto';
import { UsersDbService } from './users.db.service';


@Injectable()
export class UsersService {

    constructor(private userDbService : UsersDbService) {}

    async getUserInfo(id): Promise<User | null> {
        return this.userDbService.getUserInfo(id);
    }

    async getUserByEmail(email: string): Promise<User | null> {
        return this.userDbService.getUserByEmail(email);
    }

    async create(userDto: LoginUserDto) : Promise<User | null> {
        return this.userDbService.create(userDto);
    }

    async update(user) {
        return this.userDbService.update(user);
    }

}
