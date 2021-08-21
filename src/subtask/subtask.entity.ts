import { NivelPrioridad } from "src/enums/prioridad.enum";
import { Status } from "src/enums/status.enum";
import { Task } from "src/task/task.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";






@Entity()
export class Subtask{

    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column()
    descripcion: string;

    @Column()
    nivelPrioridad: NivelPrioridad;

    @Column()
    status: Status;

    @ManyToOne(type => Task, task => task.subtasks,{onDelete: 'CASCADE'})
    task: Task;
}