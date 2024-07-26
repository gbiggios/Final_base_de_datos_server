import { CreateMeetingDto } from './dto/meetings.dto';
import { MeetingService } from './meetings.service';
export declare class MeetingsController {
    private readonly meetingService;
    constructor(meetingService: MeetingService);
    createMeeting(res: any, createMeetingDto: CreateMeetingDto): Promise<any>;
    getMeetings(res: any): Promise<any>;
    getMeeting(res: any, id: string): Promise<any>;
    deleteMeeting(res: any, id: string): Promise<any>;
    updateMeeting(res: any, updateMeetingDto: Partial<CreateMeetingDto>, id: string): Promise<any>;
    getMeetingsByMember(res: any, memberID: string): Promise<any>;
}
