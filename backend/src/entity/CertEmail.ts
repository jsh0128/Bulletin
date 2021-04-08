import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("eamil_code")
export default class EmailCode {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column()
  email: string;

  @Column()
  certCode: string;

  @Column({ default: false })
  cert: boolean;
}
