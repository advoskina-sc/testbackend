import { Module } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';
import { JwtModule } from '@nestjs/jwt';

@Module({
    providers:[JwtAuthGuard],
    imports: [
        JwtModule.register({
            secret: process.env.PRIVATE_KEY || 'SECRET',
            signOptions: {
              expiresIn: '24h'
            }
          })
    ],
    exports:[
        JwtAuthGuard,
        JwtModule
    ]
})
export class GuardModule {}
