import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MeetingService } from './meetings.service';
import { MeetingsController } from './meetings.controller';
import { Meeting, MeetingSchema } from './schemas/meetings.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Meeting.name, schema: MeetingSchema }]),
  ],
  controllers: [MeetingsController],
  providers: [MeetingService],
})
export class MeetingsModule {}
