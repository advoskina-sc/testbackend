import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, Length, Matches } from "class-validator";

export class RegisterUserDto {

    @ApiProperty({example:'test@gmail.com', description:'Email'})
    @IsString({message: 'Should be a string'})
    @IsEmail({},{message:'Incorrect email'})
    readonly email: string;

    @ApiProperty({example:'123', description:'Password'})
    @Length(8,16,{message:'Pass should be between 8 and 16 symbols'})
    @Matches(/((?=.*\d)|(?=.*[a-z])|(?=.*[A-Z]))/, { message: 'Password must contain at least one uppercase letter, one lowercase letter, and one number.' })
    readonly password: string;

    @ApiProperty({example:'John', description:'First name'})
    @IsString({message: 'Should be a string'})
    @IsNotEmpty({message: 'First name should not be empty'})
    readonly firstName: string;  

    @ApiProperty({example:'Doe', description:'Last name'})
    @IsString({message: 'Should be a string'})
    @IsNotEmpty({message: 'Last name should not be empty'})
    readonly lastName: string;  

    @ApiProperty({example:'+375111111111', description:'Phone number'})
    @IsString({message: 'Should be a string'})
    @Matches(/^\+\d+$/, {message: 'Phone number should start with "+" and contain only numbers'})
    readonly phoneNumber: string;  
}