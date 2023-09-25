import { DataSource } from "typeorm";
import { Registrations } from "./entities/registration.entity";
import { User } from "./entities/user.entity";
import { Category } from "./entities/category.entity";
import { Candidate } from "./entities/candidate.entity";
import 'dotenv/config';

const dataSource = new DataSource({
    type: "postgres",
    host: "localhost" || process.env.POSTGRES_HOST,
    port: 5432,
    username: "postgres"  || process.env.POSTGRES_USER,
    password: "Gigih985042@" || process.env.POSTGRES_PASSWORD,
    database: "quick_count_2024" || "api-quick-count-postgres",
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