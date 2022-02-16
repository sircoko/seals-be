import { IsString } from 'class-validator';

export class UpdateReportDto {
  @IsString()
  readonly loc: string;
}
