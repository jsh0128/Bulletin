import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Category } from "./Category";
import { Post } from "./Post";

@Entity("post_category")
export class PostCategory {
  @PrimaryGeneratedColumn()
  idx: number;

  @ManyToOne(() => Post, { onDelete: "CASCADE" })
  @JoinColumn({ name: "fk_post_idx" })
  post: Post;

  @Column({ nullable: false })
  fk_post_idx: number;

  @ManyToOne(() => Category, { onDelete: "CASCADE" })
  @JoinColumn({ name: "fk_category_idx" })
  category: Category;

  @Column()
  fk_category_idx: number;
}
