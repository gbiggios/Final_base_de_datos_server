import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CreateMemberDTO } from 'src/members/dto/members.dto';

@Schema()
export class Meeting {
  @Prop({ required: true })
  fecha: Date;

  @Prop({ required: true })
  comite: string;

  @Prop({ required: true })
  acta: string;

  @Prop({ required: true })
  temas_discutidos: string[];

  @Prop({ required: true, type: [{ miembroID: String, presente: Boolean }] })
  participantes: CreateMemberDTO[];
}

export type MeetingDocument = Meeting & Document;
export const MeetingSchema = SchemaFactory.createForClass(Meeting);
