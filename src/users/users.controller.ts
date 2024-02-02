import { Controller, Get, Post, Request, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/guard/jwt-auth.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from '../models/users.model';
import { FileInterceptor } from '@nestjs/platform-express';


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

    @ApiOperation({summary: 'Upload icon for user'})
    @Post('/icon')
    @UseInterceptors(FileInterceptor('image'))
    @UseGuards(JwtAuthGuard)
    uploadIcon(@UploadedFile() file: Express.Multer.File, @Request() req: any) {
        const userId = req.user.id;
        return this.usersService.uploadIcon(file, userId);
    }
}
