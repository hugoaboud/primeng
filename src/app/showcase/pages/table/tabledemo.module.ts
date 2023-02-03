import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { SkeletonModule } from 'primeng/skeleton';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { TableBasicDemo } from './tablebasicdemo';
import { TableColGroupDemo } from './tablecolgroupdemo';
import { TableColResizeDemo } from './tablecolresizedemo';
import { TableColToggleDemo } from './tablecoltoggledemo';
import { TableContextMenuDemo } from './tablecontextmenudemo';
import { TableCrudDemo } from './tablecruddemo';
import { TableDemo } from './tabledemo';
import { TableDemoRoutingModule } from './tabledemo-routing.module';
import { TableDynamicDemo } from './tabledynamicdemo';
import { TableEditDemo } from './tableeditdemo';
import { TableExportDemo } from './tableexportdemo';
import { TableFilterDemo } from './tablefilterdemo';
import { TableFlexScrollDemo } from './tableflexscrolldemo';
import { TableGridLinesDemo } from './tablegridlinesdemo';
import { TableLazyDemo } from './tablelazydemo';
import { TablePageDemo } from './tablepagedemo';
import { TableReorderDemo } from './tablereorderdemo';
import { TableResponsiveDemo } from './tableresponsivedemo';
import { TableRowExpansionDemo } from './tablerowexpansiondemo';
import { TableRowGroupDemo } from './tablerowgroupdemo';
import { TableScrollDemo } from './tablescrolldemo';
import { TableSelectionDemo } from './tableselectiondemo';
import { TableSizeDemo } from './tablesizedemo';
import { TableSortDemo } from './tablesortdemo';
import { TableStateDemo } from './tablestatedemo';
import { TableStickyDemo } from './tablestickydemo';
import { TableStripedDemo } from './tablestripeddemo';
import { TableStyleDemo } from './tablestyledemo';
import { TableTemplatingDemo } from './tabletemplatingdemo';
import { TableVirtualScrollDemo } from './tablevirtualscrolldemo';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TableDemoRoutingModule,
        TableModule,
        CalendarModule,
        SliderModule,
        DialogModule,
        ConfirmDialogModule,
        MultiSelectModule,
        ContextMenuModule,
        DropdownModule,
        ButtonModule,
        ToastModule,
        InputTextModule,
        InputNumberModule,
        InputTextareaModule,
        ProgressBarModule,
        TooltipModule,
        RadioButtonModule,
        ToolbarModule,
        FileUploadModule,
        TabViewModule,
        ToggleButtonModule,
        RatingModule,
        SkeletonModule,
        AppCodeModule,
        AppDemoActionsModule
    ],
    declarations: [
        TableDemo,
        TableBasicDemo,
        TableDynamicDemo,
        TableTemplatingDemo,
        TableSizeDemo,
        TableGridLinesDemo,
        TableStripedDemo,
        TablePageDemo,
        TableSortDemo,
        TableSelectionDemo,
        TableFilterDemo,
        TableStyleDemo,
        TableLazyDemo,
        TableExportDemo,
        TableColGroupDemo,
        TableRowExpansionDemo,
        TableScrollDemo,
        TableVirtualScrollDemo,
        TableFlexScrollDemo,
        TableColToggleDemo,
        TableCrudDemo,
        TableResponsiveDemo,
        TableContextMenuDemo,
        TableColResizeDemo,
        TableReorderDemo,
        TableEditDemo,
        TableRowGroupDemo,
        TableStateDemo,
        TableStickyDemo
    ]
})
export class TableDemoModule {}
