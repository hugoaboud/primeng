import { ComponentRef, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export interface Doc {
    name: string;
    pathname: string;
}

export interface DocSectionNav {
    id?: string;
    label?: string;
    component?: ComponentRef<any>;
    doc?: Doc;
}

@Injectable({ providedIn: 'root' })
export class DocService {
    doc!: Doc;

    private docSectionNavActive: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    docSectionNavActive$ = this.docSectionNavActive.asObservable();

    private docUpdate = new Subject<Doc>();

    docUpdate$ = this.docUpdate.asObservable();

    updateDoc(doc: Doc) {
        this.doc = doc;
        this.docUpdate.next(doc);
    }

    getDoc(): Doc {
        return this.doc;
    }

    isVisible() {}
}
