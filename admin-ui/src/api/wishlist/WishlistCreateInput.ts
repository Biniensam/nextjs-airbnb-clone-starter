import { ListingCreateNestedManyWithoutWishlistsInput } from "./ListingCreateNestedManyWithoutWishlistsInput";
import { UserCreateNestedManyWithoutWishlistsInput } from "./UserCreateNestedManyWithoutWishlistsInput";

export type WishlistCreateInput = {
  listings?: ListingCreateNestedManyWithoutWishlistsInput;
  users?: UserCreateNestedManyWithoutWishlistsInput;
};
