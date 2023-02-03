import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '../../service/node.service';

@Component({
    templateUrl: './treetabletemplatingdemo.html'
})
export class TreeTableTemplatingDemo implements OnInit {
    files: TreeNode[];

    cols: any[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFilesystem().then((files) => (this.files = files));

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
}
