import { ListingUpdateManyWithoutTripsInput } from "./ListingUpdateManyWithoutTripsInput";
import { InputJsonValue } from "../../types";
import { UserUpdateManyWithoutTripsInput } from "./UserUpdateManyWithoutTripsInput";

export type TripUpdateInput = {
  listings?: ListingUpdateManyWithoutTripsInput;
  tripinfo?: InputJsonValue;
  users?: UserUpdateManyWithoutTripsInput;
};
