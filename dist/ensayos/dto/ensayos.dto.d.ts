export declare class CreateEnsayoDTO {
    fecha: Date;
    objetivo: string;
    tipo: string;
    repertorios: string[];
    asistencia: CreateAsistenciaDTO[];
}
export declare class CreateAsistenciaDTO {
    miembroID: string;
    presente: boolean;
}
