import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from "typeorm";
import { Post } from "./Post";
import User from "./User";

@Entity("coment")
export class Coment {
  @PrimaryGeneratedColumn()
  idx!: number;

  @Column()
  content!: string;

  @CreateDateColumn()
  created_at!: Date;

  @ManyToOne(() => Post, { onDelete: "CASCADE" })
  @JoinColumn({ name: "fk_post_idx" })
  post: Post;

  @Column()
  fk_post_idx: number;

  @ManyToOne(() => User, { onDelete: "CASCADE" })
  @JoinColumn({ name: "fk_user_email" })
  user: User;
  // user 연결

  @Column()
  fk_user_email: string;
}
