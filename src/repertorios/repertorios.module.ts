import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RepertorioService } from './repertorios.service';
import { RepertorioController } from './repertorios.controller';
import { Repertorio, RepertorioSchema } from './schemas/repertorio.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Repertorio.name, schema: RepertorioSchema }])
  ],
  providers: [RepertorioService],
  controllers: [RepertorioController]
})
export class RepertorioModule {}
