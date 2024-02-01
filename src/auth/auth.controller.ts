import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { RegisterUserDto } from 'src/users/dto/register-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @ApiOperation({summary: 'User login'})
    @ApiResponse({status:200,  description: 'The token has been successfully generated.'})
    @Post('/login')
    login(@Body() userDto: CreateUserDto) {
        return this.authService.login(userDto);
    }

    @ApiOperation({summary: 'Register new user'})
    @ApiResponse({status:200,  description: 'The token has been successfully generated.'})
    @Post('/register')
    register(@Body() userDto: RegisterUserDto) {
        return this.authService.register(userDto);
    }
}
