import { FrontpageComponent } from './frontpage/frontpage.component';
import { LeaveCommentComponent } from './leave-comment/leave-comment.component';
import { ClickHighchartsComponent } from './HighchartsComponents/click-highcharts/click-highcharts.component';
import { DynamicHighchartsComponent } from './HighchartsComponents/dynamic-highcharts/dynamic-highcharts.component';
import { LinechajschartComponent } from './ChartJScomponents/linechajschart/linechajschart.component';
import { BarChajschartComponent } from './ChartJScomponents/bar-chajschart/bar-chajschart.component';
import { LineNgxchartComponent } from './NgxChartcomponents/line-ngxchart/line-ngxchart.component';
import { BarNgxchartComponent } from './NgxChartcomponents/bar-ngxchart/bar-ngxchart.component';
import { LineFuchartComponent } from './FusionChartcomponents/line-fuchart/line-fuchart.component';
import { BarFuchartComponent } from './FusionChartcomponents/bar-fuchart/bar-fuchart.component';
import { LineCanchartComponent } from './CanvasJScomponents/line-canchart/line-canchart.component';
import { BarCanchartComponent } from './CanvasJScomponents/bar-canchart/bar-canchart.component';

import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes = [

    { path: '', redirectTo:'Front', pathMatch:'full'},

    { path: 'Front', component: FrontpageComponent},

    { path: 'BarCan', component: BarCanchartComponent},

    { path: 'LineCan', component: LineCanchartComponent},

    { path: 'BarFu', component: BarFuchartComponent},

    { path: 'LineFu', component: LineFuchartComponent},

    { path: 'BarNgx', component: BarNgxchartComponent},

    { path: 'LineNgx', component: LineNgxchartComponent},

    { path: 'LineCharts', component: LinechajschartComponent},

    { path: 'BarCharts', component: BarChajschartComponent},
   
    { path: 'AddPointHC', component: DynamicHighchartsComponent},

    { path: 'ClickHC', component: ClickHighchartsComponent },

    { path: 'LeaveC', component: LeaveCommentComponent}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);