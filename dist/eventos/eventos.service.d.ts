import { Eventos } from './interfaces/eventos.interface';
import { CreateEventoDTO } from './dto/eventos.dto';
import { Model } from 'mongoose';
export declare class EventosService {
    private readonly eventoModel;
    constructor(eventoModel: Model<Eventos>);
    createEvento(createEventoDTO: CreateEventoDTO): Promise<Eventos>;
    getEventos(): Promise<Eventos[]>;
    getEvento(eventoID: string): Promise<Eventos>;
    deleteEvento(eventoID: string): Promise<Eventos>;
    updateEvento(eventoID: string, createEventoDTO: CreateEventoDTO): Promise<Eventos>;
    getEventosByMember(memberID: string): Promise<Eventos[]>;
}
