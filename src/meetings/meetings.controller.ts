import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { CreateMeetingDto } from './dto/meetings.dto';
import { MeetingService } from './meetings.service';

@Controller('meetings')
export class MeetingsController {
  constructor(private readonly meetingService: MeetingService) {}

  @Post('/create')
  async createMeeting(@Res() res, @Body() createMeetingDto: CreateMeetingDto) {
    try {
      const meeting = await this.meetingService.createMeeting(createMeetingDto);
      return res.status(HttpStatus.CREATED).json({
        message: 'Meeting created successfully',
        meeting
      });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error creating meeting',
        error: error.message
      });
    }
  }

  @Get('/')
  async getMeetings(@Res() res) {
    try {
      const meetings = await this.meetingService.getAllMeetings();
      return res.status(HttpStatus.OK).json({
        meetings
      });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error fetching meetings',
        error: error.message
      });
    }
  }

  @Get('/:id')
  async getMeeting(@Res() res, @Param('id') id: string) {
    try {
      const meeting = await this.meetingService.getMeetingById(id);
      if (!meeting) throw new NotFoundException('Meeting not found');
      return res.status(HttpStatus.OK).json(meeting);
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error fetching meeting',
        error: error.message
      });
    }
  }

  @Delete('/delete')
  async deleteMeeting(@Res() res, @Query('id') id: string) {
    try {
      const deletedMeeting = await this.meetingService.deleteMeeting(id);
      if (!deletedMeeting) throw new NotFoundException('Meeting not found');
      return res.status(HttpStatus.OK).json({
        message: 'Meeting deleted successfully',
        deletedMeeting
      });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error deleting meeting',
        error: error.message
      });
    }
  }

  @Put('/update/:id')
  async updateMeeting(@Res() res, @Body() updateMeetingDto: Partial<CreateMeetingDto>, @Param('id') id: string) {
    try {
      const updatedMeeting = await this.meetingService.updateMeeting(id, updateMeetingDto);
      if (!updatedMeeting) throw new NotFoundException('Meeting not found');
      return res.status(HttpStatus.OK).json({
        message: 'Meeting updated successfully',
        updatedMeeting
      });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error updating meeting',
        error: error.message
      });
    }
  }

  @Get('/by-member/:memberID')
  async getMeetingsByMember(@Res() res, @Param('memberID') memberID: string) {
    try {
      const meetings = await this.meetingService.getMeetingsByMember(memberID);
      return res.status(HttpStatus.OK).json({
        meetings
      });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error fetching meetings by member',
        error: error.message
      });
    }
  }
}
