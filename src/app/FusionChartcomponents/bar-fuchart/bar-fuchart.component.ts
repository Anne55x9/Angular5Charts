import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-fuchart',
  templateUrl: './bar-fuchart.component.html',
  styleUrls: ['./bar-fuchart.component.css']
})
export class BarFuchartComponent implements OnInit {

  width = 1200;
  height = 400;
  type = 'bar2d';
  dataFormat= 'json';
  dataSource;

  ngOnInit() {
    this.dataSource = {
      "chart": {  
        "caption": "Fusioncharts Bar Chart", 
        "xaxisname": "NameXaxis",
        "yaxisname": "NameYaxis",  
        "numbersuffix": "%",  
        "basefontsize": "12",  
        "basefontcolor": "#194920",  
        "valuefontcolor": "#194920",  
        "canvasBgColor": "#f3f5f6",  
        "canvasBgAlpha": "100",  
        "bgColor": "#f3f5f6",  
        "BgAlpha": "100",  
        "palettecolors": "#3A803D",    
        "theme": "zune"
      },
      "data": [  
        {  
            "label": "1",  
            "value": "7.3"  
        },  
        {  
            "label": "2",  
            "value": "4.5"  
        },  
        {  
            "label": "3",  
            "value": "9.5"  
        },  
        {  
            "label": "4",  
            "value": "1.2"  
        },  
        {  
            "label": "5",  
            "value": "4.1"  
        },  
        {  
            "label": "6",  
            "value": "6.4"  
        },  
        {  
            "label": "7",  
            "value": "3.2"  
        },  
        {  
            "label": "8",  
            "value": "5.0"  
        }  
    ]
    }
  }

}
