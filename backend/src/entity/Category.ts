import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("category")
export class Category {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column({ length: 255, nullable: false })
  category!: string;
}
