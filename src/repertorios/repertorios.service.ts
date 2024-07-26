import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRepertorioDTO } from './dto/repertorio.dto';
import { Repertorio } from './schemas/repertorio.schema';

@Injectable()
export class RepertorioService {
  constructor(@InjectModel(Repertorio.name) private readonly repertorioModel: Model<Repertorio>) {}

  async createRepertorio(createRepertorioDTO: CreateRepertorioDTO): Promise<Repertorio> {
    const createdRepertorio = new this.repertorioModel(createRepertorioDTO);
    return createdRepertorio.save();
  }

  async getRepertorios(): Promise<Repertorio[]> {
    return this.repertorioModel.find().exec();
  }

  async getRepertorio(id: string): Promise<Repertorio> {
    return this.repertorioModel.findById(id).exec();
  }

  async updateRepertorio(id: string, updateRepertorioDTO: CreateRepertorioDTO): Promise<Repertorio> {
    return this.repertorioModel.findByIdAndUpdate(id, updateRepertorioDTO, { new: true }).exec();
  }

  async deleteRepertorio(id: string): Promise<any> {
    return this.repertorioModel.findByIdAndDelete(id).exec();
  }

  async getRepertoriosByMember(memberID: string): Promise<Repertorio[]> {
    return this.repertorioModel.find({ memberID: memberID }).exec();
}

}
