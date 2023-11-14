import { ListingUpdateManyWithoutWishlistsInput } from "./ListingUpdateManyWithoutWishlistsInput";
import { UserUpdateManyWithoutWishlistsInput } from "./UserUpdateManyWithoutWishlistsInput";

export type WishlistUpdateInput = {
  listings?: ListingUpdateManyWithoutWishlistsInput;
  users?: UserUpdateManyWithoutWishlistsInput;
};
