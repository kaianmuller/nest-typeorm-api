import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/shared/generic.service';
import { Repository } from 'typeorm';
import { SubtaskDto } from './subtask.dto';
import { Subtask } from './subtask.entity';

@Injectable()
export class SubtaskService extends GenericService<Subtask,SubtaskDto>{

    constructor(
        @InjectRepository(Subtask)
         readonly repository: Repository<Subtask>,
      ) {
        super(repository);
        }
    

      async getOfTask(id:number) {
        return await this.repository.find({
          where: {
              task: { id: id},
          },
          relations: ["task"],
      });
      }
    

}
