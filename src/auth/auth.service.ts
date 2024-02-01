import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { RegisterUserDto } from 'src/users/dto/register-user.dto';
import { User } from 'src/users/users.model';
import { UsersService } from 'src/users/users.service';
import {compare} from 'bcryptjs'

@Injectable()
export class AuthService {

    constructor(private usersService: UsersService, private jwtService: JwtService) {}


    async login(userDto: CreateUserDto) {
        const user =  await this.usersService.getUserByEmail(userDto.email);
        
        if (!user) {
            throw new UnauthorizedException({message:'Wrong email or password'});
        }

        const passEquals = await compare(userDto.password, user.password);
        if (passEquals) {
            return this.generateToken(user);
        }

        throw new UnauthorizedException({message:'Wrong email or password'});
    }

    async register(userDto: RegisterUserDto) {
        const userExist =  await this.usersService.getUserByEmail(userDto.email);

        if (userExist) {
            throw new HttpException('User with current email already exists', HttpStatus.BAD_REQUEST); 
         }

        const user = await this.usersService.create(userDto);
        return this.generateToken(user);
    }

    private async generateToken(user: User): Promise<{ access_token: string }> {
        const payload = {email: user.email, id: user.id}
        return {
            access_token: this.jwtService.sign(payload)
        }
    }

}
