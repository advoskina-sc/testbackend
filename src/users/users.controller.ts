import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';

@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}

    @ApiOperation({summary: 'User creation'})
    @ApiResponse({status:200, type: User})
    @UseGuards(JwtAuthGuard)
    @Get('/profile')
    getUserInfo(@Request() req: any) {
        const userId = req.user.id; // receive user id from token
        return this.usersService.getUserInfo(userId);
    }
}
