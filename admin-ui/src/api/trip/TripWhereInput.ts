import { StringFilter } from "../../util/StringFilter";
import { ListingListRelationFilter } from "../listing/ListingListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type TripWhereInput = {
  id?: StringFilter;
  listings?: ListingListRelationFilter;
  tripinfo?: JsonFilter;
  users?: UserListRelationFilter;
};
