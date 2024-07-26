import { Schema, Document, Types } from 'mongoose';

export interface EnsayoDocument extends Document {
  fecha: Date;
  objetivo: string;
  tipo: string;
  repertorios: Types.ObjectId[];
  asistencia: Asistencia[];
}

export interface Asistencia {
  miembroID: Types.ObjectId;
  presente: boolean;
}

export const EnsayoSchema = new Schema({
  fecha: { type: Date, required: true },
  objetivo: { type: String, required: true },
  tipo: { type: String, required: true },
  repertorios: [{ type: Schema.Types.ObjectId, ref: 'Repertorio' }],
  asistencia: [{
    miembroID: { type: Schema.Types.ObjectId, ref: 'Member' },
    presente: { type: Boolean, required: true }
  }]
});
