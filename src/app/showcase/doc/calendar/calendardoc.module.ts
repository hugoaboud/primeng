import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { CalendarModule } from 'primeng/calendar';
import { ImportDocComponent } from './importdoc';
import { BasicDocComponent } from './basicdoc';
import { FormatDocComponent } from './formatdoc';
import { LocaleDocComponent } from './localedoc';
import { IconDocComponent } from './icondoc';
import { MinMaxDocComponent } from './minmaxdox';
import { MultipleDocComponent } from './multipledoc';
import { RangeDocComponent } from './rangedoc';
import { ButtonBarDocComponent } from './buttonbardoc';
import { TimeDocComponent } from './timedoc';
import { MonthDocComponent } from './monthdoc';
import { YearDocComponent } from './yeardoc';
import { MultipleMonthDocComponent } from './multiplemonths.doc';
import { TemplateDocComponent } from './template.doc';
import { InlineDocComponent } from './inlinedoc';
import { TouchUIDocComponent } from './touchuidoc';
import { DateTemplateDocComponent } from './datetemplatedoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';
import { EventsDocComponent } from './eventsdoc';
import { MethodsDocComponent } from './methodsdoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, FormsModule, CalendarModule],
    exports: [AppDocModule],
    declarations: [
        ImportDocComponent,
        BasicDocComponent,
        FormatDocComponent,
        LocaleDocComponent,
        IconDocComponent,
        MinMaxDocComponent,
        MultipleDocComponent,
        RangeDocComponent,
        ButtonBarDocComponent,
        TimeDocComponent,
        MonthDocComponent,
        YearDocComponent,
        MultipleMonthDocComponent,
        TemplateDocComponent,
        InlineDocComponent,
        TouchUIDocComponent,
        DateTemplateDocComponent,
        PropsDocComponent,
        StyleDocComponent,
        EventsDocComponent,
        MethodsDocComponent
    ]
})
export class CalendarDocModule {}
