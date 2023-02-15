import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartModule } from 'primeng/chart';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDocComponent } from './basicdoc';
import { ChartjsDocComponent } from './chartjsdoc';
import { ComboDocComponent } from './combodoc';
import { DoughnutDocComponent } from './doughnutdoc';
import { HorizontalBarDocComponent } from './horizontalbardoc';
import { ImportDocComponent } from './importdoc';
import { LineDocComponent } from './linedoc';
import { LineStyleDocComponent } from './linestyledoc';
import { MethodsDocComponent } from './methodsdoc';
import { MultiAxisDocComponent } from './multiaxisdoc';
import { PieDocComponent } from './piedoc';
import { PolarAreaDocComponent } from './polarareadoc';
import { PropsDocComponent } from './propsdoc';
import { RadarDocComponent } from './radardoc';
import { StackedBarDocComponent } from './stackedbardoc';
import { VerticalBarDocComponent } from './verticalbardoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, ChartModule, AppDocModule],
    declarations: [
        BasicDocComponent,
        ChartjsDocComponent,
        ComboDocComponent,
        DoughnutDocComponent,
        HorizontalBarDocComponent,
        ImportDocComponent,
        LineDocComponent,
        LineStyleDocComponent,
        MethodsDocComponent,
        MultiAxisDocComponent,
        PieDocComponent,
        PolarAreaDocComponent,
        PropsDocComponent,
        RadarDocComponent,
        StackedBarDocComponent,
        VerticalBarDocComponent
    ],
    exports: [AppDocModule]
})
export class ChartDocModule {}
