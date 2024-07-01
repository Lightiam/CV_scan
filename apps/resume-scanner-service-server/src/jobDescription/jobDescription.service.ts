import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JobDescriptionServiceBase } from "./base/jobDescription.service.base";

@Injectable()
export class JobDescriptionService extends JobDescriptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
