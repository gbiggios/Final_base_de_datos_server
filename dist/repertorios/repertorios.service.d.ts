import { Model } from 'mongoose';
import { CreateRepertorioDTO } from './dto/repertorio.dto';
import { Repertorio } from './schemas/repertorio.schema';
export declare class RepertorioService {
    private readonly repertorioModel;
    constructor(repertorioModel: Model<Repertorio>);
    createRepertorio(createRepertorioDTO: CreateRepertorioDTO): Promise<Repertorio>;
    getRepertorios(): Promise<Repertorio[]>;
    getRepertorio(id: string): Promise<Repertorio>;
    updateRepertorio(id: string, updateRepertorioDTO: CreateRepertorioDTO): Promise<Repertorio>;
    deleteRepertorio(id: string): Promise<any>;
    getRepertoriosByMember(memberID: string): Promise<Repertorio[]>;
}
