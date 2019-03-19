import { Component, OnInit } from '@angular/core';

import {WeatherService} from '../weather.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar-chajschart',
  templateUrl: './bar-chajschart.component.html',
  styleUrls: ['./bar-chajschart.component.css']
})
export class BarChajschartComponent implements OnInit {

  chart = []
  constructor(private _weather: WeatherService) { }

  ngOnInit() {
    this._weather.freeWeatherData()
    .subscribe(res => {

      var temp_max = res['list'].map(res => res.main.temp_max);
      var temp_min = res['list'].map(res => res.main.temp_min);
      var alldates = res['list'].map(res => res.dt)

      var weatherDates = []
      
      alldates.forEach((res) => {
        var jsdata = new Date(res * 1000);
        weatherDates.push(jsdata.toLocaleTimeString('en', {year: 'numeric', month: 'short', day:'numeric'}))
      });

      this.chart = new Chart('canvas', {
        type: 'bar',
        width:1200,
        data: {
          labels: weatherDates,
          datasets: [
            {
              data: temp_max,
              borderColor: "#3cba9f",
              fill: false
            },
            {
              data:temp_min,
              borderColor: "#ffcc00",
              fill:false
            },
          ]
        },
        options:{
          legend: {
            display:false
          },
          title:{
            display:true,
            text:'ChartJS Bar chart'
          },
          scales: {
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'xAxisName'
              }
            }],
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'yAxisName'
              }
            }]
          }
        }
      })

    }) 
  }

}
