import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LineChartModule } from '@swimlane/ngx-charts/lib/line-chart/line-chart.module';
import { ChartModule } from 'angular-highcharts';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DataTablesModule } from 'angular-datatables';
import { MatTableModule } from '@angular/material/table';
// import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    
  ],

  imports: [
    CommonModule,
    RouterModule,
    DataTablesModule,
    MatTableModule,
    RouterTestingModule,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    MatSidenavModule,
    MatButtonModule,
    BrowserAnimationsModule,
    LineChartModule,
    ChartModule,
    MatIconModule,
    HttpClientModule,
    BrowserModule,
    MatListModule,
    // HighchartsChartModule
  ],

  exports:[
    MatSidenavModule,
  ]

})

export class DashboardModule { }
 