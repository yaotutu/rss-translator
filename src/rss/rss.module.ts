import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { RssService } from "./rss.service";
import { RssController } from "./rss.controller";
import { AuthMiddleware } from "src/middleware/auth.middleware";
import { TranslationService } from './translation/translation.service';

@Module({
	controllers: [RssController],
	providers: [RssService, TranslationService],
})
export class RssModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer.apply(AuthMiddleware).forRoutes('rss');
    }
}
