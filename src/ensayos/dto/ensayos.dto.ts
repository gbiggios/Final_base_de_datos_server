// ensayo.dto.ts
import { IsNotEmpty, IsDateString, IsArray } from 'class-validator';

export class CreateEnsayoDTO {
  @IsNotEmpty()
  @IsDateString()
  fecha: Date;

  @IsNotEmpty()
  objetivo: string;

  @IsNotEmpty()
  tipo: string;

  @IsArray()
  repertorios: string[];

  @IsArray()
  asistencia: CreateAsistenciaDTO[];
}

export class CreateAsistenciaDTO {
  @IsNotEmpty()
  miembroID: string;

  @IsNotEmpty()
  presente: boolean;
}
