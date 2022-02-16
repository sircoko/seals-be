import { Injectable, NotFoundException } from '@nestjs/common';
import { Report } from './report.entity';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';

@Injectable()
export class ReportsService {
  private reports: Report[] = [
    {
      id: '1',
      loc: '123,345'
    }
  ];

  getReports(): Report[] {
    return this.reports;
  }

  getReport(id: string): Report {
    const report = this.reports.find((report) => report.id === id);
    if(!report) {
      throw new NotFoundException("Report not found");
    }
    return report;
  }

  createReport({loc}: CreateReportDto) {
    this.reports.push({
      id: (this.reports.length+1).toString(),
      loc
    })
  }

  updateReport(id: string, {loc}: UpdateReportDto) {
    const report: Report = this.getReport(id);
    console.log('Updating report'+id);
    report.loc = loc;
  }

  deleteReport(id: string){
    const index = this.reports.findIndex( (report) => report.id === id);
    if (index >= 0){
      this.reports.splice(index, 1);
    }
  }
}
