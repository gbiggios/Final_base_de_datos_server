import { Model } from 'mongoose';
import { Members } from './interfaces/members.interfaces';
import { CreateMemberDTO } from './dto/members.dto';
export declare class MembersService {
    private readonly memberModel;
    constructor(memberModel: Model<Members>);
    getMembers(): Promise<Members[]>;
    createMember(CreateMemberDTO: any): Promise<Members>;
    deleteMember(memberID: String): Promise<any>;
    updateMember(memberID: String, CreateMemberDTO: CreateMemberDTO): Promise<Members>;
    getMember(memberID: string): Promise<Members>;
}
