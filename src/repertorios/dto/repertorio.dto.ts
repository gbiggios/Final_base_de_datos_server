import { IsBoolean, IsNotEmpty, IsString, IsArray, ArrayNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class InstrumentoAsignadoDTO {
  @IsString()
  @IsNotEmpty()
  instrumento: string;

  @IsString()
  @IsNotEmpty()
  miembro: string;
}

export class CreateRepertorioDTO {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  compositor: string;

  @IsBoolean()
  @IsNotEmpty()
  existenciaPartitura: boolean;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  instrumentos: string[];

  @IsString()
  @IsNotEmpty()
  tipo: string; // 'tutti', 'vientos', 'cuerda', 'camara'

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InstrumentoAsignadoDTO)
  asignaciones: InstrumentoAsignadoDTO[];

  @IsString()
  @IsNotEmpty()
  partitura: string; 
}
