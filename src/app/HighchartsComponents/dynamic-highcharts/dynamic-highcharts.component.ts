import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';



@Component({
  selector: 'app-dynamic-highcharts',
  templateUrl: './dynamic-highcharts.component.html',
  styleUrls: ['./dynamic-highcharts.component.css']
})
export class DynamicHighchartsComponent {

  chart = new Chart({
    chart: {
      type: 'line'     
    },

    title: {
      text: 'Highcharts line chart to add and remove points'
    },
    xAxis: {
      title: {
          text: 'xAxisName'
      },
    },
    yAxis: {
        title: {
            text: 'yAxisName'
        },
     
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'My line chart using method Math.random',
        data: [3, 7, 11, 15]
      }
    ]
  });
 
  // add point to chart serie
  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }
//remove the first point made in chart serie.

  remove(){
    this.chart.removePoint(Math.floor(Math.random()));
  }

}
