import { CreateEnsayoDTO } from './dto/ensayos.dto';
import { EnsayosService } from './ensayos.service';
export declare class EnsayosController {
    private readonly ensayosService;
    constructor(ensayosService: EnsayosService);
    createEnsayo(res: any, createEnsayoDTO: CreateEnsayoDTO): Promise<any>;
    getEnsayos(res: any): Promise<any>;
    getAttendancePercentage(res: any): Promise<any>;
    getEnsayo(res: any, id: string): Promise<any>;
    updateEnsayo(res: any, id: string, createEnsayoDTO: CreateEnsayoDTO): Promise<any>;
    updateAsistencia(res: any, id: string, asistencia: any[]): Promise<any>;
    deleteEnsayo(res: any, id: string): Promise<any>;
    getEnsayosByMember(res: any, memberID: string): Promise<any>;
}
