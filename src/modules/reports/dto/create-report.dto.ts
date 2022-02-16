import { IsString } from "class-validator";


export class CreateReportDto {
  @IsString() 
  readonly loc: string;
}
