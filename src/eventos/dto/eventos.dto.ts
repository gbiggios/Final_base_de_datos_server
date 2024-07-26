import { IsNotEmpty, IsDateString, IsArray } from 'class-validator';
import { TipoEvento } from './tipo-evento';

export class CreateEventoDTO {
    @IsNotEmpty()
    @IsDateString()
    readonly fecha: Date;

    @IsNotEmpty()
    readonly descripcion: string;

    @IsNotEmpty()
    readonly lugar: string;

    @IsNotEmpty()
    readonly tipo:TipoEvento


}
