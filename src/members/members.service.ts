import { Injectable } from '@nestjs/common';
import { Model, ObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Members } from './interfaces/members.interfaces';
import { CreateMemberDTO } from './dto/members.dto';


@Injectable()
export class MembersService {
    constructor(@InjectModel('Members') private readonly memberModel: Model<Members>) {}

    async getMembers(): Promise<Members[]> {

        const members= await this.memberModel.find().exec();
        return members;
    }

    async createMember(CreateMemberDTO: any): Promise<Members> {
        const newMember = new this.memberModel(CreateMemberDTO); // Crear una nueva instancia del modelo usando el DTO recibido
        const savedMember = await newMember.save(); // Guardar el nuevo miembro en la base de datos
    
        return savedMember;
    };

    async deleteMember(memberID: String): Promise<any> {
        const deletedMember= await this.memberModel.findOneAndDelete()

        return deletedMember;

    };

    async updateMember(memberID: String, CreateMemberDTO: CreateMemberDTO): Promise<Members> {
        const updateMember= await this.memberModel.findByIdAndUpdate(memberID, CreateMemberDTO, {new: true})
        return updateMember;

    };

    async getMember(memberID: string): Promise<Members> {
        const member= await this.memberModel.findById(memberID); 
        return member;

    };

}
