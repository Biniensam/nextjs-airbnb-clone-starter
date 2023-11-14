import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { TripWhereUniqueInput } from "../trip/TripWhereUniqueInput";
import { WishlistWhereUniqueInput } from "../wishlist/WishlistWhereUniqueInput";

export type ListingWhereInput = {
  description?: StringFilter;
  id?: StringFilter;
  listingcreatedby?: UserWhereUniqueInput;
  locationData?: JsonFilter;
  locationType?: StringFilter;
  mapData?: JsonFilter;
  photos?: JsonFilter;
  placeAminites?: JsonFilter;
  placeSpace?: JsonFilter;
  placeType?: StringFilter;
  price?: FloatNullableFilter;
  title?: StringFilter;
  trip?: TripWhereUniqueInput;
  wishlist?: WishlistWhereUniqueInput;
};
