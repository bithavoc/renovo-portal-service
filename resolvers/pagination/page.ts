import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Page<T> {
  items: T[];

  @Field()
  totalItems: number;

  @Field()
  totalPages: number;
}
