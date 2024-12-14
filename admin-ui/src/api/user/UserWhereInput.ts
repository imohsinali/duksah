import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ListingListRelationFilter } from "../listing/ListingListRelationFilter";
import { TripListRelationFilter } from "../trip/TripListRelationFilter";
import { WishlistListRelationFilter } from "../wishlist/WishlistListRelationFilter";

export type UserWhereInput = {
  description?: StringFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  listings?: ListingListRelationFilter;
  trips?: TripListRelationFilter;
  username?: StringFilter;
  wishLists?: WishlistListRelationFilter;
};
