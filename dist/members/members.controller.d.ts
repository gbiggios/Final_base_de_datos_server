import { CreateMemberDTO } from './dto/members.dto';
import { MembersService } from './members.service';
export declare class MembersController {
    private memberService;
    constructor(memberService: MembersService);
    createMember(res: any, createMemberDTO: CreateMemberDTO): Promise<any>;
    getMembers(res: any): Promise<any>;
    getMember(res: any, memberID: any): Promise<any>;
    deleteMember(res: any, memberID: any): Promise<any>;
    updateMember(res: any, CreateMemberDTO: CreateMemberDTO, memberID: any): Promise<any>;
}
