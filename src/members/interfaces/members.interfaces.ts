import { Document } from "mongoose";

export interface Members extends Document {
    id: string; // ID generado por Mongoose
    rut: string;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    instrumento: string;
    correo: string;
    contacto: string;
    tipoUsuario: 'presidente' | 'directiva' | 'comite' | 'miembro'; // Definición literal de tipos de usuario
    comite: string;
    activo: boolean;
    createdAt: Date;
}
