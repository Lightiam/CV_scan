import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ["resume", "jobdescription", "skill", "chatmessage", "user"],
    protoPath: [
      "src/resume/resume.proto",
      "src/jobdescription/jobdescription.proto",
      "src/skill/skill.proto",
      "src/chatmessage/chatmessage.proto",
      "src/user/user.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
