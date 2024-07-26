export interface Meeting {
  id: string;
  fecha: Date;
  participantes: ParticipantDto[];
  temas_discutidos: string[];
  comite: string;
  acta: string;
}

export interface ParticipantDto {
  miembroID: string;
  presente: boolean;
}
