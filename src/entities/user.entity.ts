import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    name: string;

    @Column()
    nik: string;

    @Column()
    email: string;

    @Column()
    codedpd: number;

    @Column()
    codedpr: number;

    @Column()
    codedprdprov: number;

    @Column()
    codedprdkabKo: number;
}
