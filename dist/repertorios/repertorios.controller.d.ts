import { CreateRepertorioDTO } from './dto/repertorio.dto';
import { RepertorioService } from './repertorios.service';
export declare class RepertorioController {
    private readonly repertorioService;
    constructor(repertorioService: RepertorioService);
    createRepertorio(file: Express.Multer.File, createRepertorioDTO: any, res: any): Promise<any>;
    getFile(filename: string, res: any): Promise<any>;
    getRepertorios(res: any): Promise<any>;
    getRepertorio(res: any, id: string): Promise<any>;
    updateRepertorio(res: any, id: string, createRepertorioDTO: CreateRepertorioDTO): Promise<any>;
    deleteRepertorio(res: any, id: string): Promise<any>;
    getRepertoriosByMember(res: any, memberID: string): Promise<any>;
}
