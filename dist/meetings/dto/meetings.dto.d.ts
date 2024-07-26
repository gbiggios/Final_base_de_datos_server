export declare class CreateMeetingDto {
    readonly fecha: Date;
    readonly participantes: ParticipantDto[];
    readonly temas_discutidos: string[];
    readonly comite: string;
    readonly acta: string;
}
export declare class ParticipantDto {
    readonly miembroID: string;
    readonly presente: boolean;
}
