import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ArchivesComponent} from "./ArchivesComponent";
import {ArchiveDetailsComponent} from "./ArchiveDetailsComponent";


@RouteConfig([
    {path: '/archives', name: 'Archives', component: ArchivesComponent},
    {path: '/archives/:year/:month', name: 'ArchiveDetails', component: ArchiveDetailsComponent},
    {path: '/*other', name: 'Other', redirectTo: ['Archives']}
])
@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
}