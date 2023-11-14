import { ListingCreateNestedManyWithoutTripsInput } from "./ListingCreateNestedManyWithoutTripsInput";
import { InputJsonValue } from "../../types";
import { UserCreateNestedManyWithoutTripsInput } from "./UserCreateNestedManyWithoutTripsInput";

export type TripCreateInput = {
  listings?: ListingCreateNestedManyWithoutTripsInput;
  tripinfo: InputJsonValue;
  users?: UserCreateNestedManyWithoutTripsInput;
};
