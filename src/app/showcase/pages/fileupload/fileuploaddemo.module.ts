import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { AppCodeModule } from 'src/app/showcase/layout/doc//code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { FileUploadDemo } from './fileuploaddemo';
import { FileUploadDemoRoutingModule } from './fileuploaddemo-routing.module';

@NgModule({
    imports: [CommonModule, FileUploadDemoRoutingModule, FileUploadModule, ToastModule, ButtonModule, TabViewModule, AppDemoActionsModule, AppCodeModule],
    declarations: [FileUploadDemo]
})
export class FileUploadDemoModule {}
