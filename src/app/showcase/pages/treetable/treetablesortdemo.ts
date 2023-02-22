import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '../../service/nodeservice';

@Component({
    templateUrl: './treetablesortdemo.html'
})
export class TreeTableSortDemo implements OnInit {
    files1: TreeNode[];

    files2: TreeNode[];

    cols: any[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFilesystem().then((files) => (this.files1 = files));
        this.nodeService.getFilesystem().then((files) => {
            this.files2 = files;
            this.files2.push({
                data: {
                    name: 'Documents',
                    size: '100kb',
                    type: 'Link'
                }
            });
        });

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
}
