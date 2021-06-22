import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity("user")
export default class User {
  @PrimaryColumn()
  email: string;
  // !이면 null 불가

  @Column({
    length: 255,
  })
  name!: string;
  // 이름

  @Column({
    length: 255,
    select: false,
    nullable: true,
  })
  password: string;
  // 비밀번호

  @Column({
    length: 200,
    nullable: true,
  })
  profile_img: string;
  // 프로필 사진

  @Column({ default: false })
  is_github: boolean;

  @Column({ default: false })
  is_admin: boolean;
  // 어드민인지 확인
}
