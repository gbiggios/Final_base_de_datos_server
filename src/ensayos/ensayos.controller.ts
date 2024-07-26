import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Res,
  HttpStatus,
  Param,
  NotFoundException
} from '@nestjs/common';
import { CreateEnsayoDTO } from './dto/ensayos.dto';
import { EnsayosService } from './ensayos.service';

@Controller('ensayos')
export class EnsayosController {
  constructor(private readonly ensayosService: EnsayosService) {}

  @Post('/create')
  async createEnsayo(@Res() res: any, @Body() createEnsayoDTO: CreateEnsayoDTO) {
    const ensayo = await this.ensayosService.createEnsayo(createEnsayoDTO);
    return res.status(HttpStatus.OK).json(ensayo);
  }

  @Get('/')
  async getEnsayos(@Res() res: any) {
    const ensayos = await this.ensayosService.getEnsayos();
    return res.status(HttpStatus.OK).json(ensayos);
  }

  @Get('/attendance-percentage')
  async getAttendancePercentage(@Res() res: any) {
    const attendanceStats = await this.ensayosService.getAttendancePercentage();
    return res.status(HttpStatus.OK).json(attendanceStats);
  }

  @Get('/:id')
  async getEnsayo(@Res() res: any, @Param('id') id: string) {
    const ensayo = await this.ensayosService.getEnsayo(id);
    if (!ensayo) throw new NotFoundException('Ensayo no encontrado');
    return res.status(HttpStatus.OK).json(ensayo);
  }

  @Put('/update/:id')
  async updateEnsayo(@Res() res: any, @Param('id') id: string, @Body() createEnsayoDTO: CreateEnsayoDTO) {
    const ensayo = await this.ensayosService.updateEnsayo(id, createEnsayoDTO);
    if (!ensayo) throw new NotFoundException('Ensayo no encontrado');
    return res.status(HttpStatus.OK).json(ensayo);
  }

  @Put('/updateAsistencia/:id')
  async updateAsistencia(@Res() res: any, @Param('id') id: string, @Body() asistencia: any[]) {
    const ensayo = await this.ensayosService.updateAsistencia(id, asistencia);
    if (!ensayo) throw new NotFoundException('Ensayo no encontrado');
    return res.status(HttpStatus.OK).json(ensayo);
  }

  @Delete('/delete/:id')
  async deleteEnsayo(@Res() res: any, @Param('id') id: string) {
    const ensayo = await this.ensayosService.deleteEnsayo(id);
    if (!ensayo) throw new NotFoundException('Ensayo no encontrado');
    return res.status(HttpStatus.OK).json(ensayo);
  }

  @Get('/by-member/:memberID')
  async getEnsayosByMember(@Res() res: any, @Param('memberID') memberID: string) {
    const ensayos = await this.ensayosService.getEnsayosByMember(memberID);
    return res.status(HttpStatus.OK).json({ ensayos });
}

}
