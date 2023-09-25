import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Candidate {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    city: string;

    @Column()
    countElecVote: number;

    @Column()
    gender: string;

    @Column()
    name: string;

    @Column()
    noUrut: number;

    @Column()
    photo: string;

    @Column()
    province?: string;

    @Column()
    dapil?: string;

    @Column()
    logoParties?: string;

    @Column()
    nameParties?: string;

    @Column()
    actionPolling: boolean;

    @Column()
    loading: boolean;
}
