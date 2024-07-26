import { IsNotEmpty, IsDateString, IsArray, IsString, IsBoolean } from 'class-validator';

export class CreateMeetingDto {
  @IsNotEmpty()
  @IsDateString()
  readonly fecha: Date;

  @IsNotEmpty()
  @IsArray()
  readonly participantes: ParticipantDto[];

  @IsNotEmpty()
  @IsArray()
  readonly temas_discutidos: string[];

  @IsNotEmpty()
  @IsString()
  readonly comite: string;

  @IsNotEmpty()
  @IsString()
  readonly acta: string; // Nuevo campo `acta`
}

export class ParticipantDto {
  @IsNotEmpty()
  @IsString()
  readonly miembroID: string;

  @IsNotEmpty()
  @IsBoolean()
  readonly presente: boolean;
}
