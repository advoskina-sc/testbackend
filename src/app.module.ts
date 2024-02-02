import { Controller, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from './auth/auth.module';
import { dataSourceOptions } from "db/data-source";
import { GuardModule } from './guard/guard.module';
import { ModelsModule } from './models/models.module';
import { ProductModule } from './product/product.module';


@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.env`
        }),
        TypeOrmModule.forRoot(dataSourceOptions),
        UsersModule,
        AuthModule,
        GuardModule,
        ModelsModule,
        ProductModule
    ]
})
export class AppModule {
}
