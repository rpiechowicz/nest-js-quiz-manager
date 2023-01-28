import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost', // process.env.DB_HOST
  port: 3306, // parseInt(process.env.DB_PORT, 10)
  username: 'root', // process.env.DB_USERNAME
  password: 'root', // process.env.DB_PASSWORD
  database: 'quiz', // process.env.DB_NAME
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migration/*.js'],
  synchronize: false,
};

const dataSource: DataSource = new DataSource(dataSourceOptions);

export default dataSource;
