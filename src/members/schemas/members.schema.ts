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

export const MemberSchema = new Schema({
  rut: { type: String, required: true },
  nombre: String,
  apellidoPaterno: String,
  apellidoMaterno: String,
  instrumento: String,
  correo: String,
  contacto: String,
  tipoUsuario: String,
  comite: String,
  activo: Boolean,
  createdAt: { type: Date, default: Date.now }
});
