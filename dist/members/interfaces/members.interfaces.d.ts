import { Document } from "mongoose";
export interface Members extends Document {
    id: string;
    rut: string;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    instrumento: string;
    correo: string;
    contacto: string;
    tipoUsuario: 'presidente' | 'directiva' | 'comite' | 'miembro';
    comite: string;
    activo: boolean;
    createdAt: Date;
}
