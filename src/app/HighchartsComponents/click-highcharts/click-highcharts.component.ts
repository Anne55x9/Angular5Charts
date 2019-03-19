
import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-click-highcharts',
  templateUrl: './click-highcharts.component.html',
  styleUrls: ['./click-highcharts.component.css']
})
export class ClickHighchartsComponent {


     chart = new Chart({
      chart: {
          type: 'line',
          margin: [70, 50, 60, 80],
          events: {
              click: function (e) {
                
                  var x = Math.round(e.xAxis[0].value),
                      y = Math.round(e.yAxis[0].value),
                      series = this.series[0];

                  series.addPoint([x, y]);
  
              }
          }
          
      },
      title: {
          text: 'Highcharts line chart with click feature'
      },
      subtitle: {
          text: 'Click the plot area to add a point.'
      },
      xAxis: {
        title: {
            text: 'xAxisName'
        },
          gridLineWidth: 1,
          minPadding: 0.2,
          maxPadding: 0.2,
          maxZoom: 60
      },
      yAxis: {
          title: {
              text: 'yAxisName'
          },
          minPadding: 0.2,
          maxPadding: 0.2,
          maxZoom: 60,
          plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
          }]
      },
      legend: {
          enabled: false
      },
      exporting: {
          enabled: false
      },
      series: [{
          data: [[20, 20], [80, 80]]
      }]
});

}
