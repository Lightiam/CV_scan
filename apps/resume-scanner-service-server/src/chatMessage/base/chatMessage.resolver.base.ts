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
import { ChatMessage } from "./ChatMessage";
import { ChatMessageCountArgs } from "./ChatMessageCountArgs";
import { ChatMessageFindManyArgs } from "./ChatMessageFindManyArgs";
import { ChatMessageFindUniqueArgs } from "./ChatMessageFindUniqueArgs";
import { CreateChatMessageArgs } from "./CreateChatMessageArgs";
import { UpdateChatMessageArgs } from "./UpdateChatMessageArgs";
import { DeleteChatMessageArgs } from "./DeleteChatMessageArgs";
import { Resume } from "../../resume/base/Resume";
import { ChatMessageService } from "../chatMessage.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ChatMessage)
export class ChatMessageResolverBase {
  constructor(
    protected readonly service: ChatMessageService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ChatMessage",
    action: "read",
    possession: "any",
  })
  async _chatMessagesMeta(
    @graphql.Args() args: ChatMessageCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ChatMessage])
  @nestAccessControl.UseRoles({
    resource: "ChatMessage",
    action: "read",
    possession: "any",
  })
  async chatMessages(
    @graphql.Args() args: ChatMessageFindManyArgs
  ): Promise<ChatMessage[]> {
    return this.service.chatMessages(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ChatMessage, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ChatMessage",
    action: "read",
    possession: "own",
  })
  async chatMessage(
    @graphql.Args() args: ChatMessageFindUniqueArgs
  ): Promise<ChatMessage | null> {
    const result = await this.service.chatMessage(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ChatMessage)
  @nestAccessControl.UseRoles({
    resource: "ChatMessage",
    action: "create",
    possession: "any",
  })
  async createChatMessage(
    @graphql.Args() args: CreateChatMessageArgs
  ): Promise<ChatMessage> {
    return await this.service.createChatMessage({
      ...args,
      data: {
        ...args.data,

        resume: args.data.resume
          ? {
              connect: args.data.resume,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ChatMessage)
  @nestAccessControl.UseRoles({
    resource: "ChatMessage",
    action: "update",
    possession: "any",
  })
  async updateChatMessage(
    @graphql.Args() args: UpdateChatMessageArgs
  ): Promise<ChatMessage | null> {
    try {
      return await this.service.updateChatMessage({
        ...args,
        data: {
          ...args.data,

          resume: args.data.resume
            ? {
                connect: args.data.resume,
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

  @graphql.Mutation(() => ChatMessage)
  @nestAccessControl.UseRoles({
    resource: "ChatMessage",
    action: "delete",
    possession: "any",
  })
  async deleteChatMessage(
    @graphql.Args() args: DeleteChatMessageArgs
  ): Promise<ChatMessage | null> {
    try {
      return await this.service.deleteChatMessage(args);
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
  @graphql.ResolveField(() => Resume, {
    nullable: true,
    name: "resume",
  })
  @nestAccessControl.UseRoles({
    resource: "Resume",
    action: "read",
    possession: "any",
  })
  async getResume(
    @graphql.Parent() parent: ChatMessage
  ): Promise<Resume | null> {
    const result = await this.service.getResume(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}