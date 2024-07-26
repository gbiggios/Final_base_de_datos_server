import { Model } from 'mongoose';
import { EnsayoDocument } from './schemas/ensayos.schemas';
import { CreateEnsayoDTO } from './dto/ensayos.dto';
export declare class EnsayosService {
    private readonly ensayoModel;
    constructor(ensayoModel: Model<EnsayoDocument>);
    createEnsayo(createEnsayoDTO: CreateEnsayoDTO): Promise<EnsayoDocument>;
    getEnsayos(): Promise<EnsayoDocument[]>;
    getEnsayo(id: string): Promise<EnsayoDocument>;
    updateEnsayo(id: string, createEnsayoDTO: CreateEnsayoDTO): Promise<EnsayoDocument>;
    deleteEnsayo(id: string): Promise<EnsayoDocument>;
    updateAsistencia(id: string, asistencia: any[]): Promise<EnsayoDocument>;
    getEnsayosByMember(memberID: string): Promise<EnsayoDocument[]>;
    getAttendancePercentage(): Promise<any[]>;
}
