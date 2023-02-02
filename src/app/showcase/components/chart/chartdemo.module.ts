import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { BarChartDemo } from './barchart/barchartdemo';
import { ChartDemo } from './chartdemo';
import { ChartDemoRoutingModule } from './chartdemo-routing.module';
import { ComboChartDemo } from './combochart/comobochartdemo';
import { DoughnutChartDemo } from './doughnutchart/doughnutchartdemo';
import { LineChartDemo } from './linechart/linechartdemo';
import { PieChartDemo } from './piechart/piechartdemo';
import { PolarAreaChartDemo } from './polarareachart/polarareachartdemo';
import { RadarChartDemo } from './radarchart/radarchartdemo';

@NgModule({
    imports: [CommonModule, ChartDemoRoutingModule, ChartModule, ToastModule, TabViewModule, AppDemoActionsModule, AppCodeModule],
    declarations: [ChartDemo, PieChartDemo, DoughnutChartDemo, BarChartDemo, LineChartDemo, PolarAreaChartDemo, ComboChartDemo, RadarChartDemo]
})
export class ChartDemoModule {}
