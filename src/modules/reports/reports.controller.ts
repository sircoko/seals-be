import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { Report } from './report.entity';
import { CreateReportDto } from './dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { report } from 'process';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportSrv: ReportsService){

  }
  @Get()
  getReports(): Report[]{
    return this.reportSrv.getReports();
  }

  @Get(':id')
  getReport(@Param('id') id: string): Report {
    return this.reportSrv.getReport(id);
  }
  
  @Post()
  createReport(@Body() loc: CreateReportDto) {
    return this.reportSrv.createReport(loc);
  }

  @Patch(':id')
  updateReport(@Param('id') id: string, @Body() report: UpdateReportDto){
    return this.reportSrv.updateReport(id, report);
  }
  
  @Delete(':id')
  deleteReport(@Param('id') id: string){
    return this.reportSrv.deleteReport(id);
  }
}
