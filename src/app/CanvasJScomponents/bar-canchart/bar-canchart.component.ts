import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../canvasjs.min';


@Component({
  selector: 'app-bar-canchart',
  templateUrl: './bar-canchart.component.html',
  styleUrls: ['./bar-canchart.component.css']
})
export class BarCanchartComponent implements OnInit {

  ngOnInit() {

    var dataPoints = [
      { y: 100 },
      { y: 43 },
      { y: 77 },
      { y: 11 },
      { y: 50 },
      { y: 70 },
      { y: 23 },
      { y: 38 },
      { y: 25 },
    ];	
      var chart1 = new CanvasJS.Chart("chartContainer1",{
      animationEnabled: true,
      title:{
      text: "CanvasJS bar chart",
      },
      axisX: {
        title:"DummyXaxis"
      },
      axisY: {
        title:"DummyXaxis"
      },
      data: [{
      type: "bar",
      dataPoints : dataPoints
      }]
    });
      chart1.render();
  }

}
