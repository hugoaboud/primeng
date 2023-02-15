import { Component } from '@angular/core';
import { ChartjsDocComponent } from '../../doc/chart/chartjsdoc';
import { ImportDocComponent } from '../../doc/chart/importdoc';
import { BasicDocComponent } from '../../doc/chart/basicdoc';
import { PieDocComponent } from '../../doc/chart/piedoc';
import { DoughnutDocComponent } from '../../doc/chart/doughnutdoc';
import { ComboDocComponent } from '../../doc/chart/combodoc';
import { HorizontalBarDocComponent } from '../../doc/chart/horizontalbardoc';
import { LineDocComponent } from '../../doc/chart/linedoc';
import { MultiAxisDocComponent } from '../../doc/chart/multiaxisdoc';
import { PolarAreaDocComponent } from '../../doc/chart/polarareadoc';
import { RadarDocComponent } from '../../doc/chart/radardoc';
import { StackedBarDocComponent } from '../../doc/chart/stackedbardoc';
import { VerticalBarDocComponent } from '../../doc/chart/verticalbardoc';
import { LineStyleDocComponent } from '../../doc/chart/linestyledoc';
import { PropsDocComponent } from '../../doc/chart/propsdoc';
import { MethodsDocComponent } from '../../doc/chart/methodsdoc';

@Component({
    templateUrl: './chartdemo.html'
})
export class ChartDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'chartjs',
            label: 'Chart.js',
            component: ChartjsDocComponent
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDocComponent
        },
        {
            id: 'pie',
            label: 'Pie',
            component: PieDocComponent
        },
        {
            id: 'doughnut',
            label: 'Doughnut',
            component: DoughnutDocComponent
        },
        {
            id: 'verticalbar',
            label: 'Vertical Bar',
            component: VerticalBarDocComponent
        },
        {
            id: 'horizontalbar',
            label: 'Horizontal Bar',
            component: HorizontalBarDocComponent
        },
        {
            id: 'stackedbar',
            label: 'Stacked Bar',
            component: StackedBarDocComponent
        },
        {
            id: 'line',
            label: 'Line',
            component: LineDocComponent
        },
        {
            id: 'line',
            label: 'Line',
            component: LineDocComponent
        },
        {
            id: 'multiaxis',
            label: 'MultiAxis',
            component: MultiAxisDocComponent
        },
        {
            id: 'linestyles',
            label: 'Line Styles',
            component: LineStyleDocComponent
        },
        {
            id: 'polararea',
            label: 'Polar Area',
            component: PolarAreaDocComponent
        },
        {
            id: 'Radar',
            label: 'Radar',
            component: RadarDocComponent
        },
        {
            id: 'combo',
            label: 'Combo',
            component: ComboDocComponent
        }
    ];

    apiDocs = [
        {
            id: 'properties',
            label: 'Properties',
            component: PropsDocComponent
        },
        {
            id: 'methods',
            label: 'Methods',
            component: MethodsDocComponent
        }
    ];
}
