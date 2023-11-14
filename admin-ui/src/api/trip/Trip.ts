import { Listing } from "../listing/Listing";
import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Trip = {
  createdAt: Date;
  id: string;
  listings?: Array<Listing>;
  tripinfo: JsonValue;
  updatedAt: Date;
  users?: Array<User>;
};
