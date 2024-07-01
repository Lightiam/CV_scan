import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SkillService } from "./skill.service";
import { SkillGrpcControllerBase } from "./base/skill.grpc.controller.base";

@swagger.ApiTags("skills")
@common.Controller("skills")
export class SkillGrpcController extends SkillGrpcControllerBase {
  constructor(protected readonly service: SkillService) {
    super(service);
  }
}
