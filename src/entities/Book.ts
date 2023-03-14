import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, Relation } from 'typeorm';
import { Review } from './Review';
import { Author } from './Author';

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  bookId: string;

  @Column({ unique: true })
  title: string;

  @Column({ nullable: true })
  publicationYear: number;

  @Column({ default: false })
  inPublicDomain: boolean;

  @OneToMany(() => Review, (review) => review.book)
  reviews: Relation<Review>[];

  @ManyToMany(() => Author, (author) => author.book)
  author: Relation<Author>[];
}
