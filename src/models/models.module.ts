import { Module } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { User } from './users.model';

@Module({
    providers: [LoginUserDto, RegisterUserDto, User],
    exports: [LoginUserDto, RegisterUserDto, User]
})
export class ModelsModule {}
