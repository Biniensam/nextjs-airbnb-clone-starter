/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ListingUpdateManyWithoutTripsInput } from "./ListingUpdateManyWithoutTripsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { UserUpdateManyWithoutTripsInput } from "./UserUpdateManyWithoutTripsInput";

@InputType()
class TripUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ListingUpdateManyWithoutTripsInput,
  })
  @ValidateNested()
  @Type(() => ListingUpdateManyWithoutTripsInput)
  @IsOptional()
  @Field(() => ListingUpdateManyWithoutTripsInput, {
    nullable: true,
  })
  listings?: ListingUpdateManyWithoutTripsInput;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  tripinfo?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => UserUpdateManyWithoutTripsInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateManyWithoutTripsInput)
  @IsOptional()
  @Field(() => UserUpdateManyWithoutTripsInput, {
    nullable: true,
  })
  users?: UserUpdateManyWithoutTripsInput;
}

export { TripUpdateInput as TripUpdateInput };
