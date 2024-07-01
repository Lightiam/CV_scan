import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { JobDescriptionModuleBase } from "./base/jobDescription.module.base";
import { JobDescriptionService } from "./jobDescription.service";
import { JobDescriptionController } from "./jobDescription.controller";
import { JobDescriptionGrpcController } from "./jobDescription.grpc.controller";
import { JobDescriptionResolver } from "./jobDescription.resolver";

@Module({
  imports: [JobDescriptionModuleBase, forwardRef(() => AuthModule)],
  controllers: [JobDescriptionController, JobDescriptionGrpcController],
  providers: [JobDescriptionService, JobDescriptionResolver],
  exports: [JobDescriptionService],
})
export class JobDescriptionModule {}
