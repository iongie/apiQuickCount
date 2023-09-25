import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    name: string;

    @Column()
    page: string;

    @Column()
    detail: string;

    @Column()
    nameCode: string;
}
