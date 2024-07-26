import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
  Get,
  Res,
  HttpStatus,
  Param,
  NotFoundException,
  Delete,
  Put
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { CreateRepertorioDTO } from './dto/repertorio.dto';
import { RepertorioService } from './repertorios.service';
import { extname, join } from 'path';
import { of } from 'rxjs';

@Controller('repertorios')
export class RepertorioController {
  constructor(private readonly repertorioService: RepertorioService) {}

  @Post('/create')
@UseInterceptors(FileInterceptor('partitura', {
  storage: diskStorage({
    destination: './uploads', // Directorio de destino para los archivos subidos
    filename: (req, file, cb) => {
      // Renombrar el archivo para evitar conflictos de nombres
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const ext = extname(file.originalname);
      const filename = `${file.fieldname}-${uniqueSuffix}${ext}`;
      cb(null, filename);
    }
  })
}))
async createRepertorio(
  @UploadedFile() file: Express.Multer.File,
  @Body() createRepertorioDTO: any,
  @Res() res: any
) {
  try {
    // Convirtiendo campos específicos que fueron enviados como JSON string
    createRepertorioDTO.instrumentos = JSON.parse(createRepertorioDTO.instrumentos);
    createRepertorioDTO.asignaciones = JSON.parse(createRepertorioDTO.asignaciones);

    const repertorioData = {
      ...createRepertorioDTO,
      partitura: file.filename // Solo guarda el nombre del archivo
    };

    const repertorio = await this.repertorioService.createRepertorio(repertorioData);
    return res.status(HttpStatus.OK).json({
      message: 'Repertorio creado correctamente',
      repertorio,
    });
  } catch (error) {
    console.error('Error al crear el repertorio:', error);
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      message: 'Error al crear el repertorio',
      error: error.message
    });
  }
}

  @Get('/uploads/:filename')
  async getFile(@Param('filename') filename: string, @Res() res: any) {
    const filePath = join(__dirname, '..', '..', 'uploads', filename);
    return res.sendFile(filePath);
  }

  @Get('/')
  async getRepertorios(@Res() res: any) {
    const repertorios = await this.repertorioService.getRepertorios();
    return res.status(HttpStatus.OK).json(repertorios);
  }

  

  @Get('/:id')
  async getRepertorio(@Res() res: any, @Param('id') id: string) {
    const repertorio = await this.repertorioService.getRepertorio(id);
    if (!repertorio) throw new NotFoundException('Repertorio no encontrado');
    return res.status(HttpStatus.OK).json(repertorio);
  }

  @Put('/update/:id')
  async updateRepertorio(@Res() res: any, @Param('id') id: string, @Body() createRepertorioDTO: CreateRepertorioDTO) {
    const repertorio = await this.repertorioService.updateRepertorio(id, createRepertorioDTO);
    if (!repertorio) throw new NotFoundException('Repertorio no encontrado');
    return res.status(HttpStatus.OK).json({
      message: 'Repertorio actualizado correctamente',
      repertorio,
    });
  }

  @Delete('/delete/:id')
  async deleteRepertorio(@Res() res: any, @Param('id') id: string) {
    const repertorio = await this.repertorioService.deleteRepertorio(id);
    if (!repertorio) throw new NotFoundException('Repertorio no encontrado');
    return res.status(HttpStatus.OK).json({
      message: 'Repertorio eliminado correctamente',
      repertorio,
    });
  }

  @Get('/by-member/:memberID')
  async getRepertoriosByMember(@Res() res: any, @Param('memberID') memberID: string) {
    const repertorios = await this.repertorioService.getRepertoriosByMember(memberID);
    return res.status(HttpStatus.OK).json({ repertorios });
}

}
