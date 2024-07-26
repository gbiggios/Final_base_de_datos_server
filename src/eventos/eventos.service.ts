import { Injectable, NotFoundException } from '@nestjs/common';
import { Eventos } from './interfaces/eventos.interface';
import { CreateEventoDTO } from './dto/eventos.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EventosService {
  constructor(
    @InjectModel('Eventos') private readonly eventoModel: Model<Eventos>,
  ) {}

  async createEvento(createEventoDTO: CreateEventoDTO): Promise<Eventos> {
    const newEvento = new this.eventoModel(createEventoDTO);
    return await newEvento.save();
  }

  async getEventos(): Promise<Eventos[]> {
    return await this.eventoModel.find().exec();
  }

  async getEvento(eventoID: string): Promise<Eventos> {
    const evento = await this.eventoModel.findById(eventoID).exec();
    if (!evento) {
      throw new NotFoundException('Evento no encontrado');
    }
    return evento;
  }

  async deleteEvento(eventoID: string): Promise<Eventos> {
    const deletedEvento = await this.eventoModel.findByIdAndDelete(eventoID).exec();
    if (!deletedEvento) {
      throw new NotFoundException('Evento no encontrado');
    }
    return deletedEvento;
  }

  async updateEvento(eventoID: string, createEventoDTO: CreateEventoDTO): Promise<Eventos> {
    const updatedEvento = await this.eventoModel.findByIdAndUpdate(eventoID, createEventoDTO, { new: true }).exec();
    if (!updatedEvento) {
      throw new NotFoundException('Evento no encontrado');
    }
    return updatedEvento;
  }

  async getEventosByMember(memberID: string): Promise<Eventos[]> {
    return this.eventoModel.find({ memberID: memberID }).exec();
  }


}