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
import { CreateWishlistArgs } from "./CreateWishlistArgs";
import { UpdateWishlistArgs } from "./UpdateWishlistArgs";
import { DeleteWishlistArgs } from "./DeleteWishlistArgs";
import { WishlistCountArgs } from "./WishlistCountArgs";
import { WishlistFindManyArgs } from "./WishlistFindManyArgs";
import { WishlistFindUniqueArgs } from "./WishlistFindUniqueArgs";
import { Wishlist } from "./Wishlist";
import { ListingFindManyArgs } from "../../listing/base/ListingFindManyArgs";
import { Listing } from "../../listing/base/Listing";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { WishlistService } from "../wishlist.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Wishlist)
export class WishlistResolverBase {
  constructor(
    protected readonly service: WishlistService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Wishlist",
    action: "read",
    possession: "any",
  })
  async _wishlistsMeta(
    @graphql.Args() args: WishlistCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Wishlist])
  @nestAccessControl.UseRoles({
    resource: "Wishlist",
    action: "read",
    possession: "any",
  })
  async wishlists(
    @graphql.Args() args: WishlistFindManyArgs
  ): Promise<Wishlist[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Wishlist, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Wishlist",
    action: "read",
    possession: "own",
  })
  async wishlist(
    @graphql.Args() args: WishlistFindUniqueArgs
  ): Promise<Wishlist | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Wishlist)
  @nestAccessControl.UseRoles({
    resource: "Wishlist",
    action: "create",
    possession: "any",
  })
  async createWishlist(
    @graphql.Args() args: CreateWishlistArgs
  ): Promise<Wishlist> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Wishlist)
  @nestAccessControl.UseRoles({
    resource: "Wishlist",
    action: "update",
    possession: "any",
  })
  async updateWishlist(
    @graphql.Args() args: UpdateWishlistArgs
  ): Promise<Wishlist | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Wishlist)
  @nestAccessControl.UseRoles({
    resource: "Wishlist",
    action: "delete",
    possession: "any",
  })
  async deleteWishlist(
    @graphql.Args() args: DeleteWishlistArgs
  ): Promise<Wishlist | null> {
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
  @graphql.ResolveField(() => [Listing], { name: "listings" })
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "read",
    possession: "any",
  })
  async resolveFieldListings(
    @graphql.Parent() parent: Wishlist,
    @graphql.Args() args: ListingFindManyArgs
  ): Promise<Listing[]> {
    const results = await this.service.findListings(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [User], { name: "users" })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async resolveFieldUsers(
    @graphql.Parent() parent: Wishlist,
    @graphql.Args() args: UserFindManyArgs
  ): Promise<User[]> {
    const results = await this.service.findUsers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
