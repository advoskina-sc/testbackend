import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
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

    async uploadIcon(file: Express.Multer.File, id) {
        const user = await this.userDbService.getUserInfo(id);
        if (!user) {
            throw new NotFoundException(`User ${id} not found`);
        }
        if (file && file.filename) {
            user.image = file.filename;
            return this.userDbService.update(user);
        }
        throw new HttpException('Icon\'s file is invalid', HttpStatus.UNSUPPORTED_MEDIA_TYPE); 
    }

}
