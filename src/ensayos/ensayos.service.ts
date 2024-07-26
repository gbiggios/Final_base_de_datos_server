import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EnsayoDocument } from './schemas/ensayos.schemas';
import { MemberDocument } from '../members/schemas/members.schema';
import { CreateEnsayoDTO } from './dto/ensayos.dto';

@Injectable()
export class EnsayosService {
  constructor(
    @InjectModel('Ensayo') private readonly ensayoModel: Model<EnsayoDocument>,
  ) {}

  async createEnsayo(createEnsayoDTO: CreateEnsayoDTO): Promise<EnsayoDocument> {
    const ensayo = new this.ensayoModel(createEnsayoDTO);
    return await ensayo.save();
  }

  async getEnsayos(): Promise<EnsayoDocument[]> {
    return await this.ensayoModel.find().populate('repertorios').exec();
  }

  async getEnsayo(id: string): Promise<EnsayoDocument> {
    const ensayo = await this.ensayoModel.findById(id).populate('repertorios').exec();
    if (!ensayo) throw new NotFoundException('Ensayo no encontrado');
    return ensayo;
  }

  async updateEnsayo(id: string, createEnsayoDTO: CreateEnsayoDTO): Promise<EnsayoDocument> {
    const ensayo = await this.ensayoModel.findByIdAndUpdate(id, createEnsayoDTO, { new: true }).exec();
    if (!ensayo) throw new NotFoundException('Ensayo no encontrado');
    return ensayo;
  }

  async deleteEnsayo(id: string): Promise<EnsayoDocument> {
    const ensayo = await this.ensayoModel.findByIdAndDelete(id).exec();
    if (!ensayo) throw new NotFoundException('Ensayo no encontrado');
    return ensayo;
  }

  async updateAsistencia(id: string, asistencia: any[]): Promise<EnsayoDocument> {
    const ensayo = await this.ensayoModel.findById(id).exec();
    if (!ensayo) throw new NotFoundException('Ensayo no encontrado');
    ensayo.asistencia = asistencia;
    return await ensayo.save();
  }

  async getEnsayosByMember(memberID: string): Promise<EnsayoDocument[]> {
    return this.ensayoModel.find({ 'asistencia.miembroID': memberID }).exec();
  }


  async getAttendancePercentage(): Promise<any[]> {
    const attendanceStats = await this.ensayoModel.aggregate([
      {
        '$unwind': '$asistencia'
      }, {
        '$group': {
          '_id': '$asistencia.miembroID', 
          'presentCount': {
            '$sum': {
              '$cond': [
                '$asistencia.presente', 1, 0
              ]
            }
          }, 
          'totalCount': {
            '$sum': 1
          }
        }
      }, {
        '$lookup': {
          'from': 'members', 
          'localField': '_id', 
          'foreignField': '_id', 
          'as': 'member'
        }
      }, {
        '$unwind': '$member'
      }, {
        '$project': {
          '_id': 0, 
          'member': {
            '$concat': [
              '$member.nombre', ' ', '$member.apellidoPaterno', ' ', '$member.apellidoMaterno'
            ]
          }, 
          'percentage': {
            '$multiply': [
              {
                '$divide': [
                  '$presentCount', '$totalCount'
                ]
              }, 100
            ]
          }
        }
      }
    ]).exec();
    return attendanceStats;
  }
}
