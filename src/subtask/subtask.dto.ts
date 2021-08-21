import { IsArray, IsEnum, IsNumber, IsOptional, IsString, Length } from "class-validator";
import { NivelPrioridad } from "src/enums/prioridad.enum";
import { Status } from "src/enums/status.enum";



export class SubtaskDto{


    @Length(5)
    @IsString()
    titulo: string;

    @IsString()
    @IsOptional()
    descripcion: string;

    @IsEnum(NivelPrioridad, {message: `Opcion invalida`})
    nivelPrioridad: NivelPrioridad;

    @IsEnum(Status)
    status: Status;
}