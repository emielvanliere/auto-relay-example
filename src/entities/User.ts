import { RelayedConnection } from "auto-relay";
import { Field, ObjectType } from "type-graphql";
import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity";
import { Recipe } from "./Recipe";

@Entity()
@ObjectType()
export class User {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  // @OneToMany(
  //   (type) => Recipe,
  //   (r) => r.user
  // )
  @RelayedConnection(() => Recipe)
  recipes!: Recipe[];
}
