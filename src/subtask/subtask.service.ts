import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubtaskDto } from './subtask.dto';
import { Subtask } from './subtask.entity';

@Injectable()
export class SubtaskService {

    constructor(
        @InjectRepository(Subtask)
        private readonly repository: Repository<Subtask>,
      ) {}
    
      async getAll() {
        return await this.repository.find();
      }
    
      async getById(id: number) {
        const post = await this.repository.findOne(id);
        if (!post) throw new NotFoundException('Task does not exist');
        return post;
      }
    
      async createOne(dto: SubtaskDto) {
        const subtask = this.repository.create(dto);
        return await this.repository.save(subtask);
      }
    
      async editOne(id: number, dto: SubtaskDto) {
        const subtask = await this.repository.findOne(id);
    
        if (!subtask) throw new NotFoundException('Task does not exist');
    
        const editedSubtask = Object.assign(subtask, dto);
        return await this.repository.save(editedSubtask);
      }
    
      async deleteOne(id: number) {
        return await this.repository.delete(id);
      }


}
