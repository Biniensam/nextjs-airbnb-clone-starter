import { Listing } from "../listing/Listing";
import { User } from "../user/User";

export type Wishlist = {
  createdAt: Date;
  id: string;
  listings?: Array<Listing>;
  updatedAt: Date;
  users?: Array<User>;
};
