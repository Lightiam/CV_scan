import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { JobDescriptionResolverBase } from "./base/jobDescription.resolver.base";
import { JobDescription } from "./base/JobDescription";
import { JobDescriptionService } from "./jobDescription.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => JobDescription)
export class JobDescriptionResolver extends JobDescriptionResolverBase {
  constructor(
    protected readonly service: JobDescriptionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
