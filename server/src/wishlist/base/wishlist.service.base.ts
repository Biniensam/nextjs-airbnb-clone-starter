/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Wishlist, Listing, User } from "@prisma/client";

export class WishlistServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.WishlistCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.WishlistCountArgs>
  ): Promise<number> {
    return this.prisma.wishlist.count(args);
  }

  async findMany<T extends Prisma.WishlistFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.WishlistFindManyArgs>
  ): Promise<Wishlist[]> {
    return this.prisma.wishlist.findMany(args);
  }
  async findOne<T extends Prisma.WishlistFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.WishlistFindUniqueArgs>
  ): Promise<Wishlist | null> {
    return this.prisma.wishlist.findUnique(args);
  }
  async create<T extends Prisma.WishlistCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WishlistCreateArgs>
  ): Promise<Wishlist> {
    return this.prisma.wishlist.create<T>(args);
  }
  async update<T extends Prisma.WishlistUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WishlistUpdateArgs>
  ): Promise<Wishlist> {
    return this.prisma.wishlist.update<T>(args);
  }
  async delete<T extends Prisma.WishlistDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.WishlistDeleteArgs>
  ): Promise<Wishlist> {
    return this.prisma.wishlist.delete(args);
  }

  async findListings(
    parentId: string,
    args: Prisma.ListingFindManyArgs
  ): Promise<Listing[]> {
    return this.prisma.wishlist
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .listings(args);
  }

  async findUsers(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<User[]> {
    return this.prisma.wishlist
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .users(args);
  }
}
