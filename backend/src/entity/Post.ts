import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  BaseEntity,
  RelationId,
} from "typeorm";
import { Category } from "./Category";
import User from "./User";

@Entity("post")
export class Post {
  @PrimaryGeneratedColumn()
  idx: number;
  // 게시글 번호

  @Column()
  title!: string;
  // 제목

  @Column({ type: "text" })
  content!: string;
  // 내용

  @CreateDateColumn()
  created_at!: Date;
  // 글 올린 시간

  @Column({ default: 0 })
  views: number;
  // 조회수

  @ManyToOne(() => User, { onDelete: "CASCADE" })
  @JoinColumn({ name: "fk_user_email" })
  user: User;
  // user 연결

  @Column({ nullable: false })
  fk_user_name: string;
  // user이름 저장
  @Column({ nullable: false })
  fk_user_email: string;

  @Column({ nullable: true })
  fk_category_name: string;
  // categroyIdx를 저장
}
