import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../canvasjs.min';


@Component({
  selector: 'app-line-canchart',
  templateUrl: './line-canchart.component.html',
  styleUrls: ['./line-canchart.component.css']
})
export class LineCanchartComponent implements OnInit {

  ngOnInit() {
    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      zoomEnabled: true,
     title:{
    text: "Html5 CanvasJs Chart"
    },
     axisX: {
    title:"DummyXaxis",
    minimum: 0,
    maximum: 10
   },
    axisY:{
    title: "DummYYaxis", 
    valueFormatString: "#,##0"
  }, 
    data: [{
      type: "line",
     name: "MockData",
     markerType: "none",
     color: "black",
     dataPoints: [
       { x: 0.5, y: 2 },
       { x: 1, y: 0.5 },
       { x: 1.5, y: 3.5 },
       { x: 2, y: 1.5 },
       { x: 2.5, y: 1 },
       { x: 3, y: 3 },
       { x: 3.5, y: 3.5 },
       { x: 4, y: 6 },
       { x: 4.5, y: 4.5 },
       { x: 5, y: 3 },
       { x: 5.5, y: 4 },
       { x: 6, y: 5.5 },
       { x: 6.5, y: 7.5},
       { x: 7, y: 4 },
       { x: 7.5, y: 6 },
       { x: 8, y: 9 },
       { x: 8.5, y: 6.5 },
       { x: 9, y: 10 },
       { x: 9.5, y: 10 },
       { x: 10, y: 8 },					
    ]
    }]
  });
   chart.render();
    

  }

}
