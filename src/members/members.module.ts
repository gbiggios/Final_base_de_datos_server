import { Module } from '@nestjs/common';
import { MembersController } from './members.controller';
import { MembersService } from './members.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MemberSchema } from './schemas/members.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name: "Members", schema: MemberSchema}
    ])
  ],
  controllers: [MembersController],
  providers: [MembersService],
  exports: []
})
export class MembersModule {}
