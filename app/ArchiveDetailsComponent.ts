import {Component, OnInit} from 'angular2/core';
import {ArchiveService} from "./ArchiveService";
import {RouteParams} from "angular2/router";


@Component({
    template: `
        <h1>Archives</h1>
        <div>
            {{ archive.year }} / {{archive.month}}
        </div>
    `,
    providers: [ArchiveService]
})
export class ArchiveDetailsComponent implements OnInit {
    private archive: any;

    constructor(
        private _archiveService: ArchiveService,
        private _routeParams: RouteParams){

    }

    ngOnInit():any {
        var year = this._routeParams.get("year");
        var month = this._routeParams.get("month");
        this.archive = this._archiveService.getArchiveByYearMonth(year, month);
    }

}