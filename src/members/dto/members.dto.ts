import { TipoUsuario } from './tipo-usuario';

export class CreateMemberDTO {
    readonly rut: string;
    readonly nombre: string;
    readonly apellidoPaterno: string;
    readonly apellidoMaterno: string;
    readonly instrumento: string; // Campo para el instrumento del miembro
    readonly correo: string;
    readonly contacto: string;
    readonly tipoUsuario: TipoUsuario; // Enum TipoUsuario para definir el tipo de usuario
    readonly comite: string;
    readonly activo: boolean;
    readonly createdAt: Date;
}
