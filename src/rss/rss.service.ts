import { Injectable } from "@nestjs/common";
import { CreateRssDto } from "./dto/create-rss.dto";
import { UpdateRssDto } from "./dto/update-rss.dto";
// import { PrismaClient } from "@prisma/client";

@Injectable()
export class RssService {
	async create(createRssDto: CreateRssDto) {
    console.log(createRssDto)
    
    const { rssSource,originalLanguage = 'EN',targetLanguage = 'ZH' } = createRssDto
    console.log(rssSource,originalLanguage,targetLanguage)
    
		// const prisma = new PrismaClient();
		// const newRss = await prisma.rss.create({
		// 	data: {
		// 		customId: "customId456", // 用户自定义的 id 值
		// 		originalLanguage: "English",
		// 		targetLanguage: "Spanish",
		// 	},
		// });

		return "This action adds a new rss";
	}

	findAll() {
		return `This action returns all rss`;
	}

	findOne(id: number) {
		return `This action returns a #${id} rss`;
	}

	update(id: number, updateRssDto: UpdateRssDto) {
		return `This action updates a #${id} rss`;
	}

	remove(id: number) {
		return `This action removes a #${id} rss`;
	}
}
