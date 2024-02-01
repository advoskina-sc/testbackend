import { ApiProperty } from "@nestjs/swagger";

export class RegisterUserDto {

    @ApiProperty({example:'test@gmail.com', description:'Email'})
    readonly email: string;

    @ApiProperty({example:'123', description:'Password'})
    readonly password: string;

    @ApiProperty({example:'John', description:'First name'})
    readonly firstName: string;  

    @ApiProperty({example:'Doe', description:'Last name'})
    readonly lastName: string;  

    @ApiProperty({example:'+375111111111', description:'Phone number'})
    readonly phoneNumber: string;  
}