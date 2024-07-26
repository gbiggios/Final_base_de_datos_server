import { TipoEvento } from './tipo-evento';
export declare class CreateEventoDTO {
    readonly fecha: Date;
    readonly descripcion: string;
    readonly lugar: string;
    readonly tipo: TipoEvento;
}
