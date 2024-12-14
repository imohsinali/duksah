import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TripCreateNestedManyWithoutListingsInput } from "./TripCreateNestedManyWithoutListingsInput";
import { WishlistCreateNestedManyWithoutListingsInput } from "./WishlistCreateNestedManyWithoutListingsInput";

export type ListingCreateInput = {
  listingCreatedBy?: UserWhereUniqueInput | null;
  locationData?: InputJsonValue;
  locationType: string;
  mapData: InputJsonValue;
  photos: InputJsonValue;
  placeAmeneties: InputJsonValue;
  placeSpace?: InputJsonValue;
  placedType: string;
  trips?: TripCreateNestedManyWithoutListingsInput;
  wishLists?: WishlistCreateNestedManyWithoutListingsInput;
};
