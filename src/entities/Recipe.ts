import { RelayedConnection } from "auto-relay";
import { Field, ObjectType } from "type-graphql";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
@ObjectType()
export class Recipe {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @ManyToOne(
    (type) => User,
    (u) => u.recipes
  )
  user: User;
}
