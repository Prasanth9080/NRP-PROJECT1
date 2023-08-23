import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DailyDataComponent } from './daily-data/daily-data.component';
import { ProjectReqComponent } from './project-req/project-req.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { ConsumablesComponent } from './consumables/consumables.component';
import { MachineryComponent } from './machinery/machinery.component';
import { ManPowerComponent } from './man-power/man-power.component';
import { ToolsTacklesComponent } from './tools-tackles/tools-tackles.component';
import { SafetyToolsComponent } from './safety-tools/safety-tools.component';
import { InstrumentsComponent } from './instruments/instruments.component';
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
import { ProjectReq2Component } from './project-req2/project-req2.component';



const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'dashboard'
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'daily-data',
    component:DailyDataComponent
  },
  {
    path:'project-req',
    component:ProjectReqComponent
  },
  {
    path:'reports',
    component:ReportsComponent
  },
  {
    path:'settings',
    component:SettingsComponent
  },
  {
    path:'consumables',
    component:ConsumablesComponent
  },
  {
    path:'Machinery',
    component:MachineryComponent
  },
  {
    path:'man-power',
    component:ManPowerComponent
  },
  {
    path:'tools-tackles',
    component:ToolsTacklesComponent
  },
  {
    path:'safety-tools',
    component:SafetyToolsComponent
  },
  {
    path:'instruments',
    component:InstrumentsComponent
  },
  {
    path:'consumables2',
    component:Consumables2Component
  },
  {
    path:'consumables3',
    component:Consumables3Component
  },
  {
    path:'machinery2',
    component:Machinery2Component
  },
  {
    path:'machinery3',
    component:Machinery3Component
  }, 
  {
    path:'manpower2',
    component:Manpower2Component
  },
  {
    path:'manpower3',
    component:Manpower3Component
  },
  {
    path:'tools-tackles2',
    component:ToolsTackles2Component
  },
  {
    path:'tools-tackles3',
    component:ToolsTackles3Component
  },
  {
    path:'instruments2',
    component:Instuments2Component
  },
  {
    path:'instruments3',
    component:Instruments3Component
  },
  {
    path:'safety-tools2',
    component:SafetyTools2Component
  },
  {
    path:'safety-tools3',
    component:SafetyTools3Component
  },
  {
    path:'project-req2',
    component: ProjectReq2Component
  }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
