import { Global, Module } from '@nestjs/common';

/** Module commun global pour les providers partagés */
@Global()
@Module({
  providers: [],
  exports: [],
})
export class CommonModule {}
