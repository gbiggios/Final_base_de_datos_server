import { Document } from "mongoose";
export interface Eventos extends Document {
    fecha: Date;
    descripcion: string;
    lugar: string;
    tipo: 'concierto' | 'cumpleaños' | 'charla' | 'master class';
}
