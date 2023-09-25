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
    codeDpd: number;

    @Column()
    codeDpr: number;

    @Column()
    codeDprdProv: number;

    @Column()
    codeDprdKabKo: number;
}
