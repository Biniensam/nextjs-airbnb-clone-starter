import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TripWhereUniqueInput } from "../trip/TripWhereUniqueInput";
import { WishlistWhereUniqueInput } from "../wishlist/WishlistWhereUniqueInput";

export type ListingUpdateInput = {
  description?: string;
  listingcreatedby?: UserWhereUniqueInput;
  locationData?: InputJsonValue;
  locationType?: string;
  mapData?: InputJsonValue;
  photos?: InputJsonValue;
  placeAminites?: InputJsonValue;
  placeSpace?: InputJsonValue;
  placeType?: string;
  price?: number | null;
  title?: string;
  trip?: TripWhereUniqueInput | null;
  wishlist?: WishlistWhereUniqueInput | null;
};
