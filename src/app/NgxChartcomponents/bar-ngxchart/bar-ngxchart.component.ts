import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-ngxchart',
  templateUrl: './bar-ngxchart.component.html',
  styleUrls: ['./bar-ngxchart.component.css']
})
export class BarNgxchartComponent {

  multi = [
    {
      name: '1',
      series: [
        {
          name: 'year3',
          value: 40632
        },
        {
          name: 'year2',
          value: 36953
        },
        {
          name: 'year1',
          value: 31476
        }
      ]
    },
    {
      name: '2',
      series: [
        {
          name: 'year3',
          value: 49737
        },
        {
          name: 'year2',
          value: 45986
        },
        {
          name: 'year1',
          value: 37060
        }
      ]
    },
    {
      name: '3',
      series: [
        {
          name: 'year3',
          value: 36745
        },
        {
          name: 'year2',
          value: 34774
        },
        {
          name: 'year1',
          value: 29476
        }
      ]
    },
    {
      name: '4',
      series: [
        {
          name: 'year3',
          value: 36240
        },
        {
          name: 'year2',
          value: 32543
        },
        {
          name: 'year1',
          value: 26424
        }
      ]
    }
  ];
 
  view: any[] = [1200, 400];
 
  showXAxis = true;
  showYAxis = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = "XaxisName";
  showYAxisLabel = true;
  yAxisLabel = "YaxisName";


  colorScheme = {
    domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"]
  };
}
