import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '../../service/node.service';

@Component({
    templateUrl: './treefilterdemo.html'
})
export class TreeFilterDemo implements OnInit {
    files1: TreeNode[];

    files2: TreeNode[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFiles().then((files) => (this.files1 = files));
        this.nodeService.getFiles().then((files) => (this.files2 = files));
    }
}
