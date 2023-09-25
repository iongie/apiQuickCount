import { DataSource } from "typeorm";
import { Registrations } from "./entities/registration.entity";
import { User } from "./entities/user.entity";
import { Category } from "./entities/category.entity";
import { Candidate } from "./entities/candidate.entity";

const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Gigih985042@",
    database: "quick_count_2024",
    synchronize: true,
    logging: false,
    entities: [Registrations, User, Category, Candidate],
    subscribers: [],
    migrations: [],
    poolSize: 30000,
    entitySkipConstructor: false
})

export {
    dataSource
}