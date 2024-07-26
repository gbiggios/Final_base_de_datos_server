import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { EventosService } from './eventos.service';
import { CreateEventoDTO } from './dto/eventos.dto';

@Controller('eventos')
export class EventosController {
    constructor(private eventoService: EventosService) {}

    @Post('/create')
    async createEvento(@Res() res, @Body() createEventoDTO: CreateEventoDTO) {
        const evento = await this.eventoService.createEvento(createEventoDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Evento creado correctamente',
            evento
        });
    }

    @Get('/')
    async getEventos(@Res() res) {
        const eventos = await this.eventoService.getEventos();
        return res.status(HttpStatus.OK).json({
            eventos
        });
    }

    @Get('/:eventoID')
    async getEvento(@Res() res, @Param('eventoID') eventoID) {
        const evento = await this.eventoService.getEvento(eventoID);
        if (!evento) throw new NotFoundException('Evento no encontrado');
        return res.status(HttpStatus.OK).json(evento);
    }

    @Delete('/delete')
    async deleteEvento(@Res() res, @Query('eventoID') eventoID) {
        const deletedEvento = await this.eventoService.deleteEvento(eventoID);
        if (!deletedEvento) throw new NotFoundException('Evento no encontrado');
        return res.status(HttpStatus.OK).json({
            message: 'Evento eliminado correctamente',
            deletedEvento
        });
    }

    @Put('/update')
    async updateEvento(@Res() res, @Body() CreateEventoDTO: CreateEventoDTO, @Query('eventoID') eventoID) {
        const updatedEvento= await this.eventoService.updateEvento(eventoID, CreateEventoDTO);
        if (!updatedEvento) throw new NotFoundException('Evento no encontrado');
        return res.status(HttpStatus.OK).json({
            message: 'Evento actualizado correctamente',
            updatedEvento
        });
    }

    @Get('/by-member/:memberID')
    async getEventosByMember(@Res() res: any, @Param('memberID') memberID: string) {
        const eventos = await this.eventoService.getEventosByMember(memberID);
        return res.status(HttpStatus.OK).json({ eventos });
}


}

