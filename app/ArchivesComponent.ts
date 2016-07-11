import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {ArchiveService} from "./ArchiveService";

@Component({
    template: `
        <h1>Home Page</h1>
        <ul>
            <li *ngFor="#archive of archives">
                <a [routerLink]="['ArchiveDetails', {year: archive.year, month: archive.month}]">
                    {{ archive.year }} / {{archive.month}}
                </a>
            </li> 
        </ul>    
    `,
    providers: [ArchiveService],
    directives: [ROUTER_DIRECTIVES]
})
export class ArchivesComponent implements OnInit {
    private archives = [];

    constructor(private _archiveService: ArchiveService) {
    }

    ngOnInit():any {
        this.archives = this._archiveService.getArchives();
    }
    
}