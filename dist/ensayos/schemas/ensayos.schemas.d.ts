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
export declare const EnsayoSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    fecha: Date;
    objetivo: string;
    tipo: string;
    repertorios: Types.ObjectId[];
    asistencia: Types.DocumentArray<{
        presente: boolean;
        miembroID?: Types.ObjectId;
    }>;
}, Document<unknown, {}, import("mongoose").FlatRecord<{
    fecha: Date;
    objetivo: string;
    tipo: string;
    repertorios: Types.ObjectId[];
    asistencia: Types.DocumentArray<{
        presente: boolean;
        miembroID?: Types.ObjectId;
    }>;
}>> & import("mongoose").FlatRecord<{
    fecha: Date;
    objetivo: string;
    tipo: string;
    repertorios: Types.ObjectId[];
    asistencia: Types.DocumentArray<{
        presente: boolean;
        miembroID?: Types.ObjectId;
    }>;
}> & {
    _id: Types.ObjectId;
}>;
