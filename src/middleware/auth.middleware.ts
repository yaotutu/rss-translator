import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
	use(req: Request, res: Response, next: NextFunction) {
		// 在这里编写鉴权逻辑
		const authToken = req.headers.authorization;
    console.log(authToken)
    

		if (!authToken || authToken !== "redhat") {
			return res.status(401).json({ message: "Unauthorized" });
		}

		// 鉴权通过，继续执行下一个中间件或路由处理程序
		next();
	}
}
