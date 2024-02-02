import {config as dotenvConfig} from 'dotenv'
import { DataSource, DataSourceOptions } from 'typeorm';

dotenvConfig({path: '.env'});

export const dataSourceOptions : DataSourceOptions =  {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: ['dist/**/*.model{.ts,.js}'],
    migrations: ['dist/db/migrations/*.js'],
    synchronize: false,

  }

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;