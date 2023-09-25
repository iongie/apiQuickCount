import { DataSource } from "typeorm";
import { Registrations } from "./entities/registration.entity";
import { User } from "./entities/user.entity";
import { Category } from "./entities/category.entity";
import { Candidate } from "./entities/candidate.entity";
import 'dotenv/config';

const dataSource = new DataSource({
    type: "postgres",
    url: process.env.POSTGRES_URL,
    ssl: true,
    synchronize: true,
    logging: false,
    entities: [Registrations, User, Category, Candidate],
    subscribers: [],
    migrations: [],
    poolSize: 30000,
    entitySkipConstructor: false,
})

export {
    dataSource
}