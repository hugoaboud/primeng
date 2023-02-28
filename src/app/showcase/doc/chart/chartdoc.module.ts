import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartModule } from 'primeng/chart';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { ChartBasicDemo } from './basicdoc';
import { ChartjsDocComponent } from './chartjsdoc';
import { ChartComboDemo } from './combodoc';
import { ChartDoughnutDemo } from './doughnutdoc';
import { ChartHorizontalBarDemo } from './horizontalbardoc';
import { ImportDocComponent } from './importdoc';
import { ChartLineDemo } from './linedoc';
import { ChartLineStyleDemo } from './linestyledoc';
import { MethodsDocComponent } from './methodsdoc';
import { ChartMultiAxiDemo } from './multiaxisdoc';
import { ChartPieDemo } from './piedoc';
import { ChartPolarAreaDemo } from './polarareadoc';
import { PropsDocComponent } from './propsdoc';
import { ChartRadarDemo } from './radardoc';
import { ChartStackedBarDemo } from './stackedbardoc';
import { ChartVerticalBarDemo } from './verticalbardoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, ChartModule, AppDocModule],
    declarations: [
        ChartBasicDemo,
        ChartjsDocComponent,
        ChartComboDemo,
        ChartDoughnutDemo,
        ChartHorizontalBarDemo,
        ImportDocComponent,
        ChartLineDemo,
        ChartLineStyleDemo,
        MethodsDocComponent,
        ChartMultiAxiDemo,
        ChartPieDemo,
        ChartPolarAreaDemo,
        PropsDocComponent,
        ChartRadarDemo,
        ChartStackedBarDemo,
        ChartVerticalBarDemo
    ],
    exports: [AppDocModule]
})
export class ChartDocModule {}
