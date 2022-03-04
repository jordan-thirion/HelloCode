import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

const config: MysqlConnectionOptions = {
    type: "mysql",
    port: 3306,
    host: "localhost",
    password: "",
    username: "root",
    database: "hellocode",
    entities: ['dist/src/**/*.entity.js'],
    synchronize: true,
    /*migrations: [
        'dist/src/hellocode/migrations/*.js'
    ],
    cli: {
        migrationsDir: "src/hellocode/migrations"
    }*/
}

export default config;