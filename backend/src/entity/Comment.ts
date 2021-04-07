import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  BaseEntity,
} from "typeorm";
import { Post } from "./Post";
import { User } from "./User";

@Entity("comment")
export class Comment {
  @PrimaryGeneratedColumn()
  idx!: number;

  @Column()
  content!: string;

  @CreateDateColumn()
  created_at!: Date;

  @ManyToOne(() => Post, { onDelete: "CASCADE" })
  @JoinColumn({ name: "fk_post_idx" })
  post: Post;

  @Column({ nullable: false })
  fk_post_idx: number;

  @ManyToOne(() => User, { onDelete: "CASCADE" })
  @JoinColumn({ name: "fk_user_email" })
  user: User;
  // user 연결

  @Column({ nullable: false })
  fk_user_email: string;
}
