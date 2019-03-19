import * as shape from 'd3-shape';


export var lineChartView: any[] = [1200, 400];

export var lineChartShowXAxis = true;
export var lineChartShowYAxis = true;
export var lineChartShowLegend = true;
export var lineChartShowXAxisLabel = true;
export var lineChartXAxisLabel = 'XaxisName';
export var lineChartShowYAxisLabel = true;
export var lineChartYAxisLabel = 'YaxisName';


export var lineChartColorScheme = {
    domain: ['#1CBCD8', '#FF8D60', '#FF586B', '#AAAAAA']
};

export var lineChartAutoScale = true;
export var lineChartLineInterpolation = shape.curveBasis;