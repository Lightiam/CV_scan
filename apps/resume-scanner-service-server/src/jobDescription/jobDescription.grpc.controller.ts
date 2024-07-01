import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { JobDescriptionService } from "./jobDescription.service";
import { JobDescriptionGrpcControllerBase } from "./base/jobDescription.grpc.controller.base";

@swagger.ApiTags("jobDescriptions")
@common.Controller("jobDescriptions")
export class JobDescriptionGrpcController extends JobDescriptionGrpcControllerBase {
  constructor(protected readonly service: JobDescriptionService) {
    super(service);
  }
}
