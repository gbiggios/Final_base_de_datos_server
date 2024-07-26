import { Document } from 'mongoose';
import { CreateMemberDTO } from 'src/members/dto/members.dto';
export declare class Meeting {
    fecha: Date;
    comite: string;
    acta: string;
    temas_discutidos: string[];
    participantes: CreateMemberDTO[];
}
export type MeetingDocument = Meeting & Document;
export declare const MeetingSchema: import("mongoose").Schema<Meeting, import("mongoose").Model<Meeting, any, any, any, Document<unknown, any, Meeting> & Meeting & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Meeting, Document<unknown, {}, import("mongoose").FlatRecord<Meeting>> & import("mongoose").FlatRecord<Meeting> & {
    _id: import("mongoose").Types.ObjectId;
}>;
