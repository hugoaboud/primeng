import { Component } from '@angular/core';
import { IconDocComponent } from '../../doc/calendar/icondoc';
import { BasicDocComponent } from '../../doc/calendar/basicdoc';
import { FormatDocComponent } from '../../doc/calendar/formatdoc';
import { ImportDocComponent } from '../../doc/calendar/importdoc';
import { LocaleDocComponent } from '../../doc/calendar/localedoc';
import { MinMaxDocComponent } from '../../doc/calendar/minmaxdox';
import { MultipleDocComponent } from '../../doc/calendar/multipledoc';
import { RangeDocComponent } from '../../doc/calendar/rangedoc';
import { ButtonBarDocComponent } from '../../doc/calendar/buttonbardoc';
import { TimeDocComponent } from '../../doc/calendar/timedoc';
import { MonthDocComponent } from '../../doc/calendar/monthdoc';
import { YearDocComponent } from '../../doc/calendar/yeardoc';
import { MultipleMonthDocComponent } from '../../doc/calendar/multiplemonths.doc';
import { TemplateDocComponent } from '../../doc/calendar/template.doc';
import { InlineDocComponent } from '../../doc/calendar/inlinedoc';
import { TouchUIDocComponent } from '../../doc/calendar/touchuidoc';
import { DateTemplateDocComponent } from '../../doc/calendar/datetemplatedoc';
import { PropsDocComponent } from '../../doc/calendar/propsdoc';
import { StyleDocComponent } from '../../doc/calendar/styledoc';
import { EventsDocComponent } from '../../doc/calendar/eventsdoc';
import { MethodsDocComponent } from '../../doc/calendar/methodsdoc';

@Component({
    templateUrl: './calendardemo.html'
})
export class CalendarDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDocComponent
        },
        {
            id: 'format',
            label: 'Format',
            component: FormatDocComponent
        },
        {
            id: 'locale',
            label: 'Locale',
            component: LocaleDocComponent
        },
        {
            id: 'icon',
            label: 'Icon',
            component: IconDocComponent
        },
        {
            id: 'minmax',
            label: 'Min / Max',
            component: MinMaxDocComponent
        },
        {
            id: 'multiple',
            label: 'Multiple',
            component: MultipleDocComponent
        },
        {
            id: 'range',
            label: 'Range',
            component: RangeDocComponent
        },
        {
            id: 'buttonbar',
            label: 'ButtonBar',
            component: ButtonBarDocComponent
        },
        {
            id: 'time',
            label: 'Time',
            component: TimeDocComponent
        },
        {
            id: 'monthpicker',
            label: 'Month Picker',
            component: MonthDocComponent
        },
        {
            id: 'yearpicker',
            label: 'Year Picker',
            component: YearDocComponent
        },
        {
            id: 'multiplemonth',
            label: 'Multiple Month',
            component: MultipleMonthDocComponent
        },
        {
            id: 'customcontent',
            label: 'Custom Content',
            component: TemplateDocComponent
        },
        {
            id: 'datetemplate',
            label: 'Date Template',
            component: DateTemplateDocComponent
        },
        {
            id: 'touchui',
            label: 'TouchUI',
            component: TouchUIDocComponent
        },
        {
            id: 'inline',
            label: 'Inline',
            component: InlineDocComponent
        },
        {
            id: 'properties',
            label: 'Properties',
            component: PropsDocComponent
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDocComponent
        },
        {
            id: 'events',
            label: 'Events',
            component: EventsDocComponent
        },
        {
            id: 'methods',
            label: 'Methods',
            component: MethodsDocComponent
        }
    ];
}
