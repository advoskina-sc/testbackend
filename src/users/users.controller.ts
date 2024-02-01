import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}

    @UseGuards(JwtAuthGuard)
    @Get('/profile')
    getUserInfo(@Request() req: any) {
        const userId = req.user.id;
        return this.usersService.getUserInfo(userId);
    }
}
