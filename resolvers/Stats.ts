import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class HealthStats {
  @Field()
  healthy: number;

  @Field()
  erroneous: number;
}

@ObjectType()
export class VendorHealthStats {
  @Field()
  general: HealthStats;
}

@ObjectType()
export class ProtectionStats {
  @Field()
  generalHealth: HealthStats;

  @Field()
  total: number;
}

@ObjectType()
export class AssetStats {
  @Field()
  total: number;
}

@ObjectType()
export class Stats {
  @Field()
  protections: ProtectionStats;

  @Field()
  assets: AssetStats;
}

@ObjectType()
export class Summary {
  @Field()
  stats: Stats;
}
