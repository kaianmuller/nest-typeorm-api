import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";



@Injectable()
export class GenericService<E,EDto>{

    
    constructor(
        readonly repository: Repository<E>,
      ) {}
    
      async getAll() {
        return await this.repository.find();
      }
    
      async getById(id: number) {
        const post = await this.repository.findOne(id);
        if (!post) throw new NotFoundException('Element does not exist');
        return post;
      }
    
      async createOne(dto: EDto) {
        const e = this.repository.create(dto);
        return await this.repository.save(e);
      }
    
      async editOne(id: number, dto: EDto) {
        const e = await this.repository.findOne(id);
    
        if (!e) throw new NotFoundException('Element does not exist');
    
        const editE = Object.assign(e, dto);
        return await this.repository.save(editE);
      }
    
      async deleteOne(id: number) {
        return await this.repository.delete(id);
      }

    
}