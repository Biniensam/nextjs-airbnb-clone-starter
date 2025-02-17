/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { TripService } from "../trip.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TripCreateInput } from "./TripCreateInput";
import { TripWhereInput } from "./TripWhereInput";
import { TripWhereUniqueInput } from "./TripWhereUniqueInput";
import { TripFindManyArgs } from "./TripFindManyArgs";
import { TripUpdateInput } from "./TripUpdateInput";
import { Trip } from "./Trip";
import { ListingFindManyArgs } from "../../listing/base/ListingFindManyArgs";
import { Listing } from "../../listing/base/Listing";
import { ListingWhereUniqueInput } from "../../listing/base/ListingWhereUniqueInput";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TripControllerBase {
  constructor(
    protected readonly service: TripService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Trip })
  @nestAccessControl.UseRoles({
    resource: "Trip",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: TripCreateInput): Promise<Trip> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        id: true,
        tripinfo: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Trip] })
  @ApiNestedQuery(TripFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Trip",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Trip[]> {
    const args = plainToClass(TripFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,
        tripinfo: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Trip })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Trip",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: TripWhereUniqueInput
  ): Promise<Trip | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,
        tripinfo: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Trip })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Trip",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: TripWhereUniqueInput,
    @common.Body() data: TripUpdateInput
  ): Promise<Trip | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          tripinfo: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Trip })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Trip",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: TripWhereUniqueInput
  ): Promise<Trip | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,
          tripinfo: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/listings")
  @ApiNestedQuery(ListingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "read",
    possession: "any",
  })
  async findManyListings(
    @common.Req() request: Request,
    @common.Param() params: TripWhereUniqueInput
  ): Promise<Listing[]> {
    const query = plainToClass(ListingFindManyArgs, request.query);
    const results = await this.service.findListings(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,
        id: true,

        listingcreatedby: {
          select: {
            id: true,
          },
        },

        locationData: true,
        locationType: true,
        mapData: true,
        photos: true,
        placeAminites: true,
        placeSpace: true,
        placeType: true,
        price: true,
        title: true,

        trip: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        wishlist: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/listings")
  @nestAccessControl.UseRoles({
    resource: "Trip",
    action: "update",
    possession: "any",
  })
  async connectListings(
    @common.Param() params: TripWhereUniqueInput,
    @common.Body() body: ListingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      listings: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/listings")
  @nestAccessControl.UseRoles({
    resource: "Trip",
    action: "update",
    possession: "any",
  })
  async updateListings(
    @common.Param() params: TripWhereUniqueInput,
    @common.Body() body: ListingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      listings: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/listings")
  @nestAccessControl.UseRoles({
    resource: "Trip",
    action: "update",
    possession: "any",
  })
  async disconnectListings(
    @common.Param() params: TripWhereUniqueInput,
    @common.Body() body: ListingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      listings: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/users")
  @ApiNestedQuery(UserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async findManyUsers(
    @common.Req() request: Request,
    @common.Param() params: TripWhereUniqueInput
  ): Promise<User[]> {
    const query = plainToClass(UserFindManyArgs, request.query);
    const results = await this.service.findUsers(params.id, {
      ...query,
      select: {
        createdAt: true,
        firstName: true,
        id: true,
        lastName: true,

        listings: {
          select: {
            id: true,
          },
        },

        roles: true,

        trip: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        username: true,

        wishlist: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/users")
  @nestAccessControl.UseRoles({
    resource: "Trip",
    action: "update",
    possession: "any",
  })
  async connectUsers(
    @common.Param() params: TripWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/users")
  @nestAccessControl.UseRoles({
    resource: "Trip",
    action: "update",
    possession: "any",
  })
  async updateUsers(
    @common.Param() params: TripWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/users")
  @nestAccessControl.UseRoles({
    resource: "Trip",
    action: "update",
    possession: "any",
  })
  async disconnectUsers(
    @common.Param() params: TripWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
