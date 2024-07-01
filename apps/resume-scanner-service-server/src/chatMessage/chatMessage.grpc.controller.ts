import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ChatMessageService } from "./chatMessage.service";
import { ChatMessageGrpcControllerBase } from "./base/chatMessage.grpc.controller.base";

@swagger.ApiTags("chatMessages")
@common.Controller("chatMessages")
export class ChatMessageGrpcController extends ChatMessageGrpcControllerBase {
  constructor(protected readonly service: ChatMessageService) {
    super(service);
  }
}
