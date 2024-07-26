import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EnsayosController } from './ensayos.controller';
import { EnsayosService } from './ensayos.service';
import { EnsayoSchema } from './schemas/ensayos.schemas';
import { MembersModule } from 'src/members/members.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Ensayo', schema: EnsayoSchema },
      
    ]),
    MembersModule
  ],
  controllers: [EnsayosController],
  providers: [EnsayosService],
  exports: [EnsayosService], // Asegúrate de exportar el servicio si lo necesitas en otro módulo
})
export class EnsayosModule {}