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

    getArchiveByYearMonth(year, month) {
        var archive = {year: year, month: month};

        var result = this.getArchives().find(archive);
        return result;
    }
}
