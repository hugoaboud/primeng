import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '../../service/nodeservice';

@Component({
    templateUrl: './treehorizontaldemo.html'
})
export class TreeHorizontalDemo implements OnInit {
    files: TreeNode[];

    selectedFile: TreeNode;

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFiles().then((files) => {
            this.files = [
                {
                    label: 'Root',
                    children: files
                }
            ];
        });
    }
}
