import { User } from "../user/User";
import { JsonValue } from "type-fest";
import { Trip } from "../trip/Trip";
import { Wishlist } from "../wishlist/Wishlist";

export type Listing = {
  createdAt: Date;
  id: string;
  listingCreatedBy?: User | null;
  locationData: JsonValue;
  locationType: string;
  mapData: JsonValue;
  photos: JsonValue;
  placeAmeneties: JsonValue;
  placeSpace: JsonValue;
  placedType: string;
  trips?: Array<Trip>;
  updatedAt: Date;
  wishLists?: Array<Wishlist>;
};
