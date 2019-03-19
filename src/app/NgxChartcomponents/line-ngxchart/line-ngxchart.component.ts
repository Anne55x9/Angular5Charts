import { Component, OnInit } from '@angular/core';
import * as chartsData from './ngx-charts.config';

@Component({
  selector: 'app-line-ngxchart',
  templateUrl: './line-ngxchart.component.html',
  styleUrls: ['./line-ngxchart.component.css']
})

export class LineNgxchartComponent implements OnInit {  
  //In this example it is only possible to reach chartsData 
  //by using config file with 3d shape import. 
  
  lineChartView: any[] = chartsData.lineChartView;

  lineChartShowXAxis = chartsData.lineChartShowXAxis;
  lineChartShowYAxis = chartsData.lineChartShowYAxis;
  lineChartShowLegend = chartsData.lineChartShowLegend;
  lineChartShowXAxisLabel = chartsData.lineChartShowXAxisLabel;
  lineChartXAxisLabel = chartsData.lineChartXAxisLabel;
  lineChartShowYAxisLabel = chartsData.lineChartShowYAxisLabel;
  lineChartYAxisLabel = chartsData.lineChartYAxisLabel;
  lineChartColorScheme = chartsData.lineChartColorScheme;
 
  lineChartAutoScale = chartsData.lineChartAutoScale;
  lineChartLineInterpolation = chartsData.lineChartLineInterpolation;
  
    ngOnInit(){
     var lineChartMulti = [
      {
          "name": "1",
          "series": [
          {
              "name": "2000",
              "value": 90
          },
          {
              "name": "2001",
              "value": 300
          },
          {
              "name": "2002",
              "value": 390
          },
          {
              "name": "2003",
              "value": 500
          },
          {
              "name": "2004",
              "value": 720
          },
          {
              "name": "2005",
              "value": 740
          },
          {
              "name": "2006",
              "value": 799
          }
          ]
  
      },
      {
        "name": "2",
        "series": [
        {
            "name": "2000",
            "value": 110
        },
        {
            "name": "2001",
            "value": 290
        },
        {
            "name": "2002",
            "value": 360
        },
        {
            "name": "2003",
            "value": 420
        },
        {
            "name": "2004",
            "value": 470
        },
        {
            "name": "2005",
            "value": 570
        },
        {
            "name": "2006",
            "value": 600
        }
        ]

    },
  ]
      Object.assign(this, { lineChartMulti })
  }
}




 