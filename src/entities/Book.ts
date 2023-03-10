import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, Relation } from 'typeorm';
import { Review } from './Review';
import { Author } from './Author';

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  bookId: string;

  @Column({ unique: true })
  title: string;

  @Column()
  yearOfFirstPublication: string;

  @Column({ default: false })
  publicDomain: boolean;

  @OneToMany(() => Review, (review) => review.book)
  reviews: Relation<Review>[];

  @ManyToMany(() => Author, (author) => author.book)
  author: Relation<Author>[];
}
