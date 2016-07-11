import {Injectable} from 'angular2/core';

@Injectable()
export class ArchiveService {
    getArchives() {
        return [
            {year: 2016, month: 1},
            {year: 2016, month: 2},
            {year: 2016, month: 3}
        ];
    }

    getArchiveByYearMonth(archive) {
        var found = (arc) => {
            return {year: arc.year, month: arc.month};
        };


        var result = this.getArchives().find(found);
        console.log(result);
        return result;
    }
}
