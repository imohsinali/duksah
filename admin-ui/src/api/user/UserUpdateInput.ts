import { ListingUpdateManyWithoutUsersInput } from "./ListingUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TripUpdateManyWithoutUsersInput } from "./TripUpdateManyWithoutUsersInput";
import { WishlistUpdateManyWithoutUsersInput } from "./WishlistUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  description?: string;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  listings?: ListingUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  trips?: TripUpdateManyWithoutUsersInput;
  username?: string;
  wishLists?: WishlistUpdateManyWithoutUsersInput;
};