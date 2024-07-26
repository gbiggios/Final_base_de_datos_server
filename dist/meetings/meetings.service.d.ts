import { Model } from 'mongoose';
import { CreateMeetingDto } from './dto/meetings.dto';
import { Meeting, MeetingDocument } from './schemas/meetings.schema';
export declare class MeetingService {
    private readonly meetingModel;
    constructor(meetingModel: Model<MeetingDocument>);
    createMeeting(createMeetingDto: CreateMeetingDto): Promise<Meeting>;
    getAllMeetings(): Promise<Meeting[]>;
    getMeetingById(id: string): Promise<Meeting>;
    deleteMeeting(id: string): Promise<Meeting>;
    updateMeeting(id: string, updateMeetingDto: Partial<CreateMeetingDto>): Promise<Meeting>;
    getMeetingsByMember(memberID: string): Promise<Meeting[]>;
}
