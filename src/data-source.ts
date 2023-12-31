import "reflect-metadata"
import { DataSource } from "typeorm"
import { Blog } from "./entity/blog"
import * as dotenv from "dotenv";
dotenv.config()

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    synchronize: true,
    logging: false,
    entities: [Blog],
    migrations: [],
    subscribers: [],
})
