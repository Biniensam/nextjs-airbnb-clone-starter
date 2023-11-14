/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateListingArgs } from "./CreateListingArgs";
import { UpdateListingArgs } from "./UpdateListingArgs";
import { DeleteListingArgs } from "./DeleteListingArgs";
import { ListingCountArgs } from "./ListingCountArgs";
import { ListingFindManyArgs } from "./ListingFindManyArgs";
import { ListingFindUniqueArgs } from "./ListingFindUniqueArgs";
import { Listing } from "./Listing";
import { User } from "../../user/base/User";
import { Trip } from "../../trip/base/Trip";
import { Wishlist } from "../../wishlist/base/Wishlist";
import { ListingService } from "../listing.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Listing)
export class ListingResolverBase {
  constructor(
    protected readonly service: ListingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "read",
    possession: "any",
  })
  async _listingsMeta(
    @graphql.Args() args: ListingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Listing])
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "read",
    possession: "any",
  })
  async listings(
    @graphql.Args() args: ListingFindManyArgs
  ): Promise<Listing[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Listing, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "read",
    possession: "own",
  })
  async listing(
    @graphql.Args() args: ListingFindUniqueArgs
  ): Promise<Listing | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Listing)
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "create",
    possession: "any",
  })
  async createListing(
    @graphql.Args() args: CreateListingArgs
  ): Promise<Listing> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        listingcreatedby: {
          connect: args.data.listingcreatedby,
        },

        trip: args.data.trip
          ? {
              connect: args.data.trip,
            }
          : undefined,

        wishlist: args.data.wishlist
          ? {
              connect: args.data.wishlist,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Listing)
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "update",
    possession: "any",
  })
  async updateListing(
    @graphql.Args() args: UpdateListingArgs
  ): Promise<Listing | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          listingcreatedby: {
            connect: args.data.listingcreatedby,
          },

          trip: args.data.trip
            ? {
                connect: args.data.trip,
              }
            : undefined,

          wishlist: args.data.wishlist
            ? {
                connect: args.data.wishlist,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Listing)
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "delete",
    possession: "any",
  })
  async deleteListing(
    @graphql.Args() args: DeleteListingArgs
  ): Promise<Listing | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "listingcreatedby",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async resolveFieldListingcreatedby(
    @graphql.Parent() parent: Listing
  ): Promise<User | null> {
    const result = await this.service.getListingcreatedby(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Trip, {
    nullable: true,
    name: "trip",
  })
  @nestAccessControl.UseRoles({
    resource: "Trip",
    action: "read",
    possession: "any",
  })
  async resolveFieldTrip(
    @graphql.Parent() parent: Listing
  ): Promise<Trip | null> {
    const result = await this.service.getTrip(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Wishlist, {
    nullable: true,
    name: "wishlist",
  })
  @nestAccessControl.UseRoles({
    resource: "Wishlist",
    action: "read",
    possession: "any",
  })
  async resolveFieldWishlist(
    @graphql.Parent() parent: Listing
  ): Promise<Wishlist | null> {
    const result = await this.service.getWishlist(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
