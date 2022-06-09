import { Field, InputType } from "type-graphql";

@InputType()
export class PageRequest {
  @Field()
  itemsPerPage: number;
  @Field()
  index: number;
}