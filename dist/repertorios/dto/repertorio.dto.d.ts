declare class InstrumentoAsignadoDTO {
    instrumento: string;
    miembro: string;
}
export declare class CreateRepertorioDTO {
    nombre: string;
    compositor: string;
    existenciaPartitura: boolean;
    instrumentos: string[];
    tipo: string;
    asignaciones: InstrumentoAsignadoDTO[];
    partitura: string;
}
export {};
