import { Schema } from 'mongoose';
export declare const EventoSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    fecha: Date;
    tipo: "concierto" | "cumpleaños" | "charla" | "master class";
    descripcion: string;
    lugar: string;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    fecha: Date;
    tipo: "concierto" | "cumpleaños" | "charla" | "master class";
    descripcion: string;
    lugar: string;
}>> & import("mongoose").FlatRecord<{
    fecha: Date;
    tipo: "concierto" | "cumpleaños" | "charla" | "master class";
    descripcion: string;
    lugar: string;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>;
