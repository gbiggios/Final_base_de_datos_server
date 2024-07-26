import { TipoUsuario } from './tipo-usuario';
export declare class CreateMemberDTO {
    readonly rut: string;
    readonly nombre: string;
    readonly apellidoPaterno: string;
    readonly apellidoMaterno: string;
    readonly instrumento: string;
    readonly correo: string;
    readonly contacto: string;
    readonly tipoUsuario: TipoUsuario;
    readonly comite: string;
    readonly activo: boolean;
    readonly createdAt: Date;
}
