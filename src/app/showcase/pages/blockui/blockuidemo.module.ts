import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlockUIDocModule } from '../../doc/blockui/blockuidoc.module';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { BlockUIDemo } from './blockuidemo';
import { BlockUIDemoRoutingModule } from './blockuidemo-routing.module';

@NgModule({
    imports: [CommonModule, BlockUIDemoRoutingModule, BlockUIDocModule, AppDocModule],
    declarations: [BlockUIDemo]
})
export class BlockUIDemoModule {}
