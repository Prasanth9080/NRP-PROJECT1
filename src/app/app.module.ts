import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DailyDataComponent } from './daily-data/daily-data.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { DataTablesModule } from 'angular-datatables';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { ConsumablesComponent } from './consumables/consumables.component';
import { MachineryComponent } from './machinery/machinery.component';
import { ManPowerComponent } from './man-power/man-power.component';
import { ToolsTacklesComponent } from './tools-tackles/tools-tackles.component';
import { InstrumentsComponent } from './instruments/instruments.component';
import { SafetyToolsComponent } from './safety-tools/safety-tools.component';
import { Consumables2Component } from './consumables2/consumables2.component';
import { Consumables3Component } from './consumables3/consumables3.component';
import { Machinery2Component } from './machinery2/machinery2.component';
import { Machinery3Component } from './machinery3/machinery3.component';
import { Manpower2Component } from './manpower2/manpower2.component';
import { Manpower3Component } from './manpower3/manpower3.component';
import { ToolsTackles2Component } from './tools-tackles2/tools-tackles2.component';
import { ToolsTackles3Component } from './tools-tackles3/tools-tackles3.component';
import { Instuments2Component } from './instruments2/instuments2.component';
import { Instruments3Component } from './instruments3/instruments3.component';
import { SafetyTools2Component } from './safety-tools2/safety-tools2.component';
import { SafetyTools3Component } from './safety-tools3/safety-tools3.component';
import { MatPaginatorModule } from '@angular/material/paginator';
// import { Consumables2Component } from './consumables2/consumables2.component';
// import { Consumables3Component } from './consumables3/consumables3.component';
// import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  declarations: [
    DashboardComponent,
    AppComponent,
    DailyDataComponent,
    ReportsComponent,
    SettingsComponent,
    ConsumablesComponent,
    MachineryComponent,
    ManPowerComponent,
    ToolsTacklesComponent,
    InstrumentsComponent,
    SafetyToolsComponent,
    Consumables2Component,
    Consumables3Component,
    Machinery2Component,
    Machinery3Component,
    Manpower2Component,
    Manpower3Component,
    ToolsTackles2Component,
    ToolsTackles3Component,
    Instuments2Component,
    Instruments3Component,
    SafetyTools2Component,
    SafetyTools3Component,
    // Consumables2Component,
    // Consumables3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    BrowserAnimationsModule,
    RouterTestingModule,
    DataTablesModule,
    MatTableModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatPaginatorModule
    // HighchartsChartModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 
  
}
