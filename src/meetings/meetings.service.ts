import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMeetingDto } from './dto/meetings.dto';
import { Meeting, MeetingDocument } from './schemas/meetings.schema';

@Injectable()
export class MeetingService {
  constructor(
    @InjectModel(Meeting.name) private readonly meetingModel: Model<MeetingDocument>,
  ) {}

  async createMeeting(createMeetingDto: CreateMeetingDto): Promise<Meeting> {
    const newMeeting = new this.meetingModel(createMeetingDto);
    return newMeeting.save();
  }

  async getAllMeetings(): Promise<Meeting[]> {
    return this.meetingModel.find().exec();
  }

  async getMeetingById(id: string): Promise<Meeting> {
    const meeting = await this.meetingModel.findById(id).exec();
    if (!meeting) {
      throw new NotFoundException(`Meeting with ID ${id} not found`);
    }
    return meeting;
  }

  async deleteMeeting(id: string): Promise<Meeting> {
    const deletedMeeting = await this.meetingModel.findByIdAndDelete(id).exec();
    if (!deletedMeeting) {
      throw new NotFoundException(`Meeting with ID ${id} not found`);
    }
    return deletedMeeting;
  }

  async updateMeeting(id: string, updateMeetingDto: Partial<CreateMeetingDto>): Promise<Meeting> {
    const updatedMeeting = await this.meetingModel.findByIdAndUpdate(id, updateMeetingDto, { new: true }).exec();
    if (!updatedMeeting) {
      throw new NotFoundException(`Meeting with ID ${id} not found`);
    }
    return updatedMeeting;
  }

  async getMeetingsByMember(memberID: string): Promise<Meeting[]> {
    return this.meetingModel.find({ 'participantes.miembroID': memberID }).exec();
  }
}
