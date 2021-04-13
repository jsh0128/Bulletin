import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("post_category")
export class PostCategory {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column()
  post_idx: number;

  @Column()
  category_idx: number;
}
