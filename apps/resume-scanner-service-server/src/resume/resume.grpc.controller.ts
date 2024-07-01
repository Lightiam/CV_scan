import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ResumeService } from "./resume.service";
import { ResumeGrpcControllerBase } from "./base/resume.grpc.controller.base";

@swagger.ApiTags("resumes")
@common.Controller("resumes")
export class ResumeGrpcController extends ResumeGrpcControllerBase {
  constructor(protected readonly service: ResumeService) {
    super(service);
  }
}
