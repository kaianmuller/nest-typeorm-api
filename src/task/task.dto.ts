import { Type } from "class-transformer";
import { IsArray, IsDate, IsEnum, IsOptional, IsString, Length } from "class-validator";
import { NivelPrioridad } from "src/enums/prioridad.enum";
import { Status } from "src/enums/status.enum";
import { SubtaskDto } from "src/subtask/subtask.dto";
import { Subtask } from "src/subtask/subtask.entity";

export class TaskDto {
    
    @Length(5)
    @IsString()
    titulo: string;

    @Type(()=> Date)
    @IsOptional()
    fechaCreacion: Date;

    @IsString()
    @IsOptional()
    descripcion: string;

    @IsEnum(NivelPrioridad, {message: `Opcion invalida`})
    nivelPrioridad: NivelPrioridad;

    @IsEnum(Status)
    status: Status;

    @IsArray()
    subtasks: Array<Subtask>;
}