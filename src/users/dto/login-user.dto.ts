import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length, Matches } from "class-validator";

export class LoginUserDto {

    @ApiProperty({example:'test@gmail.com', description:'Email'})
    readonly email: string;

    @ApiProperty({example:'123', description:'Password'})
    readonly password: string; 
}