import { EventosService } from './eventos.service';
import { CreateEventoDTO } from './dto/eventos.dto';
export declare class EventosController {
    private eventoService;
    constructor(eventoService: EventosService);
    createEvento(res: any, createEventoDTO: CreateEventoDTO): Promise<any>;
    getEventos(res: any): Promise<any>;
    getEvento(res: any, eventoID: any): Promise<any>;
    deleteEvento(res: any, eventoID: any): Promise<any>;
    updateEvento(res: any, CreateEventoDTO: CreateEventoDTO, eventoID: any): Promise<any>;
    getEventosByMember(res: any, memberID: string): Promise<any>;
}
