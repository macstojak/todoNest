
import { IsNumber, IsBoolean } from 'class-validator';
export class CreateTodoDto {
    id:number;
    task:string;
    done: string;
}
