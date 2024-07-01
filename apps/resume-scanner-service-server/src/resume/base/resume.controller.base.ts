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
import { Request, Response } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { FileInterceptor } from "@nestjs/platform-express";
import { ResumeService } from "../resume.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ResumeCreateInput } from "./ResumeCreateInput";
import { Resume } from "./Resume";
import { ResumeFindManyArgs } from "./ResumeFindManyArgs";
import { ResumeWhereUniqueInput } from "./ResumeWhereUniqueInput";
import { ResumeUpdateInput } from "./ResumeUpdateInput";
import { ChatMessageFindManyArgs } from "../../chatMessage/base/ChatMessageFindManyArgs";
import { ChatMessage } from "../../chatMessage/base/ChatMessage";
import { ChatMessageWhereUniqueInput } from "../../chatMessage/base/ChatMessageWhereUniqueInput";
import { ChatMessageUpdateManyWithoutResumesInput } from "./ChatMessageUpdateManyWithoutResumesInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ResumeControllerBase {
  constructor(
    protected readonly service: ResumeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Resume })
  @nestAccessControl.UseRoles({
    resource: "Resume",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createResume(@common.Body() data: ResumeCreateInput): Promise<Resume> {
    return await this.service.createResume({
      data: data,
      select: {
        createdAt: true,
        email: true,
        file: true,
        id: true,
        name: true,
        skills: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Resume] })
  @ApiNestedQuery(ResumeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Resume",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async resumes(@common.Req() request: Request): Promise<Resume[]> {
    const args = plainToClass(ResumeFindManyArgs, request.query);
    return this.service.resumes({
      ...args,
      select: {
        createdAt: true,
        email: true,
        file: true,
        id: true,
        name: true,
        skills: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Resume })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Resume",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async resume(
    @common.Param() params: ResumeWhereUniqueInput
  ): Promise<Resume | null> {
    const result = await this.service.resume({
      where: params,
      select: {
        createdAt: true,
        email: true,
        file: true,
        id: true,
        name: true,
        skills: true,
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
  @swagger.ApiOkResponse({ type: Resume })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Resume",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateResume(
    @common.Param() params: ResumeWhereUniqueInput,
    @common.Body() data: ResumeUpdateInput
  ): Promise<Resume | null> {
    try {
      return await this.service.updateResume({
        where: params,
        data: data,
        select: {
          createdAt: true,
          email: true,
          file: true,
          id: true,
          name: true,
          skills: true,
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
  @swagger.ApiOkResponse({ type: Resume })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Resume",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteResume(
    @common.Param() params: ResumeWhereUniqueInput
  ): Promise<Resume | null> {
    try {
      return await this.service.deleteResume({
        where: params,
        select: {
          createdAt: true,
          email: true,
          file: true,
          id: true,
          name: true,
          skills: true,
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

  @common.Put(":id/file")
  @common.UseInterceptors(FileInterceptor("file"))
  @swagger.ApiConsumes("multipart/form-data")
  @swagger.ApiBody({
    schema: {
      type: "object",

      properties: {
        file: {
          type: "string",
          format: "binary",
        },
      },
    },
  })
  @swagger.ApiParam({
    name: "id",
    type: "string",
    required: true,
  })
  @swagger.ApiCreatedResponse({
    type: Resume,
    status: "2XX",
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async uploadFile(
    @common.Param()
    params: ResumeWhereUniqueInput,
    @common.UploadedFile()
    file: Express.Multer.File
  ): Promise<Resume> {
    return this.service.uploadFile(
      {
        where: params,
      },
      Object.assign(file, {
        filename: file.originalname,
      })
    );
  }

  @common.Get(":id/file")
  @swagger.ApiParam({
    name: "id",
    type: "string",
    required: true,
  })
  @swagger.ApiOkResponse({
    type: common.StreamableFile,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async downloadFile(
    @common.Param()
    params: ResumeWhereUniqueInput,
    @common.Res({
      passthrough: true,
    })
    res: Response
  ): Promise<common.StreamableFile> {
    const result = await this.service.downloadFile({
      where: params,
    });

    if (result === null) {
      throw new errors.NotFoundException(
        "No resource was found for ",
        JSON.stringify(params)
      );
    }

    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${result.filename}`
    );
    res.setHeader("Content-Type", result.mimetype);
    return result.stream;
  }

  @common.Delete(":id/file")
  @swagger.ApiOkResponse({
    type: Resume,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async deleteFile(
    @common.Param()
    params: ResumeWhereUniqueInput
  ): Promise<Resume> {
    return this.service.deleteFile({
      where: params,
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/chatMessages")
  @ApiNestedQuery(ChatMessageFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ChatMessage",
    action: "read",
    possession: "any",
  })
  async findChatMessages(
    @common.Req() request: Request,
    @common.Param() params: ResumeWhereUniqueInput
  ): Promise<ChatMessage[]> {
    const query = plainToClass(ChatMessageFindManyArgs, request.query);
    const results = await this.service.findChatMessages(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        message: true,

        resume: {
          select: {
            id: true,
          },
        },

        sender: true,
        timestamp: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/chatMessages")
  @nestAccessControl.UseRoles({
    resource: "Resume",
    action: "update",
    possession: "any",
  })
  async connectChatMessages(
    @common.Param() params: ResumeWhereUniqueInput,
    @common.Body() body: ChatMessageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      chatMessages: {
        connect: body,
      },
    };
    await this.service.updateResume({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/chatMessages")
  @nestAccessControl.UseRoles({
    resource: "Resume",
    action: "update",
    possession: "any",
  })
  async updateChatMessages(
    @common.Param() params: ResumeWhereUniqueInput,
    @common.Body() body: ChatMessageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      chatMessages: {
        set: body,
      },
    };
    await this.service.updateResume({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/chatMessages")
  @nestAccessControl.UseRoles({
    resource: "Resume",
    action: "update",
    possession: "any",
  })
  async disconnectChatMessages(
    @common.Param() params: ResumeWhereUniqueInput,
    @common.Body() body: ChatMessageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      chatMessages: {
        disconnect: body,
      },
    };
    await this.service.updateResume({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/resume/formatted")
  @swagger.ApiOkResponse({
    type: Resume,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async GenerateFormattedResume(
    @common.Body()
    body: ResumeCreateInput
  ): Promise<Resume> {
    return this.service.GenerateFormattedResume(body);
  }

  @common.Get("/chat/:resumeId/messages")
  @swagger.ApiOkResponse({
    type: ChatMessageUpdateManyWithoutResumesInput,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async GetChatMessages(
    @common.Body()
    body: ResumeCreateInput
  ): Promise<ChatMessageUpdateManyWithoutResumesInput[]> {
    return this.service.GetChatMessages(body);
  }

  @common.Post("/resume/match")
  @swagger.ApiOkResponse({
    type: Boolean,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async MatchResumeWithJobDescription(
    @common.Body()
    body: ResumeCreateInput
  ): Promise<boolean> {
    return this.service.MatchResumeWithJobDescription(body);
  }

  @common.Get("/resume/score")
  @swagger.ApiOkResponse({
    type: Number,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async ScoreResume(
    @common.Body()
    body: ResumeCreateInput
  ): Promise<number> {
    return this.service.ScoreResume(body);
  }

  @common.Post("/chat/send")
  @swagger.ApiOkResponse({
    type: ChatMessageUpdateManyWithoutResumesInput,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async SendChatMessage(
    @common.Body()
    body: ResumeCreateInput
  ): Promise<ChatMessageUpdateManyWithoutResumesInput> {
    return this.service.SendChatMessage(body);
  }

  @common.Post("/resume/add-skills")
  @swagger.ApiOkResponse({
    type: Resume,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async SuggestAndAddSkills(
    @common.Body()
    body: ResumeCreateInput
  ): Promise<Resume> {
    return this.service.SuggestAndAddSkills(body);
  }

  @common.Post("/resume/upload")
  @swagger.ApiOkResponse({
    type: Resume,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async UploadResume(
    @common.Body()
    body: ResumeCreateInput
  ): Promise<Resume> {
    return this.service.UploadResume(body);
  }
}
