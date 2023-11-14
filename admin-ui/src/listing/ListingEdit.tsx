import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { TripTitle } from "../trip/TripTitle";
import { WishlistTitle } from "../wishlist/WishlistTitle";

export const ListingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput
          source="listingcreatedby.id"
          reference="User"
          label="Listingcreatedby"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <div />
        <TextInput label="locationType" source="locationType" />
        <div />
        <div />
        <div />
        <div />
        <TextInput label="placeType" source="placeType" />
        <NumberInput label="Price" source="price" />
        <TextInput label="title" source="title" />
        <ReferenceInput source="trip.id" reference="Trip" label="trips">
          <SelectInput optionText={TripTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="wishlist.id"
          reference="Wishlist"
          label="Wishlists"
        >
          <SelectInput optionText={WishlistTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
