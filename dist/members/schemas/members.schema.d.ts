import { Schema, Document, Types } from 'mongoose';
export interface MemberDocument extends Document {
    rut: string;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    instrumento: string;
    correo: string;
    contacto: string;
    tipoUsuario: string;
    comite: string;
    activo: boolean;
}
export declare const MemberSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    rut: string;
    createdAt: Date;
    comite?: string;
    nombre?: string;
    apellidoPaterno?: string;
    apellidoMaterno?: string;
    instrumento?: string;
    correo?: string;
    contacto?: string;
    tipoUsuario?: string;
    activo?: boolean;
}, Document<unknown, {}, import("mongoose").FlatRecord<{
    rut: string;
    createdAt: Date;
    comite?: string;
    nombre?: string;
    apellidoPaterno?: string;
    apellidoMaterno?: string;
    instrumento?: string;
    correo?: string;
    contacto?: string;
    tipoUsuario?: string;
    activo?: boolean;
}>> & import("mongoose").FlatRecord<{
    rut: string;
    createdAt: Date;
    comite?: string;
    nombre?: string;
    apellidoPaterno?: string;
    apellidoMaterno?: string;
    instrumento?: string;
    correo?: string;
    contacto?: string;
    tipoUsuario?: string;
    activo?: boolean;
}> & {
    _id: Types.ObjectId;
}>;
