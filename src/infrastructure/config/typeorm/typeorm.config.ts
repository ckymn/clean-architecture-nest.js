import { ConnectionOptions } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config({ path: './env/development.env' });

const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [__dirname + './../../**/*.entity{.ts,.js}'],
  synchronize: false,
  schema: process.env.DATABASE_SCHEMA,
  migrationsRun: true,
  migrationsTableName: 'migration_todo',
  migrations: ['database/migrations/**/*{.ts,.js}'],
  // cli: {
  //   migrationsDir: 'database/migrations',
  // },
  // ssl: {
  //   rejectUnauthorized: false,
  // },
};

export default config;
