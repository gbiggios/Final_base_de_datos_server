import { Module } from '@nestjs/common';
import { EventosService } from './eventos.service';
import { EventosController } from './eventos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EventoSchema } from './schemas/eventos.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Eventos', schema: EventoSchema }]),
  ],
  providers: [EventosService],
  controllers: [EventosController],
  exports: [EventosService],
})
export class EventosModule {}
