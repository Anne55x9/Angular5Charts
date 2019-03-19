

//general node_modules
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

//Root component
import { AppComponent } from './app.component';

//Child components:

//Front page

import { FrontpageComponent } from './frontpage/frontpage.component';


//CanvasJS components
import { BarCanchartComponent } from './CanvasJScomponents/bar-canchart/bar-canchart.component';
import { LineCanchartComponent } from './CanvasJScomponents/line-canchart/line-canchart.component';

//Fusioncharts components

import { BarFuchartComponent } from './FusionChartcomponents/bar-fuchart/bar-fuchart.component';
import { LineFuchartComponent } from './FusionChartcomponents/line-fuchart/line-fuchart.component';

//Ngx chart components

import { BarNgxchartComponent } from './NgxChartcomponents/bar-ngxchart/bar-ngxchart.component';
import { LineNgxchartComponent } from './NgxChartcomponents/line-ngxchart/line-ngxchart.component';

//Leave comment component
import { LeaveCommentComponent } from './leave-comment/leave-comment.component';

//ChartsJs components

import { BarChajschartComponent } from './ChartJScomponents/bar-chajschart/bar-chajschart.component';
import { LinechajschartComponent } from './ChartJScomponents/linechajschart/linechajschart.component';

//Highcharts components 

import { DynamicHighchartsComponent } from './HighchartsComponents/dynamic-highcharts/dynamic-highcharts.component';
import { ClickHighchartsComponent } from './HighchartsComponents/click-highcharts/click-highcharts.component';

//Module imports

//Fusioncharts

import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';

FusionChartsModule.fcRoot(FusionCharts,Charts,FintTheme)

//Ngx charts

import { NgxChartsModule } from "@swimlane/ngx-charts";


//Highcharts

import { ChartModule } from 'angular-highcharts';

//Addtional imports

//use routing

import {routing} from './app.routes';

//import service
import {WeatherService} from './ChartJScomponents/weather.service';



// run type: ng serve --proxy-config=proxy.conf.json -o


@NgModule({
  declarations: [
    AppComponent,
    BarCanchartComponent,
    LineCanchartComponent,
    BarFuchartComponent,
    LineFuchartComponent,
    BarNgxchartComponent,
    LineNgxchartComponent,
    BarChajschartComponent,
    LinechajschartComponent,
    DynamicHighchartsComponent,
    ClickHighchartsComponent,
    LeaveCommentComponent,
    FrontpageComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing, 
    FusionChartsModule,
    NgxChartsModule,
    ChartModule,
    HttpClientModule,
    
  ],
  exports:[
    BrowserModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
