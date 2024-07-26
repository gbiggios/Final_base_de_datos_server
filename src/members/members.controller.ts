import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Query, NotFoundException, Param } from '@nestjs/common';
import { CreateMemberDTO } from './dto/members.dto';
import { MembersService } from './members.service';
import { query } from 'express';

@Controller('members')
export class MembersController {
    
    //Instancia del servicio
    constructor(private memberService: MembersService ) {}

    @Post('/create')
    async createMember(@Res() res, @Body() createMemberDTO: CreateMemberDTO) {
       //console.log(createMemberDTO);
       const member=  await this.memberService.createMember(createMemberDTO)
        return res.status(HttpStatus.OK).json({
            
            message: 'Miembro creado correctamente',
            member
        });
    }

    @Get('/')
    async getMembers(@Res() res) {
        const members=await this.memberService.getMembers();
        return res.status(HttpStatus.OK).json({
            members
    });
}

    @Get('/:memberID')
    async getMember(@Res() res, @Param('memberID') memberID) {
        const member = await this.memberService.getMember(memberID);
        if (!member) throw new NotFoundException('Miembro no encontrado');
        return res.status(HttpStatus.OK).json(member);
    }

    
    @Delete('/delete') 
    async deleteMember(@Res() res, @Query('memberID') memberID) {
        const memberDeleted= await this.memberService.deleteMember(memberID);
        if (!memberDeleted) throw new NotFoundException('Miembro no encontrado');
        return res.status(HttpStatus.OK).json({
            messaje:"Miembro borrado correctamente",
            memberDeleted
        }
        )

    }
    
    @Put("update")
    async updateMember(@Res() res,@Body() CreateMemberDTO: CreateMemberDTO, @Query('memberID') memberID) {
        const memberUpdated= await this.memberService.updateMember(memberID,CreateMemberDTO);
        if (!memberUpdated) throw new NotFoundException('Miembro no encontrado');
        return res.status(HttpStatus.OK).json({
            message:"Producto actualizado correctamente",
            memberUpdated
        })
    }

}
