import {Component, OnInit} from 'angular2/core';
import {RouteParams} from "angular2/router";


@Component({
    template: `
        <h1>Archives</h1>
        <div>
            {{ year }} / {{month}}
        </div>
    `
})
export class ArchiveDetailsComponent implements OnInit {
    private year;
    private month;

    constructor(private _routeParams: RouteParams){

    }

    ngOnInit():any {
        this.year = this._routeParams.get("year");
        this.month = this._routeParams.get("month");
    }

}