import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-fuchart',
  templateUrl: './line-fuchart.component.html',
  styleUrls: ['./line-fuchart.component.css']
})
export class LineFuchartComponent implements OnInit {
  
  width = 1200;  
  height = 400;  
  type = 'line';  
  dataFormat = 'json';  
  dataSource;


  ngOnInit() {
    this.dataSource = {  
      "chart": {  
        "caption": "Fusioncharts Line Chart",    
        "xaxisname": "NameXaxis",
        "yaxisname": "NameYaxis", 
        "theme": "fint"  
      },  
      "data": [{  
        "label": "0.5",  
        "value": "2"  
      },  
      {  
        "label": "1",  
        "value": "0.5"  
      },  
      {  
        "label": "1.5",  
        "value": "3.5"  
      },  
      {  
        "label": "2",  
        "value": "1.5"  
      },  
      {  
        "label": "2.5",  
        "value": "1"  
      }, 
      {  
        "label": "3",  
        "value": "3"  
      },  
      {  
        "label": "3.5",  
        "value": "3.5"  
      },  
      {  
        "label": "4",  
        "value": "6"  
      },  
      {  
        "label": "4.5",  
        "value": "4.5"  
      },  
      {  
        "label": "5",  
        "value": "3"  
      },
      {  
        "label": "5.5",  
        "value": "4"  
      },  
      {  
        "label": "6",  
        "value": "5.5"  
      },  
      {  
        "label": "6.5",  
        "value": "7.5"  
      },  
      {  
        "label": "7",  
        "value": "4"  
      },  
      {  
        "label": "7.5",  
        "value": "6"  
      }, 
      {  
        "label": "8",  
        "value": "9"  
      },  
      {  
        "label": "8.5",  
        "value": "6.5"  
      },  
      {  
        "label": "9",  
        "value": "10"  
      },  
      {  
        "label": "9.5",  
        "value": "10"  
      },  
      {  
        "label": "10",  
        "value": "8"  
      }   
      ]
    }
  }

}
