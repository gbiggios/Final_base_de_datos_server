// ensayo.interface.ts
import { Document } from 'mongoose';

export interface Ensayo extends Document {
  fecha: Date;
  objetivo: string;
  tipo: string;
  repertorios: string[];
  asistencia: Asistencia[];
}

export interface Asistencia {
  miembroID: string;
  presente: boolean;
}
