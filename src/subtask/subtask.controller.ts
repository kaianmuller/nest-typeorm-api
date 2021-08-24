import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { SubtaskDto } from './subtask.dto';
import { SubtaskService } from './subtask.service';

@Controller('subtask')
export class SubtaskController {


    constructor(private readonly service: SubtaskService) {}

    @Get()
    async getMany() {
      const data = await this.service.getAll();
      return { data };
    }
  

    @Get('/findoftask/:id')
    async getOfTask(@Param('id', ParseIntPipe) id: number) {
      const data = await this.service.getOfTask(id);
      return {data };
    }

    @Get(':id')
    async getById(@Param('id', ParseIntPipe) id: number) {
      const data = await this.service.getById(id);
      return { data };
    }
  
    @Post()
    async createPost(@Body() dto: SubtaskDto) {
      const data = await this.service.createOne(dto);
      return data;
    }
  
    @Put(':id')
    async editOne(@Param('id') id: number, @Body() dto: SubtaskDto) {
      const data = await this.service.editOne(id, dto);
      return data;
    }
  
    @Delete(':id')
    async deleteOne(@Param('id') id: number) {
      const data = await this.service.deleteOne(id);
      return data;
    }


}
