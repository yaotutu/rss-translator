import { Injectable } from '@nestjs/common';

@Injectable()
export class TranslationService {
  getTranslation(): string {
    return 'Hello World!';
  }
}
